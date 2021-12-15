const mongoose = require("mongoose");

const instrumentDetalisSchema = mongoose.Schema({
  //INSTRUMENT DEATILS
  booking_id: {
    type: String,
  },
  payment_source: { type: String },
  payment_reference_no: { type: Number },
  payment_date: { type: Date },
  amount: { type: Number },
  bank_name: { type: String },
  clearance_status: { type: String },
  clearance_date: { type: Date },
  attachment: { type: String }, //URL
  total_paid_amount: { type: Number },
});

const instrumentDetails = mongoose.model(
  "InstrumentDetails",
  instrumentDetalisSchema
);
module.exports = instrumentDetails;
