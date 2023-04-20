import User from "../models/User.js";

export const getMonthData = async (req, res) => {
  const { id, month } = req.params;
  const user = await User.findById(id);
  return res.send(user.data[month]);
};
