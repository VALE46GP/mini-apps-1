
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var db = require('./database/index.js');

app.use(bodyParser.json());
console.log(path.join(__dirname, './compiled/client'))
app.use(express.static(path.join(__dirname, './compiled/client')));

app.get('/customer_info', (req,res) => {
  db.getId((err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.send(results);
    }
  });
});

app.post('/customer_info', (req, res) => {
  console.log('req.body = ', req.body);
  db.insertCustomer(first_name, last_name, email, pw, (err, results) => {
    if (err) {
      req.status(500).send();
    } else {
      res.status(201).send();
    }
  });
});

app.listen(3000, () => {console.log('listening on port ', 3000)});

