const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoal)

/* router.get('/', getGoals)
router.set('/', setGoal) */

router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)

/* router.update('/:id', updateGoal)
router.delete('/:id', deleteGoal) */

module.exports = router