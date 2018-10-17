const express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var convert = require('./convert-json-to-csv.js');
var multer = require('multer');
var fs = require('fs');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.urlencoded({ extended: false }));

var upload = multer({dest: 'uploads/'});


var jsonData = '>>>>>>>>>> asynch <<<<<<<<<<<<';


// app.post('/upload', upload.single('json'), (req, res) => {
//   console.log('requestBody: ', request.file.path);
//
//   fs.readFile(req.file.path, 'utf-8', (err, data) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send(err);
//     } else {
//       console.log(JSON.parse(data));
//       var csvContent = appMethods.csvConverter(JSON.parse(data));
//       console.log(csvContent);
//       res.status(201).send(csvContent);
//     }
//   })
// });

app.post('/upload_json', (req, res) => {
  // console.log('req.body =>>>>>>>>>>> ', req.body);
    jsonData = convert.convertJSONtoCSV(req.body.json_data);
    res.status(201).send(jsonData);
});

// app.get('upload_json', (req, res) => {
//   console.log('GET lost');
// });

app.listen(3000, () => {console.log('listening on port: ', 3000)});