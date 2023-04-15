import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import styled from "styled-components";

const Form = styled(motion.form)`
  input,
  button {
    color: ${(props) => props.theme.PRIMARY_50};
  }
  button {
    background-color: ${(props) => props.theme.PRIMARY_30};
    color: white;
  }
`;

interface ILogin {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<ILogin>({
    email: "",
    password: "",
  });

  const postLogin = async (
    e: React.FormEvent<HTMLButtonElement | HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/login",
        userInfo,
        { withCredentials: true }
      );

      if (response.status === 200) {
        console.log(response.data);
        navigate("/photo");

        // const { token } = response.data;
        // localStorage.setItem("TOKEN", token);
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

  useEffect(() => {}, []);

  return (
    <Form
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
      exit={{ x: -300, opacity: 0 }}
      className={styles.form}
      onSubmit={postLogin}
    >
      <div className={styles.inputWrap}>
        <input
          type="email"
          name="email"
          placeholder="email"
          required
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          onChange={onChange}
        />
        <Link to="/register" className={styles.link}>
          회원가입 하시겠습니까? &rarr;
        </Link>
      </div>
      <button type="submit">로그인</button>
    </Form>
  );
};

export default Login;
