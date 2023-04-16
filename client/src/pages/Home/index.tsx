import { Outlet, useMatch, useNavigate } from "react-router-dom";
import styles from "./home.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { dataAtom, isLoginAtom } from "../../atom";
import { useRecoilState, useSetRecoilState } from "recoil";

const Wrap = styled(motion.section)`
  > header {
    color: ${(props) => props.theme.PRIMARY_50};
    span {
      color: ${(props) => props.theme.PRIMARY_30};
    }
  }
  > footer {
    > button {
      color: ${(props) => props.theme.PRIMARY_50};

      &:hover {
        background-color: ${(props) => props.theme.PRIMARY_30};
        color: white;
      }
    }
  }
`;

const Home = () => {
  const navigate = useNavigate();
  const setData = useSetRecoilState(dataAtom);
  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom);
  const homeMatch = useMatch("/");

  const getLogin = async () => {
    if (isLogin) {
      return;
    }

    const token = localStorage.getItem("TOKEN");
    if (token) {
      const response = await axios.get(`http://localhost:4000/login/${token}`);
      //console.log(response.data.user.data);
      setData(response.data.user.data);
      setIsLogin(true);
      console.log("home", response.data.user.data);
    }
  };

  useEffect(() => {
    getLogin();
  }, []);

  return (
    <Wrap className={styles.wrap}>
      <header className={styles.logo}>
        <p>
          <span>M</span>y
        </p>
        <p>
          <span>F</span>irst
        </p>
        <p>
          <span>D</span>iary
        </p>
      </header>
      <AnimatePresence>
        <motion.footer>
          {homeMatch && (
            <>
              <button onClick={() => navigate("login")}>로그인</button>
              <button onClick={() => navigate("/")}>일단 둘러볼게요 !</button>
            </>
          )}

          <Outlet />
        </motion.footer>
      </AnimatePresence>
    </Wrap>
  );
};

export default Home;
