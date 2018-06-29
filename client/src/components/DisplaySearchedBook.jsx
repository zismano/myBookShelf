import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {addBook, fetchSearchResults} from '../actions/bookActions';

class DisplaySearchedBook extends Component {

  render() {
    let searchResults;
    if (this.props.books.data) {
      searchResults = this.props.books.data.map((result, i) => {
        let volume = result.volumeInfo;
        return (
          <div key={i}>
          {volume.authors ? (
            <h3>{i + 1}. {volume.title} By {volume.authors[0]}</h3>
          ) : (
            <h3>{i + 1}. {volume.title}</h3>
          )}
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
          <h5>Published: {volume.publishedDate}</h5>
          <img src={volume.imageLinks.thumbnail}></img>
          <br/>
          <button
            id="addToMyBooks"
            onClick={() => this.props.addBook(result)}>
            Add Book to My Book Shelf
          </button>
          </div>
        )
      })
    } else {
      searchResults = <div/>
    }

    return (
      <div>
        {searchResults}
      </div>
    )
  }
}

DisplaySearchedBook.propTypes = {
  addBook: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
	books: state.books.searchResults
})

export default connect(mapStateToProps, {addBook, fetchSearchResults})(DisplaySearchedBook);
