import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

// import {createBookObject}  from '../../../helpers/helpers';
import store from '../store';

// components
import BookList from './BookList.jsx';
import Search from './Search.jsx';
import View from './View.jsx';
// import DisplaySearchedBook from './DisplaySearchedBook.jsx';


class App extends Component {
	constructor(props) {
	  super(props);
	}

	render() {
	  return (
			<Provider store={store}>
				<div>
					<h1>Welcome to my bookshelf</h1>
					<p>You can search for books, add them to one of the bookshelves. Rate and comment</p>
					<h2>My Book Shelf</h2>
					<BookList/>
					<Search/>
					<View/>
				</div>
			</Provider>
	  )
	}
}

ReactDOM.render(<App/>, document.getElementById("App"));
