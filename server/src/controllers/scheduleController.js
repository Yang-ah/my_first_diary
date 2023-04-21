import User from "../models/User.js";

export const postSchedule = async (req, res) => {
  try {
    const { id, category, dateString, data } = req.body;
    const date = new Date(dateString).getDate();
    const month = new Date(dateString).toLocaleString("en-US", {
      month: "long",
    });
    const user = await User.findById(id);

    user.data[month][date - 1]["schedule"][category].push(data);

    const newUserData = user.data;

    await User.updateOne({ _id: id }, { $set: { data: newUserData } });

    return res.send(`added ${category} schedule ${date} ${month.slice(0, 3)}`);
  } catch (error) {
    return res.status(400).send({ errorMessage: error._message });
  }
};

export const deleteSchedule = async (req, res) => {
  try {
    const { id, category, index, month, date } = req.params;
    const user = await User.findById(id);

    user.data[month][date - 1]["schedule"][category].splice(index, 1);
    const newUserData = user.data;

    await User.updateOne({ _id: id }, { $set: { data: newUserData } });

    return res.send(`deleted ${category} ${date} ${month.slice(0, 3)}`);
  } catch (error) {
    return res.status(400).send({ errorMessage: error._message });
  }
};
