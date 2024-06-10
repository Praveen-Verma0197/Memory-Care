const express = require("express");
const router = express.Router();
const multer = require("multer");
var path = require("path");
var fs = require("fs");
const {
  addRoutine,
  deleteRoutine,
  fetchRoutine,
} = require("../controller/routineController");
// var pathToCreate = "./images/medicine/";
// //image upload code
// var Storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     console.log("Files From Disk :  ");
//     cb(null, pathToCreate);
//   },
//   filename: (req, file, cb) => {
//     var medicineName = req.body.medicineName;
//     cb(null, medicineName + path.extname(file.originalname));
//   },
// });

// var upload = multer({
//   storage: Storage,
//   fileFilter: function (req, file, callback) {
//     var ext = path.extname(file.originalname);
//     var extLower = ext.toLowerCase();
//     if (extLower == ".jpeg" || extLower == ".png" || extLower == ".jpg") {
//       callback(null, true);
//     } else {
//       callback(
//         {
//           message: "Invalid file Type. Only jpg, png and jpeg are allowed.",
//         },
//         false
//       );
//     }
//   },
// }).single("medicineImg");

router.post("/add-routine", addRoutine);
router.get("/delete-routine", deleteRoutine);
router.post("/get-routine", fetchRoutine);

router.post("/", addRoutine);
router.get("/", deleteRoutine);

module.exports = router;
