const express = require('express');
const router = express.Router();
// const TASKS = require('../model/taskModel');
const taskController = require('../controller/taskController')


// create   C -- create
router.post('/create', taskController.create_task)
// getAll   R -- read
router.get('/getAll',taskController.all_tasks)
// update   U -- update
router.patch('/update/:taskId',taskController.update_task)
// delete   D -- delete
router.delete('/delete/:taskId',taskController.delete_task)

// singleTask  --Params
router.get('/specific/:taskId',taskController.specific_task)
module.exports = router