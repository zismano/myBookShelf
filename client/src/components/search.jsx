import React from 'react';

let search = props => {
	let title;
	let author;

	return (
 		<div>
			Title:<input id="searchTitle" type="text"
				placeholder="e.g: The Catcher in the Rye"
				ref={input => title = input}>
			</input>
			Author:<input id="searchAuthor" type="text"
				placeholder="e.g: Fitzgerald"
				ref={input => author = input}>
			</input>
			<button
				id="searchButton"
				onClick={() => props.getBook(title.value, author.value)}
			>Find</button>
		</div>
	)
}

export default search;
