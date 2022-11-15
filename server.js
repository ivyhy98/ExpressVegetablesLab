const express = require("express");
const fruits = require('./models/fruits.js');
const app = express();
const port = 3000;
const reactViews = require('express-react-views');

//Set up our view engine must be done before our routes
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

//
app.get("/", (req, res) => {
  res.render("Index",{
    fruits: fruits
  });
});
//Show our show page 
app.get('/fruits/:indexOfFruit',(req,res)=>{
   // res.send(fruits[req.params.indexOfFruit]);
   res.render("Show",{
    fruit: fruits[req.params.indexOfFruit]
   });
});

app.listen(port,()=>{
    console.log('listening on port', port);
})