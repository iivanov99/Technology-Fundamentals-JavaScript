const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    status: { type: String, required: true, enum: ['Finished', 'In Progress', 'Open'] }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;