let express = require('express');
let app = express();
let https = require('https');
let bodyParser = require('body-parser');
var googleKey = require('../config.js');

app.use(bodyParser.json());

let path = require('path');

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/search', (req, res) => {
	console.log(req.query.search);
	// https.get(`https://www.googleapis.com/books/v1/volumes?q=${req.query.search}&key=${googleKey.googleKey}`, (res) => {
	// 	var str = ''
  // 		res.on('data', chunk => {
  //   		str += chunk;
  // 		});
	// 	res.on('end', () => {
  //   		console.log(str);
  // 		});
	// })
	findBookTitleFromAPI(req.query.search)
	.then(books => {
		console.log(books[0])
	})
	.catch(err => {
		console.log(err)})
 })


const findBookTitleFromAPI = title =>
	new Promise((resolve, reject) => {
		https.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${googleKey.googleKey}`, (res) => {
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


app.listen(3000);
