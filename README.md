# Bamazon

The goal of this project was to create an Amazon-like storefront using Node.js and MySQL. The CLI app will take orders from customers and deplete stock from the store’s inventory. The store is called BAMAZON.

## Customer View

1. The Bamazon CLI app displays the store's products in a table form.

2. The customer is asked to enter the product ID number for the product they would like to purchase.

3. The app will check to see if there is enough inventory to fulfill the order.  If so, it will calculate the total cost of the order and inform the customer that the order has gone through successfully along with the total price of the order.

4. If there is not enough inventory in stock to fulfull the order, the customer will receive a message of "Insufficient quantity" and the order process will repeat.


## Screen Shots of App Functioning

Customer Able to Purchase Item and Database Updates Stock Quantity (Update can be seen in MySQL in the next image)

![Purchase](/images/order.png)

Customer Unable to Purchase Item

![No Purchase](/images/no_order.PNG)


## Link to Deployed Version

[bamazon](https://github.com/mayhugh82/bamazon)

## Technologies Used
* javaScript
* API
* Node js
* MySQL

## Author
* **Diana Mayhugh**