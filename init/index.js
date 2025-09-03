const mongoose = require("mongoose");
const data = require("./data.js");
const Listing = require("../models/listing.js");
const axios = require("axios");
require("dotenv").config();
const API_KEY = process.env.GOOGLE_MAP_API_KEY;
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

main()
  .then(() => {
    console.log("Successful Connection to Database");
    insertdata(); 
  })
  .catch((err) => {
    console.log(err);
  });

async function insertdata() {
  await Listing.deleteMany({});

  const normalized = await Promise.all(
    data.map(async (d) => {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(d.location)}&key=${API_KEY}`
      );
      return {
        ...d,
        image: d.image,
        owner: "68adbd867a1109839481a0c0",
        geometry: response.data.results[0]?.geometry || {
          location: { lat: 0, lng: 0 },
          location_type: "APPROXIMATE"
        },
      };
    })
  );

  await Listing.insertMany(normalized).then((res)=>{
    console.log(res)
  });
  console.log("Data inserted");
}
