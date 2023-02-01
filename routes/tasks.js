const { getAllTasks, createTasks } = require('../controllers/tasks');

const router = require('express').Router();

router.route('/').get(getAllTasks)
router.route('/').post(createTasks)

module.exports = router;