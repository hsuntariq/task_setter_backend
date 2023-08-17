const express = require('express');
const { postGoals, getGoals, updateGoals,deleteGoals } = require('../controllers/goalController');
const AuthMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/').get(AuthMiddleware,getGoals).post(AuthMiddleware,postGoals)
router.route('/:id').put(updateGoals).delete(deleteGoals);


module.exports = router;