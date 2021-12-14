const InstrumentDetails = require("../models/instrumentDetails");

//Get details by Id
// exports.getDetailsById = (req, res, next, id) => {
//   InstrumentDetails.findById(id).exec((err, details) => {
//     if (err) {
//       return res.status(400).json({
//         error: "No details Found",
//       });
//     }
//     req.details = details;
//     next();
//   });
// };

//Create instrument details Module
exports.createDetails = async (req, res) => {
  console.log(req.body);
  const detailsObj = new InstrumentDetails(req.body);
  try {
    const savedObj = await detailsObj.save();
    if (!savedObj) throw new Error("Can Not save object into db");
    return res.json({
      isvalidExecution: true,
      instrumentDetails: savedObj,
    });
  } catch (error) {
    return res.json({
      isvalidExecution: false,
      error: error.message,
    });
  }
};

//Read details Module
exports.getDetails = async (req, res) => {
  try {
    const details = await InstrumentDetails.find();
    // console.log(details);
    if (details.length > 0) {
      return res.status(400).json({
        isvalidExecution: true,
        details: details,
      });
    }
  } catch (error) {
    return res.status(400).json({
      isvalidExecution: false,
      error: error.message,
    });
  }
};

//update instrument details module
exports.updateDetail = (req, res) => {
  InstrumentDetails.findByIdAndUpdate(
    { _id: req.details._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, details) => {
      if (err) {
        return res.status(400).json({
          error: "No details updated",
        });
      }
      res.json(details);
    }
  );
};

//Delete instrument details Module
exports.deleteDetail = (req, res) => {
  const details = req.details;
  details.remove((err, details) => {
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
