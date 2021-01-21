const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: String,
            name: String,
            time: Number,
            sets: Number,
            weight: Number,
            distance: Number,
        },
    ]
})

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;