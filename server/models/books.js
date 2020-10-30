// Student name: Osman Tahir
// Student # 301075554
// Cours: comp229-Web app development - Mid-Term Test

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
  title: String,    
  price: Number,
  author: String,
  genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
