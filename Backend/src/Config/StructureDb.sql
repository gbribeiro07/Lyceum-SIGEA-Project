CREATE DATABASE Lyceum;
USE Lyceum;

CREATE TABLE User (
	idUser INT AUTO_INCREMENT PRIMARY KEY,
    nameUser VARCHAR (100) NOT NULL,
    email VARCHAR (100) UNIQUE NOT NULL,
    password VARCHAR (255) NOT NULL,
    image_profile TEXT,
    status_permission ENUM('SuperAdmin', 'Admin', 'User'),
    date_at_create DATETIME DEFAULT CURRENT_TIMESTAMP,
    isVerified BOOLEAN NOT NULL DEFAULT FALSE,
    verificationToken VARCHAR (6)
);

CREATE TABLE Profiles (
    idProfile INT AUTO_INCREMENT PRIMARY KEY,
    idUser INT NOT NULL, 
    nameProfile VARCHAR(100) NOT NULL,
    Status ENUM ('Professor', 'Aluno'),
    age INT, 
    avatar TEXT, 
    dateCreated DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (idUser) REFERENCES User(idUser)
);

CREATE TABLE Contents (
    idContent INT AUTO_INCREMENT PRIMARY KEY,
    idUser INT NOT NULL,
    contentType ENUM('post', 'video') NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    content TEXT NOT NULL,
    dateCreated DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (idUser) REFERENCES User(idUser)
);

CREATE TABLE Classrooms (
    idClassroom INT AUTO_INCREMENT PRIMARY KEY,
    idUser INT NOT NULL,
    nameClassroom VACHAR(100) NOT NULL,
    FOREIGN KEY (idUser) REFERENCES User(idUser)
)