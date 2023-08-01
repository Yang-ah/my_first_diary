import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.scss";
import { motion } from "framer-motion";
import styled from "styled-components";
import { isLoginAtom } from "../../../../state";
import { useSetRecoilState } from "recoil";
import { Toast } from "../../../../components";
import { useEffect, useState } from "react";
import cx from "classnames";

const Login = () => {
  const navigate = useNavigate();
  const setIsLogin = useSetRecoilState(isLoginAtom);
  const [onToast, setOnToast] = useState(false);

  const onSubmit = () => {
    setIsLogin(true);
    navigate("/");
  };

  const showToast = () => {
    setOnToast(true);
    const timer = setTimeout(() => {
      setOnToast(false);
    }, 8000);
    return () => {
      clearTimeout(timer);
    };
  };

  useEffect(() => {
    showToast();
  }, []);

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
          className={styles.input}
          //required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className={styles.input}
          // required
        />
        <Link to="/register" className={styles.link}>
          회원가입 하시겠습니까? &rarr;
        </Link>
      </div>
      <button type="submit">로그인</button>

      <Toast className={cx(styles.toast, { [styles.onToast]: onToast })}>
        <p>현재 테스트 계정으로만 &nbsp; 로그인 가능합니다.</p>
        <p>로그인 버튼 클릭 시,</p>
        <p className={styles.bold}>테스트 계정으로 로그인 됩니다.</p>
      </Toast>
    </Form>
  );
};

const Form = styled(motion.form)`
  button {
    background-color: ${(props) => props.theme.PRIMARY_30};
  }
`;

export default Login;
