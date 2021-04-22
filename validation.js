//VALIDATION
// @hapi/joi 就是一个检查的工具
const Joi = require("@hapi/joi");

// register validation
const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });

    // lets validate the data before we commit a user
    return schema.validate(data)
};

// login validation
const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });

    // lets validate the data before we commit a user
    return schema.validate(data)
};



module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
