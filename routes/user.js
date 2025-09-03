
const express = require("express")
const router = express.Router( {mergeParams:true})
const Usermodel = require("../models/user.js");
const Asyncwrap = require("../utils/Asyncwrap");
const passport = require("passport")
const {savedRedirectUrl} = require("../middleware.js")
const userController = require("../controllers/user.js")

router.route("/signup")
.get( userController.signup)
.post(Asyncwrap(userController.signupform))

router.get("/google" , passport.authenticate("google" , {scope:["profile","email"]}))

router.route("/login")
.get(userController.login)
.post(savedRedirectUrl,passport.authenticate("local",{failureRedirect:"/login", failureFlash:true}),Asyncwrap(userController.locallogin))

router.get("/auth/google/redirect",passport.authenticate("google"),userController.googleredirect)
router.get("/logout",userController.logout)

module.exports = router
