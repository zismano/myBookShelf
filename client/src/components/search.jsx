import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {searchBook} from '../actions/bookActions';
import DisplaySearchedBook from './DisplaySearchedBook.jsx';

const axios = require('axios');

class Search extends Component {

	render() {
		let title;
		let author;

		return (
	 		<div>
				Title:<input id="searchTitle" type="text"
					placeholder="e.g: The Catcher in the Rye"
					ref={input => title = input}/>
				Author:<input id="searchAuthor" type="text"
					placeholder="e.g: Fitzgerald"
					ref={input => author = input}/>
				<button
					id="searchButton"
					onClick={() => this.props.searchBook(title.value, author.value)}>
					Find
				</button>
				{this.props.books ? (
					<DisplaySearchedBook searchResults={this.props.books}/>
				) : (
					<div></div>
				)}
			</div>
		)
	}
}

Search.PropTypes = {
		searchBook: PropTypes.func.isRequired,
		books: PropTypes.array.isRequires
}

const mapStateToProps = state => ({
	books: state.books.searchedItem.data
})

export default connect(mapStateToProps, {searchBook})(Search);
