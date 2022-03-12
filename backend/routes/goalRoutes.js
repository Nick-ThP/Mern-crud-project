const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal)

/* router.get('/', getGoals)
router.set('/', setGoal) */

router.route('/:id').put(updateGoal).delete(deleteGoal)

/* router.update('/:id', updateGoal)
router.delete('/:id', deleteGoal) */

module.exports = router