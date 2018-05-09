import React from 'react';
import ReactDOM from 'react-dom';
import MyBookList from './MyBookList.jsx';
import Search from './search.jsx';

const axios = require('axios');

class App extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	myBooks: ['The Catcher in the Rye', '1984', 'Girl, Gone'],
	  	savedBooks: ['Needful things', 'Trilogy of the century']
	  }

	  this.getBook = this.getBook.bind(this);
	}

	getBook(searchString) {
		axios.get('/search', { 
			params: { 
				search: searchString 
			},
		})
		.then(res => {
			console.log('hi');
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
	  return (
		<div>
			<h1>Welcome to my bookshelf</h1>
			<p>You can search for books, add them to one of the bookshelves. Rate and comment</p>
			<MyBookList Books={this.state.myBooks}/>
			<div className="search">
			  <Search getBook={this.getBook} />
			</div>
			<button id="addToMyBooks">Add book to my shelf</button>
			<button id="addToSavedBooks">Add book to saved books</button>
		</div>
	  )
	}
}

ReactDOM.render(<App/>, document.getElementById("App"));