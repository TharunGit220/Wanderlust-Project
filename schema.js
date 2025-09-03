const Joi = require('joi');



ListingSchema = Joi.object({
    listing : Joi.object({
        title: Joi.string().required(),
        description : Joi.string().required(),
        image : Joi.string().allow("",null),
        price : Joi.number().required().min(0),
        country : Joi.string().required(),
        location: Joi.string().required()
    }).required()
})

ReviewSchema = Joi.object({
    review : Joi.object({
        comment : Joi.string().required(),
        rating : Joi.number().min(1).max(5).required()
    }).required()
})

module.exports = {ListingSchema,ReviewSchema}