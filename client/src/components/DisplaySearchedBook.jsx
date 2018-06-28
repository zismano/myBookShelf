import React, {Component} from 'react';


class DisplaySearchedBook extends Component {
  constructor(props) {
    super(props);
  }

	addBook(index) {
    console.log(index);
		// let bookToAdd = createBookObject(this.state.searchResults[index]);
		// let currBooks = this.state[shelf].push(bookToAdd);
		// this.setState({ shelf: currBooks });
	}

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
          onClick={(e) => this.addBook(i)}>
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

export default DisplaySearchedBook;
