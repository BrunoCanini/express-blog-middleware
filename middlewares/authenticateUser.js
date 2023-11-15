const jwt = require("jsonwebtoken");

module.exports = function(req, res, next){

    // leggo il JWT ricevuto nell header authorization
    const bearerToken = req.header("Authorization")

    if(!bearerToken){
        return res.status(401).send("Token mancante");
    };

    // estraggo solo il codice che serve a me
    const token = bearerToken.split(" ")[1];

    console.log(bearerToken)


    // controllo che sia valido
    const isValid = jwt.verify(token, process.env.JWT_SECRET);


    if(!isValid){
        return res.status(401).send("Token non valido");
    }

    // next o no

    next();
};