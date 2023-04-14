import axios from "axios";
import styles from "./register.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// rootRouter.route("/join").get(getJoin).post(postJoin);

interface IUser {
  username: string;
  email: string;
  password: string;
}

const Register = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<IUser>({
    username: "h",
    email: "h@c.com",
    password: "h",
  });

  const PostJoin = async (e: any) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:4000/join", userInfo);
    if (response.status === 200) {
      navigate("/photo");
    }
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;

    setUserInfo((prev: any) => {
      return { ...prev, [name]: value };
    });
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
