
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var db = require('./database/index.js');

app.use(bodyParser.json());
console.log(path.join(__dirname, './compiled/client'));
app.use(express.static(path.join(__dirname, './compiled/client')));

app.post('/customer_info', (req, res) => {
  console.log('hi>>>>>>>>>>>>>>>>>>', req.body.first_name);
  db.insertCustomer(req.body.first_name, req.body.last_name, req.body.email, req.body.pw, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(req.body);
    }
  });
});

app.listen(3000, () => {console.log('listening on port ', 3000)});

