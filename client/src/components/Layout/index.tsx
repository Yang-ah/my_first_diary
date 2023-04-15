import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Apple, Dark, Peach, Tree } from "../../theme";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./layout.module.scss";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import { Chevron } from "../../assets/icon";
import Trackers from "./Trackers";
import { useRecoilState } from "recoil";
import { thisMonthAtom } from "../../atom";

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
              <Trackers className={styles.tracker} />
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
