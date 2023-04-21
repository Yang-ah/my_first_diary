import User from "../models/User.js";

export const patchDiary = async (req, res) => {
  try {
    const { id, month, date, diary } = req.body;
    const user = await User.findById(id);

    user.data[month][date - 1]["diary"] = diary;

    const newUserData = user.data;

    await User.updateOne({ _id: id }, { $set: { data: newUserData } });

    return res.send(`updated diary ${date} ${month}`);
  } catch (error) {
    return res.status(400).send({ errorMessage: error._message });
  }
};
