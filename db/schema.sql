CREATE DATABASE heroku_b47f60853593882;
USE heroku_b47f60853593882;

CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name varchar(100) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);