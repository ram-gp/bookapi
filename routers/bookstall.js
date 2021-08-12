const bookscontroller = require('../controllers/books');

const bookstall = require('express').Router();

bookstall.get('/books',bookscontroller.getAllBooks);
bookstall.get('/books/:id',bookscontroller.getAllBooksById);

module.exports = bookstall;