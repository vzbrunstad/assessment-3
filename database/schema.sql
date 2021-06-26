-- Evaluate Tables accuracy, character limitations and NOT NULL.


DROP TABLE IF EXISTS customer CASCADE;
DROP TABLE IF EXISTS addresses CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS category CASCADE;
DROP TABLE IF EXISTS product CASCADE;

CREATE TABLE customer (
  id              serial PRIMARY KEY,
  first_name      varchar(255),
  last_name       varchar(255),
  address_id      integer,
  phone           varchar(10),
  email           varchar(255)
);

CREATE TABLE addresses (
  id          serial PRIMARY KEY,
  line_1      varchar(255),
  city        varchar(200),
  state       varchar(20),
  zipcode     varchar(6)
);

CREATE TABLE orders (
  id              serial PRIMARY KEY,
  category_id     integer,
  product_id      integer,
  customer_id     integer,
  dtg             date
);


CREATE TABLE category (
  id              serial PRIMARY KEY,
  category       varchar(255)
);


CREATE TABLE product (
  id            serial PRIMARY KEY,
  product       varchar(255),
  category_id   integer,
  cost          integer
);


ALTER TABLE customer
ADD CONSTRAINT fk_customer_addresses_id
FOREIGN KEY (address_id) REFERENCES addresses(id);

ALTER TABLE orders
ADD CONSTRAINT fk_orders_category_id
FOREIGN KEY (category_id) REFERENCES category(id);

ALTER TABLE orders
ADD CONSTRAINT fk_orders_product_id
FOREIGN KEY (product_id) REFERENCES product(id);

ALTER TABLE orders
ADD CONSTRAINT fk_orders_customer_id
FOREIGN KEY (customer_id) REFERENCES customer(id);

ALTER TABLE product
ADD CONSTRAINT fk_product_customer_id
FOREIGN KEY (category_id) REFERENCES category(id);