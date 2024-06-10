const Routine = require('../model/Routine');

exports.addRoutine = async (req, res, next) => {
  const { care_taker_ID, routine_name, description } = req.body;

  const newRoutine = new Routine({
    care_taker_ID,
    routine_name,
    description
    // Add other fields as needed
  });

  try {
    const addedRoutine = await newRoutine.save();
    res.status(200).send("Routine added successfully");
  } catch (error) {
    res.status(500).send("Error adding routine");
  }
};

exports.deleteRoutine = async (req, res, next) => {
  const { routineID } = req.body;
  
  try {
    await Routine.findOneAndDelete({ _id: routineID });
    res.status(200).send({ msg: "Routine deleted successfully" });
  } catch (error) {
    res.status(500).send("Error deleting routine");
  }
};

exports.fetchRoutine = async (req, res, next) => {
  const { careTakerId } = req.body;
  console.log('imheer')

  try {
    const result = await Routine.find({ care_taker_ID: careTakerId });
    res.status(200).send({ status: 200, message: result });
  } catch (error) {
    res.status(500).send("Error fetching routine");
  }
};
