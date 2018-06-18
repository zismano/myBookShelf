const {googleKey} = require('../config');

let https = require('https');

const findBookByTitleFromAPI = title =>
	new Promise((resolve, reject) => {
		https.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${googleKey}`, (res) => {
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

module.exports = {
	findBookByTitleFromAPI,
}
