import { Outlet, useMatch, useNavigate } from "react-router-dom";
import styles from "./home.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { isLoginAtom } from "../../state";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { Toast } from "../../components";
import cx from "classnames";

const Wrap = styled(motion.section)`
  > header {
    span {
      color: ${(props) => props.theme.PRIMARY_30};
    }
  }
  > footer {
    > button {
      &:hover {
        background-color: ${(props) => props.theme.PRIMARY_30};
        color: white;
      }
    }
  }
`;

const Home = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom);
  const homeMatch = useMatch("/");
  const [onToast, setOnToast] = useState(false);

  const onClickTest = () => {
    setIsLogin(true);
    showToast();
  };

  const showToast = () => {
    setOnToast(true);
    const timer = setTimeout(() => {
      setOnToast(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  };

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
              <button onClick={onClickTest}>
                테스트 계정으로 둘러볼게요✨
              </button>
            </>
          )}

          {isLogin && <div>반가워요, My First Diary를 한번 둘러볼까요?</div>}
          <Outlet />
        </motion.footer>
      </AnimatePresence>
      <Toast className={cx(styles.toast, { [styles.onToast]: onToast })}>
        {isLogin
          ? "테스트 계정으로 로그인 되었습니다."
          : "로그아웃 되었습니다."}
      </Toast>
    </Wrap>
  );
};

export default Home;
