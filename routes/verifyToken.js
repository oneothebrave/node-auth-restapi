const jwt = require("jsonwebtoken");

// create middleware

module.exports = function (req, res, next){
    const token = req.header('auth-token');
    if(!token){
        return res.status(401).send("Access Denied");
    }

    try{
        // verify token
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        console.log(verified);
        req.user = verified;
        next()
    }catch(err){
        res.status(400).send("Invalid Token");
    }
};