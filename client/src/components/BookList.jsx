import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchBooks} from '../actions/bookActions';

class BookList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const books = this.props.books.map((book, i) => (
			<div className="book-entry" key={i}>
				<li onClick={() =>
						this.setState({ showDetails: !this.state.showDetails})}
				>{book.title} By {book.author}
					<button className="read-button">Read</button>
					<button className="unread-button">Unread</button>
					<button className="remove-button">Remove</button>
				</li>
			</div>
		))

		return (
			<div className="shelf">
			  <ul>
					{books}
			  </ul>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	books: state.books.items
})

export default connect(mapStateToProps, {fetchBooks})(BookList);

// {this.state.showDetails ? (
// 	<div>
// 		<h4>Published: {book.publishedDate}</h4>
// 		<img src={book.thumbnail}></img>
// 	</div>
// ) : (
// 	<div></div>
// )}
