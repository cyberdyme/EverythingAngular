{"questionToAsk":{"equationWithoutAnswer":"4 + -10 = ?","rank":"Beginner","timeToAnswer":30},"currentStatus":{"rankQuestionNumber":1,"isCompleted":false,"isErrored":false,"message":null}}

# EverythingAngular

using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;

namespace AddItUp.Models
{
    public static class EnumExtensions
    {
        public static T Next<T>(this T src) where T : struct
        {
            if (!typeof(T).IsEnum)
            {
                throw new ArgumentException($"Argumnent {typeof(T).FullName} is not an Enum");
            }

            T[] arr = (T[])Enum.GetValues(src.GetType());
            int j = Array.IndexOf<T>(arr, src) + 1;
            return (arr.Length == j) ? arr.LastOrDefault() : arr[j];
        }

        public static T ToEnum<T>(this string value)
        {
            return (T)Enum.Parse(typeof(T), value, true);
        }
    }

    public enum Rank
    {
        Beginner,
        Intermmediate, 
        Advance,
        Expert,
        Completed
    }

    public class Question
    {

        // holds a + b = ?
        public string EquationWithoutAnswer { get; set; }
        public string Rank { get; set; }
        public int TimeToAnswer { get; set; }
    }

    public class Status
    {
        public int RankQuestionNumber { get; set; }
        public bool IsCompleted { get; set; }
        public bool IsErrored { get; set; }
        public string Message { get; set; }
    }

    public class Exercise
    {
        public Question QuestionToAsk { get; set; }
        public Status CurrentStatus { get; set; }
    }

    public class Answer
    {
        public Exercise AssociatedExercise{ get; set; }

        // holds a + b = N
        public string EquationWitAnswer { get; set; }
    }

    public class ExerciseFactoryCache
    {
        private readonly ConcurrentDictionary<string, string> _cache = 
            new ConcurrentDictionary<string, string>();

        public string Get(string key)
        {
            string value = null;
            if (!string.IsNullOrWhiteSpace(key))
            {
                _cache.TryGetValue(key, out value);
            }
            return value;

        }

        public bool Add(string key, string value)
        {
            return _cache.TryAdd(key, value);
        }
    }


    public class RandomNumberGenerator : IRandomNumberGenerator
    {
        private readonly Random _randomNumberGenerator;

        public RandomNumberGenerator()
        {
            _randomNumberGenerator = new Random(DateTime.Now.Millisecond);
        }

        public int GetNumber(int minValue, int maxValue)
        {
            return _randomNumberGenerator.Next(minValue, maxValue);
        }
    }

    public interface IRandomNumberGenerator
    {
        int GetNumber(int minValue, int maxValue);
    }

    public class ExerciseFactory
    {
        private const int InitialTimerValue = 30;
        private readonly ExerciseFactoryCache _cache = new ExerciseFactoryCache();
        private readonly IRandomNumberGenerator _randomNumberGenerator;

        public ExerciseFactory(IRandomNumberGenerator randomNumberGenerator)
        {
            _randomNumberGenerator = randomNumberGenerator;
        }

        public string GetAnswer(Question question)
        {
            return _cache.Get(question?.EquationWithoutAnswer ?? string.Empty);
        }

        public Exercise CreateInitialExercise()
        {
            Rank rankToUse = Rank.Beginner;
            var question = GenerateUniqueQuestionAndAnswer(rankToUse);
            return new Exercise
            {
                QuestionToAsk = new Question
                {
                    EquationWithoutAnswer = question.Key,
                    Rank = rankToUse.ToString(),
                    TimeToAnswer = InitialTimerValue
                },
                CurrentStatus = new Status()
                {
                    RankQuestionNumber = 1
                }
            };
        }

