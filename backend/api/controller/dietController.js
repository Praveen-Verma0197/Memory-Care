const Diet = require("../model/diet");
var now = new Date().toLocaleDateString();

exports.addDiet = async (req, res, next) => {
  var { title, type, date, description } = req.body;
  console.log(req.body);
  const addDiet = new Diet({
    title: title,
    type: type,
    eat_schedule: date,
    food_diet: description,
    diet_date: now,
  });
  const addedDite = await addDiet.save();
  res.status(200).send("Diet added successfully!!!");
};

exports.getTodayDiet = async (req, res, next) => {
  var getAllDiet = await Diet.find({ diet_date: now });
  res.status(200).send({
    status: 200,
    data: getAllDiet,
  });
};
