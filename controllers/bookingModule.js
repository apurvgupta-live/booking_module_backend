const BookingModule = require("../models/bookingModule");

//Get booking by Id
exports.getBookingById = (req, res, next, id) => {
  BookingModule.findById(id).exec((err, booking) => {
    if (err) {
      return res.status(400).json({
        error: "No Booking Found",
      });
    }
    req.booking = booking;
    next();
  });
};

//Create Booking Module
exports.createBooking = async (req, res) => {
  console.log(req.body);
  const bookingObj = new BookingModule(req.body);
  try {
    const savedObj = await bookingObj.save();
    if (!savedObj) throw new Error("Can Not save object into db");
    return res.json({
      isvalidExecution: true,
      bookingModule: savedObj,
    });
  } catch (error) {
    return res.json({
      isvalidExecution: false,
      error: error.message,
    });
  }
};

//Read booking Module
exports.getBookings = async (req, res) => {
  try {
    const bookings = await BookingModule.find();
    // console.log(bookings);
    if (bookings.length > 0) {
      return res.status(400).json({
        isvalidExecution: true,
        bookings: bookings,
      });
    }
  } catch (error) {
    return res.status(400).json({
      isvalidExecution: false,
      error: error.message,
    });
  }
};

//update Booking module
exports.updateBooking = (req, res) => {
  BookingModule.findByIdAndUpdate(
    { _id: req.booking._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, booking) => {
      if (err) {
        return res.status(400).json({
          error: "No booking updated",
        });
      }
      res.json(booking);
    }
  );
};

//Delete Booking Module
exports.deleteBooking = (req, res) => {
  const booking = req.booking;
  booking.remove((err, booking) => {
    if (err) {
      res.status(400).json({
        err: "Failed to delete",
      });
    }
    res.json({
      message: "Successfully deleted ",
    });
  });
};
