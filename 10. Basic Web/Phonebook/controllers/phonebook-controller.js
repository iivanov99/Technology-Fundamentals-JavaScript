const phonebook = require('../phonebook');
const Contact = require('../models/Contact.js');

module.exports = {
  index: (req, res) => {
    const contacts = phonebook.getPhonebook();
    res.render('index', { contacts, layout: false });
  },
  addPhonebookPost: (req, res) => {
    const newContact = new Contact(req.body.name, req.body.number);
    phonebook.addContact(newContact);
    res.redirect('/');
  }
}