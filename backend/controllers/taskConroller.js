const Task = require("../model/taskModel");

// create a Task
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

// get all tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);

    } catch (error) {
        res.status(500).json(error);
    }
}


// get single task by Id
const getTask = async (req, res) => {
    try{
        const {id} = req.params;
        const tasks = await Task.findById(id);
        if (!tasks) {
            return res.status(404).json({msg: `task with ID: ${id} was not found`})
        };
        res.status(200).json(tasks);
    } catch(error) {
        res.status(500).json(error)
    }
}

const deleteTask = async (req, res) => {
    try {
        const {id} = req.params;
        const tasks = await Task.findByIdAndDelete(id);
        if (!tasks) {
            return res.status(404).json({msg: `task with ID: ${id} was not found`})
        };
        res.status(200).json({msg: `task with ID: ${id} has been successfully deleted`});
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateTask = async (req, res) => {
    try {

        const {id} = req.params;
        const task = await Task.findByIdAndUpdate(
            {_id: id}, req.body, {
                new: true,
                runValidators: true,
            }
        )
        if(!task){
            return res.status(404).json({msg: `task with ID: ${id} was not found`})
        }

        res.status(200).json({msg: `task with ID: ${id} has been updated successfully`})

    } catch (error) {
        res.status(500).json(error)
    }
}



module.exports = {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask,
}