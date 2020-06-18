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

// function to display table of items for sale
function displayItemsForSale() {
  connection.query(
    //selecting the columns from the products table to display
    "SELECT item_id, product_name, price FROM products",
    function (err, results) {
      if (err) {
        console.log(err);
      } else {
        console.table(results);
        //run inquirer questions after displayItemsForSale() function runs
        askProduct();
      }
    }
  );
}

//call function to display table of items for sale
displayItemsForSale();

//inquirer prompt 
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
      //runs the answers the user inputs
      console.log(answer);
      connection.query(
        //selecting the columns from the products table to display
        "SELECT item_id, product_name, price, stock_quantity FROM products WHERE item_id = ?",
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
