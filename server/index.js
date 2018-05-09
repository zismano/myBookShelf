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
	https.get(`https://www.googleapis.com/books/v1/volumes?q=${req.query.search}&key=${googleKey.googleKey}`, (res) => {
		var str = ''
  		res.on('data', chunk => {
    		str += chunk;
  		});
		res.on('end', () => {
    		console.log(str);
  		});
	})
});

app.listen(3000);