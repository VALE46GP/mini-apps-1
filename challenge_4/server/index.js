var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));




app.listen(3000, () => { console.log('listening on port ', 3000) });