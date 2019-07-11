const phonebook = [];

module.exports = {
	addContact(contact) {
		phonebook.push(contact);
	},
	getPhonebook() {
		return phonebook;
	}
}