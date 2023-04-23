import { Outlet, useMatch, useNavigate } from "react-router-dom";
import styles from "./home.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { isLoginAtom, usernameAtom } from "../../state";
import { useRecoilValue } from "recoil";

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
  const username = useRecoilValue(usernameAtom);
  const isLogin = useRecoilValue(isLoginAtom);
  const homeMatch = useMatch("/");

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
          {!isLogin && homeMatch && (
            <>
              <button onClick={() => navigate("login")}>로그인</button>
              <button onClick={() => navigate("/")}>일단 둘러볼게요 !</button>
            </>
          )}

          {isLogin && <div>반가워요 {username}님 !</div>}
          <Outlet />
        </motion.footer>
      </AnimatePresence>
    </Wrap>
  );
};

export default Home;
