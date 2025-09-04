
const Usermodel = require("../models/user.js")
module.exports.signup = (req, res) => {
    res.render("users/signup.ejs"); 
}

module.exports.signupform = async (req,res)=>{
    try{
        let {username,email,password} = req.body
        let user = new Usermodel({email,username})
        await Usermodel.register(user,password).then((response)=>{
            console.log(response)
        })
        req.login(user,(err)=>{
            if(err) {return next(err)}
            req.flash("success","Welcome to WanderLust")
            res.redirect("/listings")
        })
    }catch(err){
        req.flash("error", err.message)
        res.redirect("/signup")
    }
}

module.exports.login = (req,res)=>{
    res.render("users/login.ejs")
}

module.exports.googleredirect = (req,res)=>{
    req.flash("success","Welcome back to WanderLust!")
    res.redirect("/listings")
}
module.exports.locallogin = async(req,res)=>{
    req.flash("success","Welcome back to WanderLust!")
    let redirectUrl = res.locals.returnTo ? res.locals.returnTo : "/listings"
    res.redirect(`${redirectUrl}`)
}
module.exports.logout = (req,res)=>{
    req.logout((err)=>{
        if(err){return next(err)}
        req.flash("success","Successfully LogedOut")
        res.redirect("/login")
    })
}