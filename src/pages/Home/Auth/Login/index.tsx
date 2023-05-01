import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.scss";
import { motion } from "framer-motion";
import styled from "styled-components";
import { isLoginAtom } from "../../../../state";
import { useSetRecoilState } from "recoil";

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
  const setIsLogin = useSetRecoilState(isLoginAtom);

  const onSubmit = () => {
    setIsLogin(true);
    navigate("/");
  };

  return (
    <Form
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
      className={styles.form}
      onSubmit={onSubmit}
    >
      <div className={styles.inputWrap}>
        <input
          type="email"
          name="email"
          placeholder="e-mail"
          //required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          // required
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
