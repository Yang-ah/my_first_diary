import styles from "./register.module.scss";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { isLoginAtom } from "../../../../state";

const Form = styled(motion.form)`
  button {
    background-color: ${(props) => props.theme.PRIMARY_30};
  }
`;

const Register = () => {
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
          placeholder="이메일을 입력해주세요."
          // required
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요."
          // required
        />
        <input
          type="text"
          name="username"
          placeholder="사용하실 닉네임을 입력해주세요."
          // required
        />
      </div>
      <button type="submit">가입하기</button>
    </Form>
  );
};

export default Register;
