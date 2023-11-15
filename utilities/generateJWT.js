const jwt = require("jsonwebtoken");

module.exports = function(user){

    // evitiamo di esporre la password
    const payload = {
        id: user.id,
        username: user.username
    }

   return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1h',
   })

}