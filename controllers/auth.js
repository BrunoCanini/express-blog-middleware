const express = require("express");
const fs = require("fs");
const path = require("path");
const generateJWT = require("../utilities/generateJWT")

function login(req, res){

    // leggo username e password dal req.body
    const { username, password } = req.body;

    if(!username || !password) {
        res.status(400).send("username e password sono obbligatori");
        return;
    }

    // leggo il file useres
    const users = require("../users.json");


    // controllo se esisteuna corrispondenza tra username e password
    const user = users.find((user) => user.username === username && user.password === password);

    if(!user){
        res.status(401).send("username o password errati");
        return;
    }

    // una volta trovato l user possiamo generare un token jwt
    const token = generateJWT(user);


    res.json({
        token
    });


}




module.exports = {
    login,
  }