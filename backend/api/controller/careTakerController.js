const mongoose = require("mongoose");
const { resetWatchers } = require("nodemon/lib/monitor/watch");
const bcrypt = require("bcrypt");
const CareTaker = require("../model/careTaker");
const User = require("../model/User");

exports.registerCareTaker = async (req, res, next) => {
  try {
    const { name, email, contact, password } = req.body;
    if (!name || !email || !contact || !password) {
      res
        .status(200)
        .send({ status: 400, message: "Make sure no field is empty" });
      return;
    }
    const userExist = await CareTaker.findOne({ email: email });

    if (userExist) {
      res.status(200).send({ status: 400, message: "User already exist!!!" });
      return;
    }

    const createNewCareTaker = new CareTaker({
      name: name,
      email: email,
      contact: contact,
      password: password,
    });
    createNewCareTaker.password = await bcrypt.hash(password, 10);
    const careTaker = await createNewCareTaker.save();
    res
      .status(200)
      .send({ status: 200, message: "User Registered Successfully" });
    return;
  } catch (error) {
    next(error);
  }
};

exports.loginCareTaker = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await CareTaker.findOne({ email: email });
    console.log(user);
    if (user == null) {
      res.status(200).send({ status: 400, message: "User Not Found" });
    } else {
      var pass = await bcrypt.compare(req.body.password, user.password);
      if (email == user.email && pass) {
        res.status(200).json({
          status: 200,
          message: "User Login Successfully",
          data: {
            user: user,
          },
        });
      } else {
        res.status(200).json({
          status: 400,
          message: "Invalid Username or Password",
        });
      }
    }
  } catch (error) {
    next(error);
  }
};

exports.addUser = async (req, res, next) => {
  try {
    const { careTakerId, role, name, email, contact } = req.body;

    const newUser = new User({
      careTakerId: careTakerId,
      role: role,
      name: name,
      email: email,
      contact: contact,
    });
    const user = await newUser.save();
    // add mail to send to particular mail
    res
      .status(200)
      .send({ status: 200, data: { newUser: newUser }, message: "Saved" });
    return;
  } catch (error) {
    next(error);
  }
};

exports.allUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      status: 200,
      data: {
        users: users,
      },
    });
    return;
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    User.findByIdAndDelete(req.params.id)
      .then(() =>
        res.status(200).send({ status: 200, message: "User Deleted" })
      )
      .catch((error) => {
        console.log(error);
        res.sendStatus(400);
      });
  } catch (err) {
    next(err);
  }
};
