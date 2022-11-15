const express = require("express");
const fruits = require('./models/fruits.js');
const app = express();
const port = 3000;
const reactViews = require('express-react-views');
const vegetables = require("./models/vegetables.js");

//Set up our view engine must be done before our routes
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

//
app.get('/',(req,res)=>{
    res.render("Index")
})
app.get("/fruits", (req, res) => {
  res.render("fruits/Index",{
    fruits: fruits
  });
});
app.get("/vegetables", (req, res) => {
  res.render("vegetables/Index", {
    vegetables: vegetables,
  });
});
//Show our show page 
app.get('/fruits/:indexOfFruit',(req,res)=>{
   // res.send(fruits[req.params.indexOfFruit]);
   res.render("fruits/Show",{
    fruit: fruits[req.params.indexOfFruit]
   });
});

app.get("/vegetables/:indexOfVegetables", (req, res) => {
  // res.send(fruits[req.params.indexOfFruit]);
  res.render("vegetables/Show", {
    vegetable: vegetables[req.params.indexOfVegetables],
  });
});

app.listen(port,()=>{
    console.log('listening on port', port);
})