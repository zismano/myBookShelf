import React, {Component} from 'react';
import BookEntry from './BookEntry.jsx';

class BookList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="shelf">
			  <ul>
			    {this.props.Books.map(book =>
			    	<BookEntry
							BookEntry={book}
						/>
			    )}
			  </ul>
			</div>
		)
	}
}

//
//
// let BookList = props => {
// 	return (
// 		<div className="shelf">
// 		  <ul>
// 		    {props.Books.map(book =>
// 		    	<BookEntry
// 						BookEntry={book}
// 					/>
// 		    )}
// 		  </ul>
// 		</div>
// 	)
// }

export default BookList;
