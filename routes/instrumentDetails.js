const express = require("express");
const router = express.Router();
const {
  createDetails,
  getDetails,
  updateDetail,
  deleteDetail,
} = require("../controllers/instrumentDetails");

const { getBookingById } = require("../controllers/bookingModule");

//PARAMETER
router.param("bookingId", getBookingById);
//Post route
router.post("/createdetails", createDetails);

//Read Route
router.get("/getdetails/", getDetails);

//Update Route
router.put("/updatedetails/:bookingId", updateDetail);

//Delete route
router.delete("/deletedetails/:bookingId", deleteDetail);

module.exports = router;
