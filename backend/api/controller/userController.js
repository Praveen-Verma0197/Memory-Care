const mongoose = require("mongoose");
const { resetWatchers } = require("nodemon/lib/monitor/watch");
const Gallery = require("../model/Gallery");
const User = require("../model/User");

exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user == null) {
      res
        .status(200)
        .send({ status: 400, message: "Invalid Username or Password" });
    } else {
      if (email == user.email && password == user.password) {
        res.status(200).json({
          status: 200,
          message: "User Login Successfully",
          data: {
            user: user,
          },
        });
      }
    }
  } catch (error) {
    next(error);
  }
};

exports.gallery = async (req, res, next) => {
  try {
    const { patientId, image, message } = req.body;
    const newGallery = new Gallery({
      patientId: patientId,
      image: req.file ? req.file.path : req.body.path,
      message: message,
    });
    const gallery = await newGallery.save();
    res.status(200).send({
      status: 200,
      data: { newGallery: newGallery },
      message: "Saved",
    });
    return;
  } catch (err) {
    next(err);
  }
};

exports.changePassword = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    console.log(user);
    if (user === null) {
      res.status(200).send({ status: 400, message: "Invalid Email" });
    } else {
      if (email == user.email) {
        User.findOneAndUpdate(email, {
          password: password,
        })
          .then(() =>
            res.status(202).send({ status: 200, message: "Password Updated" })
          )
          .catch((error) => {
            console.log(error);
            res.sendStatus(400);
          });
      }
    }
  } catch (err) {
    nect(err);
  }
};
