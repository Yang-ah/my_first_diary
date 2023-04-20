import User from "../models/User.js";

export const patchEmotion = async (req, res) => {
  try {
    const { id, month, date, emotion } = req.body;
    const user = await User.findById(id);

    user.data[month][date - 1]["emotion"] = emotion;

    const newUserData = user.data;

    await User.updateOne({ _id: id }, { $set: { data: newUserData } });

    return res.send(`updated emotion ${date} ${month}`);
  } catch (error) {
    return res.status(400).send({ errorMessage: error._message });
  }
};
