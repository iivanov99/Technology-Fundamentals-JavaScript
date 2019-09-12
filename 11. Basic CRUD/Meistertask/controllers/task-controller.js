const Task = require('../models/Task');

module.exports = {
  getIndex: async (req, res) => {
    try {
      const tasks = await Task.find({});

      const openedTasks = tasks.filter(task => task.status === 'Open');
      const inProgressTasks = tasks.filter(task => task.status === 'In Progress');
      const finishedTasks = tasks.filter(task => task.status === 'Finished');

      res.render('index', { openedTasks, inProgressTasks, finishedTasks });
    } catch (err) {
      res.status(500).send({ error: 'Could not fetch tasks' });
    }
  },
  getCreate: (req, res) => {
    res.render('create');
  },
  postCreate: async (req, res) => {
    try {
      await Task.create(req.body);
      res.redirect('/');
    } catch (err) {
      res.status(500).send({ error: 'Could not create new task' });
    }
  },
  getEdit: async (req, res) => {
    try {
      const taskToEdit = await Task.findById(req.params.id);
      res.render('edit', { task: taskToEdit });
    } catch (err) {
      res.status(500).send({ error: 'Could not task with such id in the database' });
    }
  },
  postEdit: async (req, res) => {
    try {
      await Task.findByIdAndUpdate(req.params.id, req.body);
      res.redirect('/');
    } catch (err) {
      res.status(500).send({ error: 'Could not update task' });
    }
  },
  getDelete: async (req, res) => {
    try {
      const taskToDelete = await Task.findById(req.params.id);
      res.render('delete', { task: taskToDelete });
    } catch (err) {
      res.status(500).send({ error: 'Could not task with such id in the database' });
    }
  },
  postDelete: async (req, res) => {
    try {
      await Task.findByIdAndDelete(req.params.id);
      res.redirect('/');
    } catch (err) {
      res.status(500).send({ error: 'Could not delete task' });
    }
  }
};