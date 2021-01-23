const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/workouts", (req, res) => {
  Workout.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/workouts/:id", (req, res) => {
  Workout.updateOne({ id: req.params.id }, { exercises: req.body }, (data) => {
    console.log(`id ${req.params.id} updated`);
  });
});

module.exports = router;