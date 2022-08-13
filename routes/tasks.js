const express = require('express');
const router = express.Router();
const {getAllTasks,createTask,getSigleTask,updateTask,deleteTask} = require('../controllers/tasks');



router.get('/',getAllTasks);
router.post('/',createTask);
router.get('/:id',getSigleTask);
router.patch('/:id',updateTask);
router.delete('/:id',deleteTask);
module.exports = router;