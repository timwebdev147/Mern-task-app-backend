const express = require('express')
const { getTasks, createTask, getTask, deleteTask, updateTask } = require('../controllers/taskConroller')
const Task = require('../model/taskModel')
const router = express.Router()



router.post('/', createTask)
router.get('/', getTasks)
router.get('/:id', getTask)
router.delete('/:id', deleteTask)
router.put('/:id', updateTask)


module.exports = router;