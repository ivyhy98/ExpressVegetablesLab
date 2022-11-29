require('dotenv').config()
const express = require("express");
const methodOverride = require('method-override')
const fruitsController = require('./controllers/fruitController');
const vegetableController = require('./controllers/vegetableController')
const app = express();
const port = 3000;
const reactViews = require('express-react-views');
const mongoose = require('mongoose');
//==== Connect to database ====
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open",()=>{
  console.log('connected to mongo')
})

//==== Set up our view engine ====
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

//==== Middleware ====
app.use((req,res,next)=>{
  next();
})
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))
// ==== Static Routes ====
app.use(express.static('public'));

//==== Routes===
app.use("/fruits", fruitsController);
app.use('/vegetables', vegetableController);

app.get('/',(req,res)=>{
    res.render("Index")
})

app.listen(port,()=>{
    console.log('listening on port', port);
})