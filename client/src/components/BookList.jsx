import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {fetchBooks, removeBook} from '../actions/bookActions';

class BookList extends Component {

	toggleBookDetails(index) {
		let divs = document.querySelectorAll(".extra-details");
		divs[index].classList.toggle("invisible-div");
	}

	render() {
		const books = this.props.books.map((book, i) => {
			const volume = book.volumeInfo;
			return (
				<div className="book-entry" key={i}>
					<li onClick={(e) => this.toggleBookDetails(i)}>
						{volume.title} By {volume.authors[0]}
						<button className="read-button">Read</button>
						<button className="unread-button">Unread</button>
						<button
							className="remove-button"
							onClick={() => this.props.removeBook(book)}>
							Remove
						</button>
						<div className="extra-details invisible-div">
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
