import User from "../models/User.js";
import bcrypt from "bcrypt";

export const postJoin = async (req, res) => {
  // console.log(req.body);
  try {
    const { username, email, password } = req.body;
    await User.create({
      username,
      email,
      password,
    });

    return res.end();
  } catch (error) {
    return res.status(400).send({ errorMessage: error._message });
  }
};

// export const getLogin = async (req, res) => {
//   const id = req.headers.authorization;
//   const user = await User.findOne({ id });
//   console.log(user);
// };

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
