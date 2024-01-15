CREATE DATABASE IF NOT EXISTS users;

USE user;

CREATE TABLE IF NOT EXISTS user(
    id int  NOT NULL AUTO_INCREMENT,
    name varchar(150) NOT NULL,
    email varchar(150) NOT NULL,
    password varchar(150) NOTNULL,
    PRIMARY KEY (id)
)