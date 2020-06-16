DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("dog collar", "dog supplies", 8.99, 52);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("greenies", "dog supplies", 27.00, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cat bed", "cat supplies", 18.75, 11);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cat toy", "cat supplies", 11.95, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("trek bike", "outdoor", 329.99, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bike seat", "outdoor", 28.97, 21);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("beach chair", "outdoor", 59.99, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("jigsaw puzzle", "games", 13.59, 33);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("beach umbrella", "outdoor", 38.88, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("portable charger", "electronics", 25.99, 22);