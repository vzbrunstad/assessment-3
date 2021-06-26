-- Queries go here
-- Retrieve the first name, last name, and email address of all customers that have a Gmail email address.
SELECT customer.first_name, customer.last_name, customer.email FROM customer
WHERE customer.email LIKE '%gmail%';

-- Retrieve the address of the customers and the order IDs for all orders that were placed in 2020
SELECT * from customer
join addresses on customer.address_id= addresses.id
join orders on customer.id = orders.customer_id
where dtg >='2020-01-01' AND dtg <='2020-12-31';

-- Retrieve all product details for products that are under the "Kitchen" category
SELECT * from product
JOIN category ON product.category_id = category.id
WHERE category.category = 'Kitchen';

-- Retrieve the product names and prices of all products ordered by the customer with first name "Bugs" and last name "Bunny"
SELECT customer.first_name, customer.last_name, product.product, product.cost FROM orders
JOIN product ON orders.product_id = product.id
JOIN customer ON orders.customer_id = customer.id
WHERE first_name LIKE 'Bugs' AND last_name LIKE 'Bunny';
