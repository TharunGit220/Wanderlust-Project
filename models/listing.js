
const mongoose = require("mongoose")
const review = require("./review.js")


const listingSchema = new mongoose.Schema({
    title :{
        type: String,
        required : true
    },
    description :{
        type: String
    },
    image :{
        filename : String,
        url : String
    },
    price :{
        type: Number
    },
    location :{
        type: String
    },
    country :{
        type: String
    },
    review : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Review"
    }],
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    geometry :{
        location_type : {
            type : String,
            required: true
        },
        location : {
            lat : {
                type: Number,
                required : true
            },
            lng : {
                type: Number,
                required : true
            }
        }
    }
})
listingSchema.post("findOneAndDelete",async (listing)=>{
    if(listing.review){
        await review.deleteMany({_id : {$in : listing.review}}).then((res)=>{
            console.log(res)
        })
    }
})
const Listing = mongoose.model("Listing", listingSchema)

module.exports = Listing;