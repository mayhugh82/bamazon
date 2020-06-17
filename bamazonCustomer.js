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
    "SELECT item_id, product_name, price FROM products",
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
        type: "number",
        message: "What is the ID of the product you would like to buy?",
      },
      {
        name: "quantity",
        type: "number",
        message: "How many units would you like to purchase?",
      },
    ])
    .then(function (answer) {
      console.log(answer);
      connection.query(
        "SELECT item_id, product_name, stock_quantity, price FROM products WHERE item_id = ?",
        [answer.item_id],
        function (err, results) {
          if (err) {
            console.log(err);
          } else {
            console.table(results);

            if (answer.stock_quantity > results[0].stock_quantity) {
                console.log("Insufficient Quantity");
            }
          }
        }
      );
    });
}
