const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/moviesApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!!");
    })
    .catch(err => {
        console.log("OH NO ERROR!!");
        console.log(err);
    })

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie', movieSchema)
// const batman = new Movie({ title: 'Batman', year: 2006, score: 9.0, rating: 'R' })

// Movie.insertMany([
//     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//     { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
//     { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
//     { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
//     { title: 'Rush Hour', year: 2000, score: 9.6, rating: 'PG' }
// ])
//     .then(data => {
//         console.log("IT WORKED");
//         console.log(data);
//     })