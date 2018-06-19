import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// components
import BookList from './BookList.jsx';
import Search from './search.jsx';
import DisplaySearchedBook from './DisplaySearchedBook.jsx';

const axios = require('axios');

class App extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	unreadBooks: ['The Catcher in the Rye', '1984', 'Girl, Gone'],
	  	savedBooks: ['Needful things', 'Trilogy of the century'],
			searchResults: [],
			currBook: '',
	  }

	  this.getBook = this.getBook.bind(this);
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

	addBookToShelf(shelf, book) {
		let currBooks = this.state[shelf];
		this.setState({ shelf: [...currBooks, book] });
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
			<DisplaySearchedBook searchedBookResults={searchResults}/>
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
