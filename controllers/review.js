
const Listing = require("../models/listing.js")
const Reviewmodel = require("../models/review.js")

module.exports.postreview= async (req,res)=>{
    // console.log(req.body.review)
    let lisiting = await Listing.findById(req.params.id)
    let newreview  = new Reviewmodel(req.body.review)
    newreview.author = req.user._id
    lisiting.review.push(newreview)
    await newreview.save().then((res)=>{
        console.log(res)
    })
    await lisiting.save().then((res)=>{
        console.log(res)
    })
    req.flash("success", "Your review has been created successfully!");
    res.redirect(`/listings/${lisiting._id}`)
}

module.exports.deletereview = async(req,res)=>{
    let {id,reviewid} = req.params
    await Listing.findByIdAndUpdate(id, {$pull : {review : reviewid}})
    await Reviewmodel.findByIdAndDelete(reviewid)
    req.flash("success", "Your review has been deleted successfully!");
    res.redirect(`/listings/${id}`)
}