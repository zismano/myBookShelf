let express = require('express');
let app = express();
let bodyParser = require('body-parser');

const {findBookFromAPI} = require('../helpers/helpers');

app.use(bodyParser.json());

let path = require('path');

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/search', (req, res) => {
	findBookFromAPI(req.query.title, req.query.author)
	.then(books => res.send(books.slice(0, 5)))
	.catch(err => {
		console.log(err)
 	})
})

app.listen(3000);
