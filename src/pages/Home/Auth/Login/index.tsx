import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { dataAtom, isLoginAtom, usernameAtom } from "../../../../state";
import { useRecoilState, useSetRecoilState } from "recoil";

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

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useRecoilState(usernameAtom);
  const setIsLogin = useSetRecoilState(isLoginAtom);
  const setData = useSetRecoilState(dataAtom);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;

    setUserInfo((prev: any) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <Form
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
      className={styles.form}
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
