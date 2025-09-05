if(process.env.NODE_ENV != "production"){
    require('dotenv').config()
}
const express = require("express")
const app = express()
const port = 3000;
const mongoose = require("mongoose")
/** @type {import('mongoose').Model<any>} */
const Listing = require("./models/listing.js")
const methodOveride = require("method-override")
const path = require("path")
const engine = require('ejs-mate');
const {ListingSchema,ReviewSchema} = require("./schema.js")
const Reviewmodel = require("./models/review.js")
const Asyncwrap = require("./utils/Asyncwrap.js")
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session")
const MongoStore = require("connect-mongo")
const flash = require("connect-flash")
const listingrouter = require("./routes/listing.js")
const reviewrouter = require("./routes/review.js");
const userrouter = require("./routes/user.js")
app.engine('ejs', engine);
const passport = require("passport")
const LocalStrategy = require("passport-local")
const Usermodel = require("./models/user.js")

app.use(express.urlencoded({extended:true}))
app.use(methodOveride("_method"))

const store = MongoStore.create({
    mongoUrl:process.env.ATLASDB_URL,
    crypto:{
        secret: process.env.SECRET
    },
    touchAfter : 24*3600
})

store.on("error",()=>{
    console.log("Error in MONGO SESSION STORE",err)
})

app.use(session({store:store,secret:process.env.SECRET, resave:false, saveUninitialized:true ,cookie:{
    expires : Date.now() +7 * 24 * 60 * 60 *  1000,
    maxAge:7 * 24 * 60 * 60 *  1000,
    httpOnly:true
} }))

app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(Usermodel.authenticate()))
const passportSetup = require("./googlePassport.js")
passport.serializeUser(Usermodel.serializeUser())
passport.deserializeUser(Usermodel.deserializeUser())

app.use(flash())
app.set("view engine", "ejs")
app.set("views",path.join(__dirname,"/views"))
app.use(express.static(path.join(__dirname,"/public")))



app.listen(port,()=>{
    console.log(`Successful Connection ${port}`)
})

async function main() {
    // await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
    await mongoose.connect(process.env.ATLASDB_URL)
}
main().then((res)=>{
    console.log("Successful Connection to Database")
}).catch((err)=>{
    console.log(err)
})



const validateListing = (req,res,next)=>{
    let {error} = ListingSchema.validate(req.body)
    if(error){
        throw new ExpressError(400,error)
    }
    else{
        next()
    }
}
const validateReview = (req,res,next)=>{
    let {error} = ReviewSchema.validate(req.body)

    if(error){
        throw new ExpressError(400,error)
    }
    else{
        next()
    }
    
}

app.use((req,res,next)=>{
    res.locals.success = req.flash("success")
    res.locals.error = req.flash("error")
    res.locals.userstatus = req.user
    next()
})

app.use("/" , userrouter)
app.use("/listings",listingrouter)

app.use("/listings/:id/reviews",reviewrouter)




app.use((err,req,res,next)=>{
    let {status=500,message="Something is a astray"} = err
    res.status(status).render("error.ejs", {message})

})