CREATE DATABASE IF NOT EXISTS users;

USE users;

CREATE TABLE IF NOT EXISTS user(
    id int  NOT NULL AUTO_INCREMENT,
    name varchar(150) NOT NULL,
    email varchar(150) NOT NULL,
    password varchar(150) NOT NULL,
    PRIMARY KEY (id)
)