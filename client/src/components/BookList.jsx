import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {
	fetchBooks,
	removeBook,
	changeStatusOfBook,
	toggleBookDetails
} from '../actions/bookActions';

class BookList extends Component {
	constructor(props) {
		super(props);
		this.checkClickAndToggleBookDetails = this.checkClickAndToggleBookDetails.bind(this);
	}

	checkClickAndToggleBookDetails(e, book) {
		if (e.target.value !== 'button') {	// when click on read/unread/remove don't toggle details
			this.props.toggleBookDetails(book);
		}
	}

	render() {
		const books = this.props.books.map((book, i) => {
			if (this.props.view.allBooks || (book.isRead && this.props.view.read) || (!book.isRead && this.props.view.unread)) {
				const volume = book.volumeInfo;
				const uuidv4 = require('uuid/v4');
				return (
					<div className='book-entry' key={uuidv4()}>
						<li onClick={(e) => this.checkClickAndToggleBookDetails(e, book)}>
							{volume.title} By {volume.authors[0]}
							<button
								className="read-button"
								value="button"
								onClick={() => this.props.changeStatusOfBook(book, true)}>
								Read
							</button>
							<button
								className="unread-button"
								value="button"
								onClick={() => this.props.changeStatusOfBook(book, false)}>
								Unread
							</button>
							<button
								className="remove-button"
								value="button"
								onClick={() => this.props.removeBook(book)}>
								Remove
							</button>
							{book.areDetailsShown ? (
								<div>
									{volume.categories ? (
										<h4>Categories: {volume.categories[0]}</h4>
									) : (
										<h4/>
									)}
									{volume.description ? (
										<h4 className="book-description">{volume.description}</h4>
									) : (
										<h4/>
									)}
									{volume.averageRating && volume.ratingsCount ? (
										<h4>Rating: {volume.averageRating}/5 ({volume.ratingsCount})</h4>
									) : (
										<h4/>
									)}
									<h4>Published: {volume.publishedDate}</h4>
									<img src={volume.imageLinks.thumbnail}></img>
								</div>
							) : (<div></div>)}
						</li>
					</div>
				);
			}
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
	view: state.books.view,
	books: state.books.items
})

BookList.propTypes = {
	fetchBooks: PropTypes.func.isRequired,
	removeBook: PropTypes.func.isRequired,
	changeStatusOfBook: PropTypes.func.isRequired,
	toggleBookDetails: PropTypes.func.isRequired,
	books: PropTypes.array.isRequired
}

export default connect(mapStateToProps, {
	fetchBooks,
	removeBook,
	changeStatusOfBook,
	toggleBookDetails
})(BookList);
