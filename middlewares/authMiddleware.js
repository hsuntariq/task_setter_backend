const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const AsyncHandler = require('express-async-handler');

const AuthMiddleware = AsyncHandler(async(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(' ')[1];
            let decode = jwt.verify(token,process.env.JWT_SECRET);
            req.user = await User.findById(decode.id);
            next();
        } catch (error) {
            res.status(401);
            throw new Error('Not Authorized')
        }
    }else{
        res.status(401);
        throw new Error('No token found!')
    }
})

module.exports = AuthMiddleware;