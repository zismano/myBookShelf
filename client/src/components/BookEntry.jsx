import React, {Component} from 'react';

class BookEntry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showDetails: false
		}
	}
	render() {
		let {
			title,
			author,
			publishedDate,
			thumbnail,
			status
		} = this.props.BookEntry;

		return (
			<div className="book-entry">
				<li onClick={() =>
						this.setState({ showDetails: !this.state.showDetails})}
				>{title} By {author}
				<button className="read-button">Read</button>
				<button className="unread-button">Unread</button>
				<button className="remove-button">Remove</button>
				</li>
				{this.state.showDetails ? (
					<div>
						<h4>Published: {publishedDate}</h4>
						<img src={thumbnail}></img>
					</div>
				) : (
					<div></div>
				)}
			</div>
		)
	}
}



// let BookEntry = props => {
// 	let {
// 		title,
// 		author,
// 		publishedDate,
// 		thumbnail,
// 	} = props.BookEntry;
// 	let showDetails = true;
//
// 	return (
// 		<div>
// 			{showDetails ? (
// 				<div>
// 				<li onClick={(e) => {
// 					console.log(e);
// 					showDetails = !showDetails}}>{title} By {author}</li>
// 				<h4>Published: {publishedDate}</h4>
// 				<img src={thumbnail}></img>
// 				</div>
// 			) : (
// 				<li onClick={(e) => {
// 					console.log(e);
// 					showDetails = !showDetails}}>{title} By {author}</li>
// 			)}
// 		</div>
// 	)
// }

export default BookEntry;
