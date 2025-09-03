require('dotenv').config();
const axios = require("axios")
const API_KEY = process.env.GOOGLE_MAP_API_KEY
const address = "1600+Amphitheatre+Parkway,+Mountain+View,+CA"

async function getcoordsForAddress(address){
    return await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}`)
}

getcoordsForAddress(address).then((res)=>{
    console.log(res.data.results[0].geometry.location)
})