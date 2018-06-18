import React from 'react';
import MyBookEntry from './MyBookEntry.jsx';

let MyBookList = props => {
	return (
		<div className="shelf">
			<h1>Book List</h1>
		  <ul>
		    {props.Books.map(book =>
		    	<MyBookEntry BookEntry={book}/>
		    )}
		  </ul>
		</div>
	)
}

export default MyBookList;
