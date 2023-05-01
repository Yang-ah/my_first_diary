import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Apple, Dark, Peach, Tree } from "../../theme";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styles from "./layout.module.scss";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import { Chevron, IconGithub, IconHome, IconUser } from "../../assets/icon";
import { useRecoilState } from "recoil";
import { isLoginAtom, thisMonthAtom } from "../../state";
import cx from "classnames";

const Wrap = styled.div`
  > aside {
    background-color: ${(props) => props.theme.PRIMARY_10};
  }
`;

const Layout = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom);
  const location = useLocation();
  const navigate = useNavigate();

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

  const onClickDropdown = () => setIsOpen((cur) => !cur);
  const [isOpen, setIsOpen] = useState(false);
  const logout = () => {
    setIsLogin(false);
    setIsOpen(false);
    navigate("/");
  };

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
                <Chevron />
              </button>
            )}
          </div>
        </section>

        <aside>
          <header className={styles.asideHeader}>
            <button onClick={() => navigate("/")}>
              <IconHome className={styles.asideSvg} />
            </button>
            <a
              href="https://github.com/Yang-ah/my_first_diary"
              target="_blank"
              className={styles.asideSvg}
              rel="noreferrer"
            >
              <IconGithub />
            </a>

            {isLogin ? (
              <div className={styles.profileWrap}>
                <button
                  onClick={onClickDropdown}
                  className={cx(styles.profile, {
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
