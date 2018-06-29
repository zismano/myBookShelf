import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {fetchBooks, removeBook} from '../actions/bookActions';

class BookList extends Component {

	render() {
		console.log(this.props.books);
		const books = this.props.books.map((book, i) => {
			return (
				<div className="book-entry" key={i}>
					<li>
						{book.volumeInfo.title} By {book.volumeInfo.authors[0]}
						<button className="read-button">Read</button>
						<button className="unread-button">Unread</button>
						<button
							className="remove-button"
							onClick={() => this.props.removeBook(book)}>
							Remove
						</button>
					</li>
				</div>
			);
		})

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

BookList.propTypes = {
	fetchBooks: PropTypes.func.isRequired,
	removeBook: PropTypes.func.isRequired,
	books: PropTypes.array.isRequired
}

export default connect(mapStateToProps, {fetchBooks, removeBook})(BookList);

// {this.state.showDetails ? (
// 	<div>
// 		<h4>Published: {book.publishedDate}</h4>
// 		<img src={book.thumbnail}></img>
// 	</div>
// ) : (
// 	<div></div>
// )}

// <li onClick={() =>
// 		this.toggleBookDetails({ showDetails: !this.state.showDetails})}
// >
