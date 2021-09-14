const express = require('express');
var cors = require('cors');
var morgan = require('morgan');
var dotenv = require('dotenv')

dotenv.config()

const route = require('./Routes/index.js');

const app = express();

app.use(cors());
app.use(morgan('combined'));

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});