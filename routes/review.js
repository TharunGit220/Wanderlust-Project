
const express = require("express")
const router = express.Router({mergeParams:true})
const {ReviewSchema} = require("../schema.js")
const Reviewmodel = require("../models/review.js")
const Asyncwrap = require("../utils/Asyncwrap.js")
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js")
const {isLoggedIn,isAuthor} = require("../middleware.js")
const reviewController = require("../controllers/review.js")
const validateReview = (req,res,next)=>{
    let {error} = ReviewSchema.validate(req.body)

    if(error){
        throw new ExpressError(400,error)
    }
    else{
        next()
    }
    
}

// "/listings/:id/reviews"

router.post("/" ,isLoggedIn,validateReview,Asyncwrap(reviewController.postreview))

router.delete("/:reviewid",isLoggedIn,isAuthor,Asyncwrap(reviewController.deletereview))

module.exports = router;