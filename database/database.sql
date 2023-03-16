CREATE DATABASE cleaningCompany;
USE cleaningCompany;

CREATE TABLE companies(
    idCompany INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nameCompany VARCHAR(100),
    nameContact VARCHAR(100),
    city VARCHAR (100),
    governmentCompany BIT,
    businessActivity VARCHAR(200),
    invoiceDetails VARCHAR(250)
);

CREATE TABLE contacts(
    idContact INT (11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nameContact VARCHAR (150),
    email VARCHAR (100),
    phone VARCHAR (10),
    degree VARCHAR (100),
    direction VARCHAR (150)
);

CREATE TABLE cities(
    idCity INT (11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    city VARCHAR (100),
    country VARCHAR (100),
    idiom VARCHAR (100),
    currency VARCHAR (100),
    airport VARCHAR (200)
);

CREATE TABLE employees(
    idEmployee INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(100),
    lastName VARCHAR (100),
    city VARCHAR (100),
    email VARCHAR(100),
    birthdate DATE,
    rol VARCHAR (100)
);

CREATE TABLE projects(
    idProject INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    projectName VARCHAR(100),
    details VARCHAR (200),
    company VARCHAR (100),
    projectLeader VARCHAR (100),
    startDate DATE,
    closingDate DATE
);