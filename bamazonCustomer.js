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
  if (err) throw err;
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
  // query the database for all items being sold
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    // once you have the items, prompt the user for which they'd like to bid on
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
      //get the information of the chosen item
      var chosenItem;
      for (var i = 0; i < results.length; i++) {
        if (results[i].item_id === answer.item_id) {
          chosenItem = results[i];
        }
      }
      //determine if enough in stock
      if (chosenItem.stock_quantity > parseInt(answer.quantity)) {
        //enough in stock so update db, let user know, start over
        connection.query(
          "UPDATE products Set ? WHERE ?",
          [
            {
              stock_quantity: answer.quantity,
            },
            {
              item_id: chosenItem.item_id,
            },
          ],
          
  });
}

