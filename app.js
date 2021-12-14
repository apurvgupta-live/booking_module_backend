require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

//MY ROUTES
const bookingModuleRoute = require("./routes/bookingModule");
const instrumentDetailsRoute = require("./routes/instrumentDetails");

//DB CONNECTION
mongoose
  .connect(process.env.DATABASE, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

//MIDDLEWARES
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//ROUTES
app.use("/api/", bookingModuleRoute);
app.use("/api/", instrumentDetailsRoute);

//PORT
const port = process.env.PORT;

//SERVER
app.listen(port, () => {
  console.log(`App is running at port ${port}`);
});
