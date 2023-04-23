import axios from "axios";
import styles from "./register.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import { register, IRegister } from "../../../../api/Auth";

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

const Register = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<IRegister>({
    email: "",
    password: "",
    username: "",
  });

  const PostJoin = async (e: any) => {
    e.preventDefault();
    const response = await register(userInfo);
    if (response.status === 200) {
      alert("회원가입이 완료되었습니다. :)");
      navigate("/login");
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
      onSubmit={PostJoin}
    >
      <div className={styles.inputWrap}>
        <input
          onChange={onChange}
          type="email"
          name="email"
          placeholder="이메일을 입력해주세요."
          required
        />
        <input
          onChange={onChange}
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요."
          required
        />
        <input
          onChange={onChange}
          type="text"
          name="username"
          placeholder="사용하실 닉네임을 입력해주세요."
          required
        />
      </div>
      <button type="submit">가입하기</button>
    </Form>
  );
};

export default Register;
