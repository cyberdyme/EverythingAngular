const express = require('express')
var path = require('path')
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express()

// use it before all route definitions
app.use(cors({origin: 'http://localhost:4200'}));

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json()); // support json encoded bodies


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(3000, () => console.log('Example app listening on port 3000!'))

// some data for the API
var foods = [
    { "id": 1, "name": "Donuts" },
    { "id": 2, "name": "Pizza" },
    { "id": 3, "name": "Tacos" }
];

var books = [
    { "title": "Hitchhiker's Guide to the Galaxy" },
    { "title": "The Fellowship of the Ring" },
    { "title": "Moby Dick" }
];

var movies = [
    { "title": "Ghostbusters" },
    { "title": "Star Wars" },
    { "title": "Batman Begins" }
];

const searchModel  = [
    {
        id: '22',
        version: 3,
        baseKey: {
            region: 'testRegion1',
            undRegionGroup: 'region1',
            swapGroup: 'testSwapGroup1',
            modelGroup: 'modelGroup1'
        },
        lastUpdatedTime: '2018-04-04T10:04:46.295',
        lastUpdatedBy: 'anyOne1',
        reviewedBy: 'anyOne1',
        reviewedTime: '2018-04-04T10:04:46.31'
    },
    {
        id: '85',
        version: 2,
        baseKey: {
            region: 'testRegion2',
            undRegionGroup: 'region2',
            swapGroup: 'testSwapGroup2',
            modelGroup: 'modelGroup2'
        },
        lastUpdatedTime: '2018-05-21T12:05:55.526',
        lastUpdatedBy: 'anyOne2',
        reviewedBy: 'anyOne2',
        reviewedTime: '2018-05-21T12:05:55.528'
    }
];


// the "index" route, which serves the Angular app
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'/dist/index.html'))
});


app.get('/api/searchModel', function (req, res) {
    res.send(searchModel);
});

// the GET "books" API endpoint
app.get('/api/books', function (req, res) {
    res.send(books);
});

// the GET "movies" API endpoint
app.get('/api/movies', function (req, res) {
    res.send(movies);
});

// the GET "foods" API endpoint
app.get('/api/food', function (req, res) {
    res.send(foods);
});

// POST endpoint for creating a new food
app.post('/api/food', function (req, res) {
    // calculate the next ID
    let id = 1;
    if (foods.length > 0) {
        let maximum = Math.max.apply(Math, foods.map(function (f) { return f.id; }));
        id = maximum + 1;
    }
    let new_food = {"id": id, "name": req.body.name};
    foods.push(new_food);
    res.send(new_food);
});

// PUT endpoint for editing food
app.put('/api/food/:id', function (req, res) {
    let id = req.params.id;
    let f = foods.find(x => x.id == id);
    f.name = req.body.name;
    res.send(f);
});

// DELETE endpoint for deleting food
app.delete('/api/food/:id', function (req, res) {
    let id = req.params.id;
    let f = foods.find(x => x.id == id);
    foods = foods.filter(x => x.id != id);
    res.send(f);
});

module.exports = app;
