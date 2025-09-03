const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const { ListingSchema, ReviewSchema } = require("../schema.js");
const Asyncwrap = require("../utils/Asyncwrap.js");
const ExpressError = require("../utils/ExpressError.js");
const { isLoggedIn, isOwner } = require("../middleware.js");
const listingController = require("../controllers/listings.js");


const { upload } = require("../cloudConfig.js");

const validateListing = (req, res, next) => {
  let { error } = ListingSchema.validate(req.body);
  if (error) {
    throw new ExpressError(400, error);
  } else {
    next();
  }
};

router
  .route("/")
  .get(Asyncwrap(listingController.indexroute))
  .post(isLoggedIn,upload.single("listing[image]"),validateListing,Asyncwrap(listingController.postnewform));

// New Listing
router.get("/new", isLoggedIn, listingController.getnewlisting);

router
  .route("/:id")
  .get(Asyncwrap(listingController.GetIndividual))
  .put(isLoggedIn, isOwner, upload.single("listing[image]"),validateListing, Asyncwrap(listingController.editform))
  .delete(isLoggedIn, isOwner, Asyncwrap(listingController.deletelisting));

router.get("/:id/edit", isLoggedIn, isOwner, Asyncwrap(listingController.Geteditform));

module.exports = router;
