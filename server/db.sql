-- list all databeses
/l

-- list all tables
/d

-- add pgcrypto for uuid
CREATE EXTENSION pgcrypto;

-- Create Schema???
CREATE SCHEMA IF NOT EXISTS product;

-- Create database
create database yelp;

-- Create table restaurants
CREATE TABLE restaurants(id UUID primary key default gen_random_uuid(), name varchar(100) not null, location varchar(100) not null, price_range INTEGER not null check(price_range > 0 and price_range < 6), active boolean not null);
CREATE TABLE restaurants2(id UUID primary key default gen_random_uuid(), name varchar(100) not null, location varchar(100) not null, price_range INTEGER not null check(price_range > 0 and price_range < 6), active boolean not null);


-- Create Table reviews
CREATE TABLE reviews(id UUID primary key default gen_random_uuid(), restaurant_id UUID NOT NULL REFERENCES restaurants(id), name varchar(50) not null, review VARCHAR(500) NOT NULL, rating INTEGER not null check(rating > 0 and rating < 6));

CREATE TABLE reviews(
  id UUID primary key default gen_random_uuid(), 
  restaurant_id UUID NOT NULL REFERENCES restaurants(id), 
  name varchar(50) not null, 
  review VARCHAR(500) NOT NULL, 
  rating INTEGER not null check(rating > 0 and rating < 6)
  );

 -- Test Restaurant UUID: '9d21e992-1060-4ca4-ab7b-6d81082b975f'

-- Info about a table
\d <table_name>

-- Insert restaurant into a table
INSERT INTO restaurants(name, location, price_range, active) values ('McDonalrds', 'New York', 4, true);
INSERT INTO restaurants(name, location, price_range, active) values ('Burger King', 'Denver', 3, true);
INSERT INTO restaurants(name, location, price_range, active) values ('KFC', 'Los Angeles', 2, true);

-- Show table contant
SELECT * from restaurants;
