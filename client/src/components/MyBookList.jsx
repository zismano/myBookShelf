import React from 'react';
import MyBookEntry from './MyBookEntry.jsx';

let MyBookList = props => {
	return (
		<div className="shelf">
		  <ul>
		    {props.Books.map(book => 
		    	<MyBookEntry BookEntry={book}/>
		    )}		  	
		  </ul>		
		</div>		
	)
}

export default MyBookList;