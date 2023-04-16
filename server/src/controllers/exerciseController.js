import User from "../models/User.js";

export const patchExercise = async (req, res) => {
  try {
    const { id, month, date, exercise } = req.body;
    const user = await User.findById(id);

    user.data[month][date - 1]["exercise"] = exercise;

    const newUserData = user.data;

    const patchUser = await User.updateOne(
      { _id: id },
      { $set: { data: newUserData } }
    );

    return res.send(`updated exercise ${date} ${month}`);
  } catch (error) {
    return res.status(400).send({ errorMessage: error._message });
  }
};
