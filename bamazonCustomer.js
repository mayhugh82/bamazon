var mysql = require("mysql2");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Ravencoder1!",
  database: "bamazon_DB",
});

// connect to the mysql2 server and sql database
connection.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("connected");
  }
});

function displayItemsForSale() {
  connection.query(
    "Select item_id, product_name, price from products",
    function (err, results) {
      if (err) {
        console.log(err);
      } else {
        console.table(results);
        askProduct();
      }
    }
  );
}

displayItemsForSale();

function askProduct() {
  inquirer
    .prompt([
      {
        name: "item_id",
        type: "input",
        message: "What is the ID of the product you would like to buy?",
      },
    ])
    .then(function (answer) {
      console.log(answer);
    });
}
