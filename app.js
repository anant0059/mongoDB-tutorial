// or as an es module:
// import { MongoClient } from 'mongodb'

const e = require('express');
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/fruitsDB", () => {
  console.log("Connected to MongoDB");
});


const frutiSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  //rating: Number,
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", frutiSchema);


const fruit = new Fruit({
  name: "Apple",
  rating: 10,
  review: "Pretty solid as a fruit."
});

//fruit.save();

// --------UPDATE--------

// Fruit.updateOne({_id: "63f773800671241e2e13224c"}, {name: "Peach"}, function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     mongoose.connection.close();

//     console.log("Succesfully updated the document.");
//   }
// })

///   ---------DELETE--------

// Fruit.deleteOne({_id: "63f7b26f134a670691e33def"}, function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     mongoose.connection.close();

//     console.log("Succesfully deleted the document.");
//   }
// })



// const fruit = new Fruit({
//   name: "Apple",
//   rating: 7,
//   review: "Taste Good"
// });

// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 10,
//   review: "The best fruits!"
// });

// const orange = new Fruit({
//   name: "orange",
//   score: 8,
//   review: "The best fruits!"
// });

// const banana = new Fruit({
//   name: "banana",
//   score: 10,
//   review: "The best fruits!"
// });

// fruit.save();

// --------INSERT------------

// Fruit.insertMany([kiwi, orange, banana], function(err) {
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("Succesfully saved all the fruits to fruitsDB");
//   }
// })


// -----------FIND--------------

// Fruit.find(function(err, fruits){
//   if(err){
//     console.log(err);
//   }
//   else{
//     //console.log(fruits);
//     mongoose.connection.close();

//     fruits.forEach(function(fruit){
//       console.log(fruit.name);
//     })
//   }
// })

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favouriteFruit: frutiSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  score: 9,
  review: "Great fruit."
})

pineapple.save();

const person = new Person({
  name: "John",
  age: 37
})

const newPerson = new Person({
  name: "Amy",
  age: 37,
  favouriteFruit: pineapple
})

//newPerson.save();

// -------------DELETE MANY-----------------

// Person.deleteMany({name: "John"}, function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("Succesfully deleted all the document");
//   }
// })


Person.updateOne({_id: "63f7b55c6f44dca08c278f99"}, {favouriteFruit: fruit}, function(err){
  if(err){
    console.log(err);
  }
  else{
    //mongoose.connection.close();

    console.log("Succesfully updated the document.");
  }
});
