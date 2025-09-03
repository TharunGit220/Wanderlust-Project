const passport = require("passport")
const googleStrategy = require("passport-google-oauth20")
const mongoose = require("mongoose")
const Usermodel = require("./models/user.js");
require("dotenv").config()

passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser((id,done)=>{
    Usermodel.findById(id).then((res)=>{
      done(null,res)
    })
})

passport.use(
  new googleStrategy(
    {
      callbackURL: process.env.callbackURL,
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let existingUser = await Usermodel.findOne({ email: profile.emails[0].value });

        if (existingUser) {
          console.log("FOUND USER:", existingUser);
          return done(null, existingUser); 
        }

        let newUser = new Usermodel({
          email: profile.emails[0].value,
          username: profile.displayName,
        });

        let savedUser = await newUser.save();
        console.log("NEW USER CREATED:", savedUser);
        return done(null, savedUser);

      } catch (err) {
        return done(err, null);
      }
    }    
  )
);
