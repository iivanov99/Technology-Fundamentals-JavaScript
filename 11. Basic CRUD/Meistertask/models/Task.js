const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
    title: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    status: {
        type: mongoose.Schema.Types.String,
        enum: ['Open', 'In Progress', 'Finished']
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;