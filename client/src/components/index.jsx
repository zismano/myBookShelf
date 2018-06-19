import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MyBookList from './MyBookList.jsx';
import Search from './search.jsx';

const axios = require('axios');

class App extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	myBooks: ['The Catcher in the Rye', '1984', 'Girl, Gone'],
	  	savedBooks: ['Needful things', 'Trilogy of the century'],
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
		.then(book => {
			console.log(book.data);
			this.setState({ currBook: book.data[0].volumeInfo });
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
			myBooks,
			currBook,
		} = this.state;

		let isCurrBooks = currBook !== '' ? true : false;

	  return (
		<div>
			<h1>Welcome to my bookshelf</h1>
			<p>You can search for books, add them to one of the bookshelves. Rate and comment</p>
			<MyBookList Books={this.state.myBooks}/>
			<div className="search">
			  <Search getBook={this.getBook} />
			</div>
			<button id="addToMyBooks">Add Book to Shelf</button>
			<button id="addToSavedBooks">Add Book to Saved</button>
			<button id="moveFromSavedBooksToMyBooks">Move Book to Shelf</button>
			<button id="moveFromMyBooksToSavedBooks">Move Book to Saved</button>
			{isCurrBooks ? (
				<div className="book-found">
						<h2>Book Found </h2>
						<h3>{currBook.title} By {currBook.authors[0]}</h3>
						{currBook.categories ? (
							<h4>Categories: {currBook.categories[0]}</h4>
						) : (
							<h4></h4>
						)}
						<h4>Published: {currBook.publishedDate}</h4>
						<img src={currBook.imageLinks.thumbnail}></img>
				</div>
					) : (
						<div>Book not found</div>
				)}
		</div>
	  )
	}
}

ReactDOM.render(<App/>, document.getElementById("App"));
