const express = require('express')
const {

    createWorkout,
    getWorkouts,
    getSingleworkout,
    deleteWorkout,
    updateWorkout
} = require('../Controller/WorkoutController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes 
router.use(requireAuth)

//all workouts
router.get('/', getWorkouts )

//single workout
router.get('/:id',getSingleworkout)


//post a new workout
router.post('/', createWorkout)


// delete a workout
router.delete('/:id',deleteWorkout)


//update a new workout 
router.patch('/:id',updateWorkout)

module.exports = router