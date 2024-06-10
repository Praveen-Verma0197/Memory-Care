const { default: mongoose } = require("mongoose");
const Appointment = require("../model/appointment");
const User = require("../model/User");

exports.bookAppointment = async (req, res, next) => {
  try {
    const {
      id: careTakerId,
      pname: patientName,
      email: doctorEmail,
      dname: doctorName,
      contact,
      date,
      time,
    } = req.body;
    const bookAppointment = new Appointment({
      careTakerId: careTakerId,
      patientName: patientName,
      doctorEmail: doctorEmail,
      doctorName: doctorName,
      contact: contact,
      date: date,
      time: time,
      status: "0",
    });
    console.log(bookAppointment);

    const bookStatus = await bookAppointment.save();
    res.status(200).send({
      status: 200,
      message: "Appointment Successfully Send to Doctor",
    });
  } catch (error) {
    next(error);
  }
};

exports.doctorConfirmation = async (req, res, next) => {
  const { appointmentId, status } = req.body;
  if (status === "1") {
    Appointment.findByIdAndUpdate(
      { _id: mongoose.Types.ObjectId(appointmentId) },
      {
        status: "1",
      },
      (error, status) => {
        if (error) {
          next(error);
        } else {
          res
            .status(200)
            .send({ status: 200, message: "Appointment Confirmed" });
        }
      }
    );
  } else {
    Appointment.findByIdAndUpdate(
      { _id: mongoose.Types.ObjectId(appointmentId) },
      {
        status: "2",
      },
      (error, status) => {
        if (error) {
          next(error);
        } else {
          res
            .status(200)
            .send({ status: 200, message: "Appointment Rejected" });
        }
      }
    );
  }
};

// I am trying to fetch all with patient name
exports.fetchAppointment = async (req, res, next) => {
  const { email } = req.body;
  console.log(email);
  const fetchAppointment = await Appointment.find();
  res.status(200).send({ status: 200, message: fetchAppointment });
};
