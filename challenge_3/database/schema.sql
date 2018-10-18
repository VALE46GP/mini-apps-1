-- create database customer_data (drop if exists)
DROP DATABASE IF EXISTS customer_data;
CREATE DATABASE customer_data;

USE customer_data;

CREATE TABLE customer_info (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  email VARCHAR(70),
  pw VARCHAR(30),
  line1 VARCHAR(80),
  line2 VARCHAR(80),
  city VARCHAR(30),
  state VARCHAR(20),
  ship_zip INT,
  card_number VARCHAR(20),
  expiration VARCHAR(30),
  cvv SMALLINT,
  bill_zip INT
);