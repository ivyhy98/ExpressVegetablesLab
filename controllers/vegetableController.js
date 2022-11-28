const express = require("express");
const router = express.Router();
const Vegetables = require("../models/vegetables");


router.get("/", (req, res) => {
  Vegetables.find({}, (err, allVeggies) => {
    if (!err) {
      res.status(200).render("vegetables/Index", {
        vegetables: allVeggies,
      });
    } else {
      res.send(err);
    }
  });
});
router.get("/new", (req, res) => {
  res.render("vegetables/New");
});

router.get("/:id", (req, res) => {
  // res.send(fruits[req.params.indexOfFruit]);
  Vegetables.findById(req.params.id, (error, createdVeg) => {
    if (!error) {
      res.status(200).render("vegetables/Show", {
        vegetable: createdVeg,
      });
    } else {
      res.status(500).send(error);
    }
  });
});

router.post("/", (req, res) => {
  if (req.body.readyToEat == "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  Vegetables.create(req.body, (err, createdVeg) => {
    if (!err) {
      res.status(200).redirect("/vegetables");
    } else {
      res.status(400).send(err);
    }
  });
});

router.delete("/:id", (req, res) => {
  Vegetables.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/vegetables"); //redirect back to fruits index
  });
});

router.get("/:id/edit", (req, res) => {
  Vegetables.findById(req.params.id, (err, foundVegetable) => {
    if (!err) {
      res.render("vegetables/Edit", {
        vegetable: foundVegetable,
      });
    } else {
      res.send(err);
    }
  });
});

router.put("/:id", (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  console.log(req.body);

  Vegetables.findByIdAndUpdate(
    req.params.id,
    req.body,
    (err, changedVegetable) => {
      if (!err) {
        res.redirect(`/vegetables/${req.params.id}`);
      } else {
        res.send(err);
      }
    }
  );
});

module.exports = router;