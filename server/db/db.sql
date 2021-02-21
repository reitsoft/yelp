CREATE TABLE reviews(
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  review VARCHAR(500) NOT NULL,
  rating INT NOT NULL check(rating > 0 and rating < 6)
);