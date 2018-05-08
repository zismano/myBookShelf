import React from 'react';
import ReactDOM from 'react-dom';
import MyBookList from './MyBookList.jsx';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			myBooks: ['The Catcher in the Rye', '1984', 'Girl, Gone'],
			savedBooks: ['Needful things', 'Trilogy of the century']
		}
	}

	render() {
	  return (
		<div>
			<h1>Welcome to my bookshelf</h1>
			<p>You can search for books, add them to one of the bookshelves. Rate and comment</p>
			<MyBookList Books={this.state.myBooks}/>
			<div className="search">
			  <form>
				<input id="search" type="text" placeholder="e.g: The Catcher in the Rye"></input>
				<button id="searchButton">Find a book</button>
				<button id="addToMyBooks">Add book to my shelf</button>
				<button id="addToSavedBooks">Add book to saved books</button>
			  </form>
			</div>
		</div>
	  )
	}
}

ReactDOM.render(<App/>, document.getElementById("App"));