const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
    Workout.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate({ _id: req.params.id},
      {$push: { exercises: req.body } },
      {new: true, runValidators: true })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
      });
  });

module.exports = router;