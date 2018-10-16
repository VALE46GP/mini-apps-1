const express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var convert = require('./convert-json-to-csv.js');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.urlencoded({ extended: false }));


var jsonData = '>>>>>>>>>> asynch <<<<<<<<<<<<';

app.post('/upload_json', (req, res) => {
  console.log('req.body =>>>>>>>>>>> ', req.body);
  // if (err) {
  //   res.status(500).send();
  // } else {
    jsonData = convert.convertJSONtoCSV(req.body);
    res.status(201).send(jsonData);
  // }
});

app.get('upload_json', (req, res) => {
  console.log('GET lost');
});

app.listen(3000, () => {console.log('listening on port: ', 3000)});