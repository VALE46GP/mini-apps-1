const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'customer_data'
});

// write a function to get customer_id
var getId = function(callback) {
  connection.query('SELECT id FROM customer_info ORDER BY id DESC LIMIT 1', (err, results, fields) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

// write function to add customer_info
var insertCustomer = function(first_name, last_name, email, pw, callback) {
  const query = 'INSERT INTO customer_info (first_name, last_name, email, pw) VALUES (?, ?, ?)';
  connection.query(query, [first_name, last_name, email, pw], (err, results, fields) => {
    callback(err, null);
  });
};

// write function to add shipping_info
// TODO: Get id from customer_data first
var insertShipping = function(id, line1, line2, city, state, zip) {
  const query = 'INSERT INTO customer_info (id, line1, line2, city, state, zip) VALUES (?, ?, ?, ?, ?, ?)';
  connection.query(query, [id, line1, line2, city, state, zip], (err, results, fields) => {
    callback(err, null);
  });
};

// write function to add payment_info
// TODO: Get id from customer_data first
var insertPayment = function(id, card_number, expiration, cvv, zip) {
  const query = 'INSERT INTO customer_info (id, card_number, expiration, cvv, zip) VALUES (?, ?, ?, ?, ?)';
  connection.query(query, [id, card_number, expiration, cvv, zip], (err, results, fields) => {
    callback(err, null);
  });
};


// export all functions
module.exports.getId = getId;
module.exports.insertCustomer = insertCustomer;
module.exports.insertShipping = insertShipping;
module.exports.insertPayment = insertPayment;