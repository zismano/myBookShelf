import React from 'react';

let BookEntry = props => {
	let {
		title,
		author,
		publishedDate,
		img,
	} = props.BookEntry;
	return (
		<div>
			<li>{title} By {author}</li>
		</div>
	)
}

export default BookEntry;
