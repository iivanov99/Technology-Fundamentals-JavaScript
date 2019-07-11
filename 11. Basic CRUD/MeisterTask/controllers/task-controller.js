const Task = require('../models/Task.js');

module.exports = {
  getIndex: function (req, res) {
    Task
      .find()
      .then(tasks => {
        const openTasks = tasks.filter(task => task.status === 'Open');
        const inProgressTasks = tasks.filter(task => task.status === 'In Progress');
        const finishedTasks = tasks.filter(task => task.status === 'Finished');

        res.render('index', { openTasks, inProgressTasks, finishedTasks });
      });
  },
  getCreate: function (req, res) {
    res.render('create');
  },
  postCreate: function (req, res) {
    Task
      .create(req.body)
      .then(() => {
        res.redirect('/');
      });
  },
  getEdit: function (req, res) {
    Task
      .findById(req.params.id)
      .then(task => {
        res.render('edit', { task });
      });
  },
  postEdit: function (req, res) {
    Task
      .findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect('/');
      });
  },
  getDelete: function (req, res) {
    Task
      .findById(req.params.id)
      .then(task => {
        res.render('delete', { task });
      });
  },
  postDelete: function (req, res) {
    Task
      .findByIdAndDelete(req.params.id)
      .then(() => {
        res.redirect('/');
      });
  }
};