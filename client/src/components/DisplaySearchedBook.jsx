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
                id="addToMyBooks"
                onClick={(e) => props.addBook(i, "books")}>
                Add Book to My Book Shelf
              </button>
            </div>
          )
        })}
    </div>

export default DisplaySearchedBook;
