const mongoose = require("mongoose");

// const fruits = [
//   {
//     name: "apple",
//     color: "red",
//     readyToEat: true,
//   },
//   {
//     name: "pear",
//     color: "green",
//     readyToEat: false,
//   },
//   {
//     name: "banana",
//     color: "yellow",
//     readyToEat: true,
//   },
// ];

const fruitSchema = new mongoose.Schema({
  name: {type: String, required: true},
  color: {type: String, required: true},
  readyToEat: Boolean
},
{
  timestamps: true
})

const Fruit = mongoose.model('Fruit', fruitSchema)

module.exports = Fruit;