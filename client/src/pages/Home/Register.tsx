import axios from "axios";
import styles from "./register.module.scss";
import { useState } from "react";

// rootRouter.route("/join").get(getJoin).post(postJoin);

interface IUser {
  username: string;
  email: string;
  password: string;
}

const Register = () => {
  const [userInfo, setUserInfo] = useState<IUser>({
    username: "h",
    email: "h@c.com",
    password: "h",
  });

  const PostJoin = async (e: any) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:4000/api/join", {
      ggg: "hi",
    });
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;

    setUserInfo((prev: any) => {
      return { ...prev, [name]: value };
    });

    console.log(userInfo);
  };

  return (
    <form className={styles.form} onSubmit={PostJoin}>
      <input
        onChange={onChange}
        type="email"
        name="email"
        placeholder="email"
      />
      <input
        onChange={onChange}
        type="password"
        name="password"
        placeholder="password"
      />
      <input
        onChange={onChange}
        type="text"
        name="username"
        placeholder="username"
      />
      <button type="submit">Join</button>
    </form>
  );
};

export default Register;
