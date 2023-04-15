import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Apple, Dark, Peach, Tree } from "../../theme";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import styles from "./layout.module.scss";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import {
  Chevron,
  IconGithub,
  IconHome,
  IconLogout,
  IconUser,
} from "../../assets/icon";
import { useRecoilState } from "recoil";
import { thisMonthAtom } from "../../atom";
import cx from "classnames";

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
  // Change theme
  const [theme, setTheme] = useState(Apple);
  const onChangeTheme = (theme: string) => {
    theme === "tree" && setTheme(Tree);
    theme === "peach" && setTheme(Peach);
    theme === "apple" && setTheme(Apple);
    theme === "dark" && setTheme(Dark);
  };

  // Check location
  const location = useLocation();
  const homePath =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/register";

  const trackerPath = location.pathname === "/tracker";
  const navigate = useNavigate();
  // Move month
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
            <button
              onClick={() => {
                navigate("/");
              }}
            >
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
            <button className={cx(styles.profile, "profile")}>
              <IconUser />
            </button>
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

{
  /* <button>
  <IconLogout />
</button>; */
}
