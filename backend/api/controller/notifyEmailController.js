const sgMail = require("@sendgrid/mail");

const notifyPatient = async (req, res, next) => {
  console.log("Sending email...");

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const emailMessage = {
    to: "kritick7777@gmail.com",
    from: "anmol2002.aa1@gmail.com",
    subject: "Reminder",
    text: "You have to call your Family Members at 7 PM!",
    html: "<strong>You have to call your Family Members at 7 PM!</strong>",
  };

  try {
    await sgMail.send(emailMessage);
    console.log("Email sent");
    res.status(200).send("Email successfully sent.");
  } catch (error) {
    console.error(error.toString());
    res.status(500).send("Failed to send email.");
  }
};

module.exports = { notifyPatient };
