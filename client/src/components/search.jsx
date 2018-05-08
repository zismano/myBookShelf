import React from 'react';

let search = props => {
	let searchStr;
	return (
 		<div>
			<input id="search" type="text" 
				placeholder="e.g: The Catcher in the Rye"
				ref={input => searchStr = input}></input>
			<button id="searchButton" onClick={() => props.getBook(searchStr.value)}>Find a book</button>
		</div>
	)
}

export default search;