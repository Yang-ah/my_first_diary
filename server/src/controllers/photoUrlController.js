import User from "../models/User.js";

export const patchPhotoUrl = async (req, res) => {
  try {
    const { id, month, date, photoUrl } = req.body;
    const user = await User.findById(id);

    user.data[month][date - 1]["photoUrl"] = photoUrl;

    const newUserData = user.data;

    const patchUser = await User.updateOne(
      { _id: id },
      { $set: { data: newUserData } }
    );

    return res.send(`updated photoUrl ${date} ${month}`);
  } catch (error) {
    return res.status(400).send({ errorMessage: error._message });
  }
};
