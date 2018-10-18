-- create database customer_data (drop if exists)
DROP DATABASE IF EXISTS cutomer_data;
CREATE DATABASE cutomer_data;

USE cutomer_data;

CREATE TABLE customer_info (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  email VARCHAR(70) NOT NULL,
  pw VARCHAR(16) NOT NULL
);

CREATE TABLE shipping_info (
  id INT PRIMARY KEY NOT NULL,
  line1 VARCHAR(80) NOT NULL,
  line2 VARCHAR(80),
  city VARCHAR(30) NOT NULL,
  state VARCHAR(20) NOT NULL,
  ship_zip SMALLINT NOT NULL
);

CREATE TABLE payment_info (
  id INT PRIMARY KEY NOT NULL,
  card_number INT NOT NULL,
  expiration VARCHAR(30) NOT NULL,
  cvv TINYINT NOT NULL,
  bill_zip SMALLINT NOT NULL
);

-- insert 3 test values
INSERT INTO groceries (item, quantity) VALUES ("pizza", 5), ("cheese", 4), ("beer", 30);
