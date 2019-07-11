const Product = require('../models/Product.js');

module.exports = {
  getIndex: function (req, res) {
    Product
      .find({})
      .then((products) => {
        res.render('index', { products });
      });
  },
  getCreate: function (req, res) {
    res.render('create');
  },
  postCreate: function (req, res) {
    const product = req.body;

    Product
      .create(product)
      .then(() => {
        res.redirect('/');
      });
  },
  getEdit: function (req, res) {
    Product
      .findById(req.params.id)
      .then((product) => {
        res.render('edit', { product });
      });
  },
  postEdit: function (req, res) {
    Product
      .findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect('/');
      });
  },
  getDelete: function (req, res) {
    res.render('delete', { id: req.params.id });
  },
  postDelete: function (req, res) {
    Product
      .findByIdAndDelete(req.params.id)
      .then(() => {
        res.redirect('/');
      });
  }
};