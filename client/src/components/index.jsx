import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {createBookObject}  from '../../../helpers/helpers';
import store from '../store';
const axios = require('axios');

// components
import BookList from './BookList.jsx';
import Search from './search.jsx';
import DisplaySearchedBook from './DisplaySearchedBook.jsx';


class App extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
			books: [
				{
					title: "1984",
					author: "George Orwell",
					publishedDate: "1983-10-17",
					thumbnail: "http://books.google.com/books/content?id=kotPYEqx7kMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
					status: "read"
				},
				{
					title: "The Last Man in Europe: A Novel",
					author: "Dennis Glover",
					publishedDate: "2017-11-14",
					thumbnail: "http://books.google.com/books/content?id=E6UxDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
					status: "unread"
				}
			],
			searchResults: [],
			currBook: '',
	  }

	  this.getBook = this.getBook.bind(this);
		this.addBookToShelf = this.addBookToShelf.bind(this);
	}

	getBook(title, author) {
		axios.get('/search', {
			params: {
				title,
				author
			},
		})
		.then(books => {
			console.log(books.data);
//			this.setState({ currBook: book.data[0].volumeInfo });
		  this.setState({ searchResults: books.data });
		})
		.catch(err => {
			console.log(err);
		})

	}

	addBookToShelf(index, shelf) {
		let bookToAdd = createBookObject(this.state.searchResults[index]);
		let currBooks = this.state[shelf].push(bookToAdd);
		this.setState({ shelf: currBooks });
	}

	render() {
		const {
			books,
			currBook,
			searchResults,
		} = this.state;

	  return (
			<Provider store={store}>
				<div>
					<h1>Welcome to my bookshelf</h1>
					<p>You can search for books, add them to one of the bookshelves. Rate and comment</p>
					<h2>My Book Shelf</h2>
					<BookList Books={books}/>
					<Search getBook={this.getBook}/>
					<DisplaySearchedBook
						searchedBookResults={searchResults}
						addBook={this.addBookToShelf}
					/>
				</div>
			</Provider>
	  )
	}
}

ReactDOM.render(<App/>, document.getElementById("App"));
