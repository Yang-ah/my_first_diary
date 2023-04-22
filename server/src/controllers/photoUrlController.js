import User from "../models/User.js";

export const postPhotoUrl = async (req, res) => {
  try {
    const { id, month, date } = req.params;

    const user = await User.findById(id);

    user.data[month][date - 1]["photoUrl"] = req.file.path;
    const newUserData = user.data;

    await User.updateOne({ _id: id }, { $set: { data: newUserData } });

    return res.send(`updated photo ${date} ${month}`);
  } catch (error) {
    return res.status(400).send({ errorMessage: error._message });
  }
};
