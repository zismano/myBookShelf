import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addBook} from '../actions/bookActions';

class DisplaySearchedBook extends Component {

  render() {
      const searchResults = this.props.searchResults.map((result, i) => {
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
            <h4></h4>
          )}
          <h4>Published: {volume.publishedDate}</h4>
          <img src={volume.imageLinks.thumbnail}></img>
          <br></br>
          <button
          id="addToMyBooks"
          onClick={() => this.props.addBook(volume)}>
          Add Book to My Book Shelf
          </button>
          </div>
        )
      })

    return (
      <div>
        {searchResults}
      </div>
    )
  }
}

export default connect(null, {addBook})(DisplaySearchedBook);
