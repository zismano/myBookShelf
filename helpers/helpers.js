const {googleKey} = require('../config');

let https = require('https');

const findBookFromAPI = (title, author) => {
	let request =  `https://www.googleapis.com/books/v1/volumes?q=`;
	if (title && author) {
		request += `title:${title}&inauthor:${author}&key=${googleKey}`;
	} else if (title) {
		request += `title:${title}&key=${googleKey}`;
	} else if (author) {
		request += `${author}&key=${googleKey}`;
	}
	return new Promise((resolve, reject) => {
		 https.get(request, (res) => {
			if (res.statusCode === 200) {
				var rawData = '';
				res.on('data', chunk => {
					rawData += chunk;
				});
				res.on('end', () => {
					try {
						const parsedData = JSON.parse(rawData);
						resolve(parsedData.items);
					} catch (err) {
						reject(err.message);
					}
				});
			} else {
				let error = new Error('Request Failed.\n' +
										`Status Code: ${res.statusCode}`);
				reject(error.message);
			}
		})
	});
}


const createBookObject = book => {
	let bookObject = {
		title: book.title,
		author: book.authors[0],
		publishedDate: book.publishedDate,
		thumbnail: book.imageLinks.thumbnail,
		status: "unknown"
	}
	return bookObject;
}


module.exports = {
	findBookFromAPI,
	createBookObject
}
