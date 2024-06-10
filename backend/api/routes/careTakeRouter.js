const express = require("express");
const router = express.Router();

const {
  registerCareTaker,
  loginCareTaker,
  addUser,
  deleteUser,
  allUsers,
} = require("../controller/careTakerController");

router.post("/register", registerCareTaker);
router.post("/login", loginCareTaker);
router.post("/addUser", addUser);
router.get("/allUsers", allUsers);
router.delete("/deleteUser/:id", deleteUser);
module.exports = router;
