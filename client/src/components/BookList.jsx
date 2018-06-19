import React from 'react';
import BookEntry from './BookEntry.jsx';

let BookList = props => {
	return (
		<div className="shelf">
		  <ul>
		    {props.Books.map(book =>
		    	<BookEntry BookEntry={book}/>
		    )}
		  </ul>
		</div>
	)
}

export default BookList;
