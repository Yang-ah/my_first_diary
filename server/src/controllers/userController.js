import User from "../models/User.js";
import bcrypt from "bcrypt";

const setInitData = () => {
  const thisYear = new Date().getFullYear();
  const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const result = {};

  months.map((month) => {
    const strMonth = new Date(thisYear, month, 1).toLocaleString("en-US", {
      month: "long",
    });
    const thisMonthEnd = new Date(thisYear, month + 1, 0).getDate();

    result[strMonth] = [];

    for (let i = 1; i <= thisMonthEnd; i++) {
      result[strMonth].push({
        date: i,
        photoUrl: "",
        diary: "",
        schedule: {
          work: [],
          plan: [],
        },
        emotion: "",
        exercise: false,
      });
    }
  });

  return result;
};

export const postJoin = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    await User.create({
      username,
      email,
      password,
      data: setInitData(),
    });

    return res.end();
  } catch (error) {
    return res.status(400).send({ errorMessage: error._message });
  }
};

export const postLogin = async (req, res) => {
  const { email, password } = req.body;

  // email이 같은 user를 찾음
  const user = await User.findOne({ email });

  // email이 같은 user가 없다면
  if (!user) {
    return res
      .status(400)
      .send({ errorMessage: "An account with this username does not exists." });
  }

  // email이 같은 user의 password와 들어온 password 비교
  const ok = await bcrypt.compare(password, user.password);

  if (!ok) {
    return res.status(400).send({
      errorMessage: "Wrong password",
    });
  }
  // check if password correct
  req.session.loggedIn = true;
  req.session.user = user;
  res.send({ user });
};

export const getLogin = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.send({ user });
};
