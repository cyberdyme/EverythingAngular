
describe('Upper case title text ', () => {
  it('should upper case the following correctly correctly' , () => {
    expect(UpperCaseFirstAllWords("girish thanki")).toBe("Girish Thanki");
  });

  it('should upper case the following all upper case text correctly correctly' , () => {
    expect(UpperCaseFirstAllWords("GIRISH THANKI")).toBe("Girish Thanki");
  });

  it('should upper case the following all upper case text correctly correctly' , () => {
    expect(UpperCaseFirstAllWords("GiRiSH 123 tHaNkI")).toBe("Girish 123 Thanki");
  });


  it('should upper case the following all upper case text correctly correctly' , () => {
    expect(UpperCaseFirstAllWords("ABC")).toBe("Abc");
  });

  it('should upper case empty string correctly correctly' , () => {
    expect(UpperCaseFirstAllWords("")).toBe("");
  });

  it('should upper case empty string correctly correctly' , () => {
    expect(UpperCaseFirstAllWords(null)).toBe(null);
  });
});

describe('A means to determine if object is an integer', () => {
  it('should correctly report it is an integer' , () => {
    expect(IsNumber(7)).toBeTruthy();
  });

  it('should correctly report float is not a valid integer' , () => {
    expect(IsNumber(7.1)).toBeFalsy();
  });

  it('should correctly report string is not a valid integer' , () => {
    expect(IsNumber("One")).toBeFalsy();
  });

  it('should correctly report string holding number is not a valid integer' , () => {
    expect(IsNumber("1")).toBeFalsy();
  });

  it('should correctly report null is not a valid integer' , () => {
    expect(IsNumber(null)).toBeFalsy();
  });

  it('should correctly report undefined is not a valid integer' , () => {
    expect(IsNumber(undefined)).toBeFalsy();
  });
});


describe('A means to number is within range', () => {
  it('should correctly report 1 is within range 1 to 10' , () => {
    expect(NumberWithinRange(1,1,10)).toBeTruthy();
  });

  it('should correctly report 0 is not within range 1 to 10' , () => {
    expect(NumberWithinRange(0,1,10)).toBeFalsy();
  });

  it('should correctly report 11 is not within range 1 to 10' , () => {
    expect(NumberWithinRange(11,1,10)).toBeFalsy();
  });
});