        // returns exercise in error if current answer is not correct
        public Exercise CreateNextExercise(Answer currentAnswer)
        {
            var actualAnswer = GetAnswer(currentAnswer.AssociatedExercise.QuestionToAsk);
            if (Equals(actualAnswer, currentAnswer.EquationWitAnswer))
            {
                // question answered correctly, create new Question
                var rankToUse = currentAnswer.AssociatedExercise.QuestionToAsk.Rank.ToEnum<Rank>();
                var timeToAnwser = currentAnswer.AssociatedExercise.QuestionToAsk.TimeToAnswer;
                var nextRankQuestionNumber = 
                    currentAnswer.AssociatedExercise.CurrentStatus.RankQuestionNumber + 1;

                if (nextRankQuestionNumber >= 3)
                {
                    // will return the next rank unless at expert (if so will keep returning this)
                    rankToUse = rankToUse.Next();
                    if (Equals(rankToUse, Rank.Completed))
                    {
                        // answered all question
                        return new Exercise()
                        {
                            QuestionToAsk = null,
                            CurrentStatus = new Status()
                            {
                                IsCompleted = true,
                                Message = "All questions answered"
                            }
                        };
                    }

                    nextRankQuestionNumber = 1;
                    timeToAnwser = timeToAnwser - 1;                   
                }

                var question = GenerateUniqueQuestionAndAnswer(rankToUse);
                return new Exercise
                {
                    QuestionToAsk = new Question
                    {
                        EquationWithoutAnswer = question.Key,
                        Rank = rankToUse.ToString(),
                        TimeToAnswer = timeToAnwser
                    },
                    CurrentStatus = new Status()
                    {
                        RankQuestionNumber = nextRankQuestionNumber
                    }
                };
            }

            return new Exercise()
            {
                QuestionToAsk = null,
                CurrentStatus = new Status()
                {
                    IsErrored = true,
                    Message = "Question was incorrectly answered"
                }
            };
        }

        public KeyValuePair<string, string> GenerateUniqueQuestionAndAnswer(Rank rankToUse)
        {
            var newQuestionAnswer = GenerateQuestionAndAnswer(_randomNumberGenerator, rankToUse);
            while (!_cache.Add(newQuestionAnswer.Key, newQuestionAnswer.Value))
            {
                newQuestionAnswer = GenerateQuestionAndAnswer(_randomNumberGenerator, rankToUse);
            }

            return newQuestionAnswer;
        }


        public static int GetNumberRange(Rank rankToUse)
        {
            switch (rankToUse)
            {
                case Rank.Intermmediate:
                    return 20;
                case Rank.Advance:
                    return 50;
                case Rank.Expert:
                    return 100;
                default:
                    return 20;
            }
        }

        public static KeyValuePair<string, string> GenerateQuestionAndAnswer(IRandomNumberGenerator randomNumberGenerator, Rank rankToUse)
        {
            int numberRange = GetNumberRange(rankToUse);
            var minValue = -numberRange;
            var maxValue = numberRange + 1;
            var firstItem = randomNumberGenerator.GetNumber(minValue, maxValue);
            var secondItem = randomNumberGenerator.GetNumber(minValue, maxValue);
            var answerItem = firstItem + secondItem;

            var equationWithoutAnswer = $"{firstItem} + {secondItem} = ?";
            var equationWithAnswer = $"{firstItem} + {secondItem} = {answerItem}";
            return new KeyValuePair<string, string>(equationWithoutAnswer, equationWithAnswer);
        }
    }
}



using System;
using AddItUp.Models;
using NUnit.Framework;

namespace AddItUp.Tests
{
    [TestFixture]
    public class RandomNumberGeneratorTest
    {
        [Test]
        public void EnsureWeCanGenerateRandomNumbersInRange()
        {
            var randomNumberGenerator = new RandomNumberGenerator();
            for (int i = 0; i < 1000; i++)
            {
                var result = randomNumberGenerator.GetNumber(0, 10);
                Assert.IsTrue(result >= 0 && result <= 10);
            }

            for (int i = 0; i < 1000; i++)
            {
                var result = randomNumberGenerator.GetNumber(9, 12);
                Assert.IsTrue(result >= 9 && result <= 12);
            }
        }
    }


    [TestFixture]
    public class ExerciseFactoryTests
    {
        public class MockRandomNumberGenerator : IRandomNumberGenerator
        {
            private readonly int[] _valueToReturn;
            private int _index;

            public MockRandomNumberGenerator(int [] valueToReturn)
            {
                _valueToReturn = valueToReturn;
            }

            public int GetNumber(int minValue, int maxValue)
            {
                return _valueToReturn[_index++];
            }
        }

        [Test]
        public void WhenWeCreateInitialExerciseWeShouldGetAValidExercise()
        {
            var factory = new ExerciseFactory(new MockRandomNumberGenerator(new int[]{1 , 2}));
            var exercise = factory.CreateInitialExercise();

            Assert.IsNotNull(exercise);
            Assert.IsNotNull(exercise.QuestionToAsk);
            Assert.AreEqual("1 + 2 = ?", exercise.QuestionToAsk.EquationWithoutAnswer);
            Assert.AreEqual("1 + 2 = 3", factory.GetAnswer(exercise.QuestionToAsk));
            Assert.IsTrue(exercise.QuestionToAsk.TimeToAnswer > 0);
            Assert.AreEqual(Rank.Beginner.ToString(), exercise.QuestionToAsk.Rank);
        }

