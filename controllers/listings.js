
const Listing = require("../models/listing.js")
const axios = require("axios")
require('dotenv').config();
const API_KEY = process.env.GOOGLE_MAP_API_KEY

module.exports.indexroute = async (req,res)=>{
    let datas = await Listing.find({})
    res.render("listings/index.ejs", {datas})
}

module.exports.getnewlisting = (req,res)=>{
    res.render("listings/new.ejs")
}

module.exports.postnewform = async(req,res,next)=>{
    const address = req.body.listing.location
    await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}`).then((res)=>{
        console.log(res.data.results[0].geometry)
    })
    
    response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}`)
    let url = req.file.path
    let filename = req.file.filename
    let data = req.body.listing;
    let newinsert = new Listing(data)
    newinsert.image = {filename,url}
    newinsert.owner = req.user._id
    newinsert.geometry = response.data.results[0].geometry
    newinsert.save().then((res)=>{
        console.log(res)
    })
    req.flash("success", "Your new listing was created successfully!");
    res.redirect("/listings")
}


module.exports.GetIndividual = async(req,res)=>{
    let {id} = req.params
    let data = await Listing.findById(id).populate({
        path: "review",
        populate :{
            path : "author"
        }}).populate("owner")
    if(!data){
        req.flash("error","Sorry, the listing you are looking for does not exist.")
        return res.redirect("/listings")
    }
    res.render("listings/show.ejs" , {data})
}


module.exports.Geteditform = async (req,res)=>{
    let {id} = req.params
    let data = await Listing.findById(id)
    if(!data){
        req.flash("error","Sorry, the listing you are looking for does not exist.")
        return res.redirect("/listings")
    }
    res.render("listings/edit.ejs", {data})
}

module.exports.editform = async(req,res)=>{
    let {id} = req.params
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing},{new:true,runValidators:true})
    if(typeof req.file != "undefined"){
        let url = req.file.path
        let filename = req.file.filename
        listing.image = {filename,url}
        await listing.save()
    }
    req.flash("success", "Your listing has been edited successfully!");
    res.redirect(`/listings/${id}`)
}

module.exports.deletelisting = async (req,res)=>{
    let {id} = req.params
    console.log(await Listing.findByIdAndDelete(id,{new:true,runValidators:true}))
    req.flash("success", "Your listing has been deleted successfully!");
    res.redirect("/listings")
}