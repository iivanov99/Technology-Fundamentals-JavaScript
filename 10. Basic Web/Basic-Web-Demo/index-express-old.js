const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('<h1>Hello World!</h1>');
});

const books = [
    {
        id: 1,
        title: 'Holy Bible',
        author: 'Holy Ghost'
    },
    {
        id: 2,
        title: 'Strength to continue',
        author: 'Curry Blake'
    }
];

app.get('/books', function (req, res) {
    let responseData = '';
    books.forEach(book => {
        responseData += `<h1>Id: ${book.id}, Title: ${book.title}, Author: ${book.author}.</h1>`;
    });
    res.send(responseData);
});

app.get('/books/:id', function (req, res) {
    const searchedBook = books.find(book => book.id === Number(req.params.id));
    let response = '';

    if (searchedBook) {
        response = `<h1>Book: ${searchedBook.title}</h1>`;
    } else {
        response = `<h1>There is not book with id: ${req.params.id} in the database.</h1>`;
    }

    res.send(response);
});

app.listen(port, () => {
    console.log(`Server litening on port ${port}...`);
});