let express = require('express');
let app = express();
let bodyParser = require('body-parser');

const {findBookByTitleFromAPI} = require('../helpers/helpers');

app.use(bodyParser.json());

let path = require('path');

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/search', (req, res) => {
	findBookByTitleFromAPI(req.query.search)
	.then(books => {
		console.log(books[0])
	})
	.catch(err => {
		console.log(err)})
 })

app.listen(3000);
