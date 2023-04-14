import { useNavigate } from "react-router-dom";
import styles from "./login.module.scss";
import { useState } from "react";
import axios from "axios";

interface ILogin {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<ILogin>({
    email: "h@c.com",
    password: "h",
  });

  const postLogin = async (
    e: React.FormEvent<HTMLButtonElement | HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/login",
        userInfo
      );

      if (response.status === 200) {
        navigate("/photo");
      } // TODO : error type이 any.... 이후에 해결하자
    } catch (error: any) {
      alert(error.response.data.errorMessage);
    }
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;

    setUserInfo((prev: any) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <form className={styles.form} onSubmit={postLogin}>
      <input
        type="email"
        name="email"
        placeholder="email"
        onChange={onChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={onChange}
      />
      <button onClick={postLogin}>로그인</button>
    </form>
  );
};

export default Login;
