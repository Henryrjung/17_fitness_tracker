const router = require('express').router();
const Workout = require('../models/workout');

router.get("/workouts", (req, res) => {
    Workout.find({})
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.status(500).json(err);
    })
});

router.put("workouts/:id", (req, res) => {
    console.log(`id ${req.params.id} updated`);
})

module.exports = router