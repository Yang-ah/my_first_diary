import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { dataAtom, isLoginAtom, usernameAtom } from "../../../../status";
import { useRecoilState, useSetRecoilState } from "recoil";
import { postLogin, ILogin } from "../../../../api/Auth";

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
  const [userInfo, setUserInfo] = useState<ILogin>({
    email: "",
    password: "",
  });

  const signIn = async (
    e: React.FormEvent<HTMLButtonElement | HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const response = await postLogin(userInfo);
      if (response.status === 200) {
        setIsLogin(true);
        setData(response.data.user.data);
        setUsername(response.data.user.username);
        localStorage.setItem("TOKEN", response.data.user._id);
        navigate("/");
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
    <Form
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
      className={styles.form}
      onSubmit={signIn}
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
