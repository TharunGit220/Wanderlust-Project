let Listing = require("./models/listing.js")
let Review = require("./models/review.js")
module.exports.isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.returnTo = req.originalUrl;  
        req.flash("error","You must be logged in");
        return res.redirect("/login");
    }
    next();
}


module.exports.savedRedirectUrl = (req,res,next) =>{
    res.locals.returnTo = req.session.returnTo
    next()
}

module.exports.isOwner =async (req,res,next)=>{
    let {id} = req.params
        let listing = await Listing.findById(id)
        if(!listing.owner._id.equals(res.locals.userstatus._id)){
            req.flash("error","you dont have the permission")
            return res.redirect(`/listings/${id}`)
    }
    next()
}

module.exports.isAuthor = async (req,res,next)=>{
    let {id,reviewid} = req.params
    let review = await Review.findById(reviewid)
    if(!review.author._id.equals(res.locals.userstatus._id)){
        req.flash("error","you dont have the permission")
        return res.redirect(`/listings/${id}`)
    }
    next()
}