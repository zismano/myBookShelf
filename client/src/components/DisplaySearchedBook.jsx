import React from 'react';

const DisplaySearchedBook = props =>
    <div>
        {props.searchedBookResults.map((book, i) => {
          let volume = book.volumeInfo;
          return (
            <div>
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
                id="addToUnreadBooks"
                onclick={(e) => this.props.addBook(i, "unreadBooks")}>
                Add Book to Unread Book Shelf
              </button>
              <button
                id="addToSavedBooks"
                onClick={(e) => this.props.addBook(i, "savedBooks")}>
                Add Book to Saved Book Shelf
              </button>
            </div>
          )
        })}
    </div>

export default DisplaySearchedBook;
