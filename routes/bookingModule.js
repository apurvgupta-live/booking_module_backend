const express = require("express");
const router = express.Router();
const {
  getBookingById,
  createBooking,
  getBookings,
  updateBooking,
  deleteBooking,
} = require("../controllers/bookingModule");

//PARAMETER
router.param("bookingId", getBookingById);
//Post route
router.post("/createbooking", createBooking);

//Read Route
router.get("/getbookings", getBookings);

//Update Route
router.put("/updatebooking/:bookingId", updateBooking);

//Delete route
router.delete("/deletebooking/:bookingId", deleteBooking);

module.exports = router;
