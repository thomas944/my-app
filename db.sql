CREATE TABLE products (
  id INT,
  name VARCHAR(50),
  price INT,
  on_sale boolean
);

CREATE TABLE restaurants (
  id INT,
  name VARCHAR(50),
  location VARCHAR(50),
  price_range INT
);

DROP TABLE restaurants;

INSERT INTO restaurants (id, name, location, price_range) values (123, 'mcdonadls', 'new yorks', 3);

SELECT * FROM restaurants;

CREATE TABLE restaurants (
  id BIGSERIAL NOT NULL, 
  name VARCHAR(50) NOT NULL,
  location VARCHAR(50) NOT NULL,
  price_range INT NOT NULL
);

INSERT INTO restaurants (name, location, price_range) values ('wendys', 'denver', 3);

CREATE TABLE restaurants (
  id BIGSERIAL NOT NULL PRIMARY KEY, 
  name VARCHAR(50) NOT NULL,
  location VARCHAR(50) NOT NULL,
  price_range INT NOT NULL check(price_range >= 1 and price_range <=5)
);

