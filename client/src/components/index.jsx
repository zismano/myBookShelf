import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// components
import BookList from './BookList.jsx';
import Search from './search.jsx';
import DisplaySearchedBook from './DisplaySearchedBook.jsx';
const {createBookObject} = require('../../../helpers/helpers');

const axios = require('axios');

class App extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	unreadBooks: [
				{
					title: "1984",
					author: "George Orwell",
					publishedDate: "1983-10-17",
					thumbnail: "http://books.google.com/books/content?id=kotPYEqx7kMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
				},
				{
					title: "The Last Man in Europe: A Novel",
					author: "Dennis Glover",
					publishedDate: "2017-11-14",
					thumbnail: "http://books.google.com/books/content?id=E6UxDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
				}
			],
	  	savedBooks: [
				{
					title: "1984",
					author: "George Orwell",
					publishedDate: "1983-10-17",
					thumbnail: "http://books.google.com/books/content?id=kotPYEqx7kMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
				},
				{
					title: "The Last Man in Europe: A Novel",
					author: "Dennis Glover",
					publishedDate: "2017-11-14",
					thumbnail: "http://books.google.com/books/content?id=E6UxDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
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
			unreadBooks,
			currBook,
			searchResults,
			savedBooks
		} = this.state;

//		let isCurrBooks = currBook !== '' ? true : false;
	  return (
		<div>
			<h1>Welcome to my bookshelf</h1>
			<p>You can search for books, add them to one of the bookshelves. Rate and comment</p>
			<h2>Books to Read</h2>
			<BookList Books={unreadBooks}/>
			<h2>Saved Books</h2>
			<BookList Books={savedBooks}/>
			<Search getBook={this.getBook}/>
			<button id="moveFromSavedBooksToUnreadBooks">Move Book to Shelf</button>
			<button id="moveFromUnreadBooksToSavedBooks">Move Book to Saved</button>
			<DisplaySearchedBook
				searchedBookResults={searchResults}
				addBook={this.addBookToShelf}
			/>
		</div>
	  )
	}
}


			// {isCurrBooks ? (
			// 	<div className="book-found">
			// 			<h2>Book Found </h2>
			// 			<h3>{currBook.title} By {currBook.authors[0]}</h3>
			// 			{currBook.categories ? (
			// 				<h4>Categories: {currBook.categories[0]}</h4>
			// 			) : (
			// 				<h4></h4>
			// 			)}
			// 			<h4>Published: {currBook.publishedDate}</h4>
			// 			<img src={currBook.imageLinks.thumbnail}></img>
			// 	</div>
			// 		) : (
			// 			<div>Book not found</div>
			// 	)}
ReactDOM.render(<App/>, document.getElementById("App"));
