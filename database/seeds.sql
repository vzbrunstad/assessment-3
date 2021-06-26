-- Seed data goes here
INSERT INTO addresses (id, line_1, city, state, zipcode) VALUES (1, '123 North St', 'Jamestown', 'Maryland', '49028');
INSERT INTO addresses (id, line_1, city, state, zipcode) VALUES (2, '456 South St', 'Spooner', 'Wisconsin', '49028');
INSERT INTO addresses (id, line_1, city, state, zipcode) VALUES (3, '789 East St', 'Mahtomedi', 'Minnesota', '49028');
INSERT INTO addresses (id, line_1, city, state, zipcode) VALUES (4, '159 West St', 'Chicago', 'Illinois', '49028');

INSERT INTO category (id, category) VALUES (1, 'Home');
INSERT INTO category (id, category) VALUES (2, 'Kitchen');
INSERT INTO category (id, category) VALUES (3, 'Bath and Bedroom');
INSERT INTO category (id, category) VALUES (4, 'Office');

INSERT INTO product (id, product, category_id, cost) VALUES (1, 'pillow', 3, 20.00);
INSERT INTO product (id, product, category_id, cost) VALUES (2, 'sheets', 3, 34.00);
INSERT INTO product (id, product, category_id, cost) VALUES (3, 'toothbrush', 3, 67.00);
INSERT INTO product (id, product, category_id, cost) VALUES (4, 'chair', 1, 98.00);
INSERT INTO product (id, product, category_id, cost) VALUES (5, 'fan', 1, 65.00);
INSERT INTO product (id, product, category_id, cost) VALUES (6, 'lamp', 1, 22.00);
INSERT INTO product (id, product, category_id, cost) VALUES (7, 'coffe maker', 2, 21.00);
INSERT INTO product (id, product, category_id, cost) VALUES (8, 'doughnut maker', 2, 3.00);
INSERT INTO product (id, product, category_id, cost) VALUES (9, 'grill', 2, 107.00);
INSERT INTO product (id, product, category_id, cost) VALUES (10, 'chair', 4, 176.00);
INSERT INTO product (id, product, category_id, cost) VALUES (11, 'file holder', 4, 5.00);
INSERT INTO product (id, product, category_id, cost) VALUES (12, 'pen holder', 4, 10.00);

INSERT INTO customer (id, first_name, last_name, address_id, phone, email) VALUES (1, 'Vince', 'Brunstad', 1, '6513530000', 'vzbrunstad@msn.com');
INSERT INTO customer (id, first_name, last_name, address_id, phone, email) VALUES (2, 'Bugs', 'Bunny', 2, '6513530000', 'vzbrunstad@gmail.com');
INSERT INTO customer (id, first_name, last_name, address_id, phone, email) VALUES (3, 'Tom', 'Johnson', 3, '6513530000', 'vzbrunstad@aol.com');
INSERT INTO customer (id, first_name, last_name, address_id, phone, email) VALUES (4, 'Donna', 'Zappa', 4, '6513530000', 'vzbrunstad@gmail.com');

INSERT INTO orders (id, category_id, product_id, customer_id, dtg) VALUES (1, 1, 4, 1, '2020-01-01');
INSERT INTO orders (id, category_id, product_id, customer_id, dtg) VALUES (2, 2, 8, 2, '1985-02-17');
INSERT INTO orders (id, category_id, product_id, customer_id, dtg) VALUES (3, 3, 1, 3, '1985-02-17');
INSERT INTO orders (id, category_id, product_id, customer_id, dtg) VALUES (4, 4, 11, 4, '2020-02-17');
INSERT INTO orders (id, category_id, product_id, customer_id, dtg) VALUES (5, 4, 12, 2, '1985-02-17');
INSERT INTO orders (id, category_id, product_id, customer_id, dtg) VALUES (6, 3, 1, 2, '1985-02-17');