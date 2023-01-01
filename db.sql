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

CREATE TABLE reviews (
  id BIGSERIAL NOT NULL PRIMARY KEY, 
  name VARCHAR(50) NOT NULL,
  review TEXT NOT NULL,
  rating INT NOT NULL check(rating >=1 and rating <=5)
);

INSERT INTO reviews (name, review, rating) values ('thomas', 'good food', 5);

CREATE TABLE reviews (
  id BIGSERIAL NOT NULL PRIMARY KEY, 
  restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
  name VARCHAR(50) NOT NULL,
  review TEXT NOT NULL,
  rating INT NOT NULL check(rating >=1 and rating <=5)
);

INSERT INTO reviews (restaurant_id, name, review, rating) values (2, 'pham', 'bad food', 5);

SELECT * FROM reviews WHERE restaurant_id = 1;