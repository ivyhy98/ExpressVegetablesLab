const express = require('express');
const router = express.Router();
const Fruit = require("../models/fruits");

//Seed Route
router.get('/seed',(req,res)=>{
  Fruit.create([
    {
      name: 'grapefruit',
      color: 'pink',
      readyToEat: true
    },
    {
      name: 'pineapple',
      color: 'yellow',
      readyToEat: true
    },
    {
      name: 'kiwi',
      color: 'green',
      readyToEat: false
    },
  ],(err, data)=>{
    res.redirect('/fruits')
  });
});


//Index
router.get("/", (req, res) => {
  Fruit.find({}, (error, allFruits) => {
    res.render("fruits/Index", {
      fruits: allFruits,
    });
  });
});

//New
router.get("/new", (req, res) => {
  res.render("fruits/New");
});


router.post("/", (req, res) => {
  if (req.body.readyToEat == "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  Fruit.create(req.body, (error, createdFruit) => {
    if (!error) {
      res.status(200).redirect("/fruits");
    } else {
      res.status(400).send(error);
    }
  });
});

//Show
router.get("/:id", (req, res) => {
  // res.send(fruits[req.params.indexOfFruit]);
  Fruit.findById(req.params.id, (error, fruitById) => {
    if (!error) {
      res.status(200).render("fruits/Show", {
        fruit: fruitById,
      });
    } else {
      res.status(400).send(error);
    }
  });
});

//Edit
router.get("/:id/edit", (req, res) => {
  Fruit.findById(req.params.id, (err, foundFruit) => {
    if (!err) {
      res.render("fruits/Edit", {
        fruit: foundFruit,
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});
// Change
router.put("/:id", (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  Fruit.findByIdAndUpdate(req.params.id, req.body, (err, updatedFruit) => {
    console.log(updatedFruit);
    if (!err) {
      res.redirect(`/fruits/${req.params.id}`);
    } else {
      res.send(err);
    }
  });
});

//Delete
router.delete("/:id", (req, res) => {
  Fruit.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/fruits");
  });
});
module.exports = router;