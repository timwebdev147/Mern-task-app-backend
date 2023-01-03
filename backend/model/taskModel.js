const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'please add a Task Name']
        },
        completed: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    {
        timestamps: true
    }
)

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task;