        [Test]
        public void WhenWeCreateNextAnExerciseWithValidAnswerWeGetAValidNewExercise()
        {
            var factory = new ExerciseFactory(new MockRandomNumberGenerator(new int[] 
            {
                9, -3,
                2 , 3                
            }));

            var initialExercise = factory.CreateInitialExercise();
            var answer = new Answer()
            {
                AssociatedExercise = initialExercise,
                EquationWitAnswer = "9 + -3 = 6",
            };

            var exercise = factory.CreateNextExercise(answer);
            Assert.IsNotNull(exercise);
            Assert.IsNotNull(exercise.QuestionToAsk);
            Assert.AreEqual("2 + 3 = ?", exercise.QuestionToAsk.EquationWithoutAnswer);
            Assert.AreEqual("2 + 3 = 5", factory.GetAnswer(exercise.QuestionToAsk));

            // second question for current rank
            Assert.AreEqual(2, exercise.CurrentStatus.RankQuestionNumber);
            Assert.IsTrue(exercise.QuestionToAsk.TimeToAnswer > 0);
            Assert.AreEqual(Rank.Beginner.ToString(), exercise.QuestionToAsk.Rank);
        }

        [Test]
        public void WhenWeCallCreateNextExerciseWithInvalidAnswerWeGetAInvalidNewExercise()
        {
            var factory = new ExerciseFactory(new MockRandomNumberGenerator(new int[]
            {
                9, -3,
                2 , 3
            }));

            var initialExercise = factory.CreateInitialExercise();
            var answer = new Answer()
            {
                AssociatedExercise = initialExercise,
                EquationWitAnswer = "9 + -3 = 99",
            };

            var exercise = factory.CreateNextExercise(answer);
            Assert.IsNotNull(exercise);

            // we dont have a question
            Assert.IsNull(exercise.QuestionToAsk);

            // status is in error state
            Assert.IsTrue(exercise.CurrentStatus.IsErrored);
            Assert.IsFalse(exercise.CurrentStatus.IsCompleted);

            // we have message
            Assert.IsNotNull(exercise.CurrentStatus.Message);
        }

        [Test]
        public void WhenWeCallCreateNextExerciseWithMultipleTimesWithTheCorrectAnswerWeChangeRank()
        {
            var factory = new ExerciseFactory(new MockRandomNumberGenerator(new int[]
            {
                9, -3,
                2 , 3,
                3 , 3,
                4 , 4
            }));

            var initialExercise = factory.CreateInitialExercise();
            var secondExercise = factory.CreateNextExercise(new Answer()
            {
                AssociatedExercise = initialExercise,
                EquationWitAnswer = "9 + -3 = 6",
            });

            var thirdExercise = factory.CreateNextExercise(new Answer()
            {
                AssociatedExercise = secondExercise,
                EquationWitAnswer = "2 + 3 = 5",
            });

            var forthExercise = factory.CreateNextExercise(new Answer()
            {
                AssociatedExercise = thirdExercise,
                EquationWitAnswer = "3 + 3 = 6",
            });

            // should be 4 + 4
            Assert.IsNotNull(forthExercise);
            Assert.AreEqual("4 + 4 = ?", forthExercise.QuestionToAsk.EquationWithoutAnswer);
            Assert.AreEqual("4 + 4 = 8", factory.GetAnswer(forthExercise.QuestionToAsk));
        }



        [Test]
        public void WhenWeAskFinalQuestionAtExpertLevelThenExerciseStatusCompleted()
        {
            var factory = new ExerciseFactory(new MockRandomNumberGenerator(new int[]
            {
                9, -3
            }));

            var lastExercise = factory.CreateInitialExercise();
            lastExercise.CurrentStatus.RankQuestionNumber = 2;
            lastExercise.QuestionToAsk.Rank = Rank.Expert.ToString();


            var answer = new Answer()
            {
                AssociatedExercise = lastExercise,
                EquationWitAnswer = "9 + -3 = 6",
            };

            var exercise = factory.CreateNextExercise(answer);
            Assert.IsNotNull(exercise);

            // status is in error state
            Assert.IsTrue(exercise.CurrentStatus.IsCompleted);

            // we have message
            Assert.IsNotNull(exercise.CurrentStatus.Message);
        }
    }
}

