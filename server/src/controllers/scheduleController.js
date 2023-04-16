import Schedule from "../models/Schedule.js";
import User from "../models/User.js";

export const patchSchedule = async (req, res) => {
  console.log(req.body);

  try {
    const { id, category, month, content, date, importance, place, time, who } =
      req.body;

    const user = await User.updateOne(
      { _id: id },
      { $set: { data: { January: "h" } } }
    );

    return res.send("ok");
  } catch (error) {
    return res.status(400).send({ errorMessage: error._message });
  }
};
