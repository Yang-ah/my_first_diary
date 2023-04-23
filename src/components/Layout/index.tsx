import { useEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Apple, Dark, Peach, Tree } from "../../theme";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styles from "./layout.module.scss";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import {
  Chevron,
  IconGithub,
  IconHome,
  IconLogout,
  IconModify,
  IconUser,
} from "../../assets/icon";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  dataAtom,
  isLoginAtom,
  thisMonthAtom,
  usernameAtom,
} from "../../state";
import cx from "classnames";
import { getLogin } from "../../api/Auth";

const Wrap = styled.div`
  .section {
    > header {
      color: ${(props) => props.theme.PRIMARY_50};
    }
    .chevron {
      fill: ${(props) => props.theme.PRIMARY_50};
    }
  }

  > aside {
    background-color: ${(props) => props.theme.PRIMARY_10};
    .asideSvg {
      fill: ${(props) => props.theme.PRIMARY_50};
    }
    .profile {
      background-color: ${(props) => props.theme.PRIMARY_50};
    }
  }
`;

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const setData = useSetRecoilState(dataAtom);
  const [username, setUsername] = useRecoilState(usernameAtom);
  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom);

  const autoSignIn = async () => {
    const token = localStorage.getItem("TOKEN");

    if (isLogin) {
      return;
    }

    if (token) {
      const response = await getLogin(token);
      setData(response.data.user.data);
      setUsername(response.data.user.username);
      setIsLogin(true);
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
    alert("로그아웃 되었습니다.");
    window.location.reload();
  };

  useEffect(() => {
    autoSignIn();
  }, []);

  // Change theme
  const [theme, setTheme] = useState(Apple);
  const onChangeTheme = (theme: string) => {
    theme === "tree" && setTheme(Tree);
    theme === "peach" && setTheme(Peach);
    theme === "apple" && setTheme(Apple);
    theme === "dark" && setTheme(Dark);
  };

  // Check location
  const homePath =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/register";
  const trackerPath = location.pathname === "/tracker";

  const [thisMonth, setThisMonth] = useRecoilState(thisMonthAtom);

  const onClick = (e: React.FormEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;

    if (name === "left") {
      if (thisMonth === 0) {
        return;
      }
      setThisMonth((cur) => cur - 1);
    }

    if (name === "right") {
      if (thisMonth === 11) {
        return;
      }
      setThisMonth((cur) => cur + 1);
    }
  };

  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const onClickDropdown = () => setIsOpen((cur) => !cur);

  return (
    <ThemeProvider theme={theme}>
      <Wrap className={styles.wrap}>
        <section className="section">
          {!homePath && <Header />}

          <div className={styles.mainWrap}>
            {/* left button */}
            {homePath || trackerPath || (
              <button name="left" className={styles.chevron} onClick={onClick}>
                <Chevron className="chevron" />
              </button>
            )}

            <section className={styles.center}>
              <Outlet />
            </section>

            {/* right button */}
            {homePath || trackerPath || (
              <button name="right" className={styles.chevron} onClick={onClick}>
                <Chevron className="chevron" />
              </button>
            )}
          </div>
        </section>

        <aside>
          <header className={styles.asideHeader}>
            <button onClick={() => navigate("/")}>
              <IconHome className="asideSvg" />
            </button>
            <a
              href="https://github.com/Yang-ah/my_first_diary"
              target="_blank"
              className="asideSvg"
              rel="noreferrer"
            >
              <IconGithub />
            </a>

            {isLogin ? (
              <div className={styles.profileWrap}>
                <button
                  ref={ref}
                  onClick={onClickDropdown}
                  className={cx(styles.profile, "profile", {
                    [styles.isOpen]: isOpen,
                  })}
                >
                  <IconUser className={styles.userIcon} />
                </button>
                <div
                  className={cx(styles.dropdownWrap, {
                    [styles.isOpen]: isOpen,
                  })}
                >
                  <button className={styles.login} onClick={logout}>
                    로그아웃
                  </button>
                  <button>정보수정</button>
                </div>
              </div>
            ) : (
              <button onClick={() => navigate(`/login`)}>로그인</button>
            )}
          </header>
          <Nav
            onClick={onChangeTheme}
            icon={theme.ICON}
            path={location.pathname}
          />
          <Footer />
        </aside>
      </Wrap>
    </ThemeProvider>
  );
};

export default Layout;
