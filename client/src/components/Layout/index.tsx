import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Apple, Dark, Peach, Tree } from "../../theme";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./layout.module.scss";
import axios from "axios";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import { Chevron } from "../../assets/icon";
import Trackers from "./Trackers";
import { useSetRecoilState, useRecoilState } from "recoil";
import { dataAtom, thisMonthAtom } from "../../atom";

const Wrap = styled.div`
  .section {
    .chevron {
      fill: ${(props) => props.theme.PRIMARY_50};
    }
    > header {
      color: ${(props) => props.theme.PRIMARY_50};
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
  const homePath = location.pathname === "/";
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

  // Fetch data
  const year = new Date().getFullYear();
  const monthStr = new Date(year, thisMonth, 1).toLocaleString("en-US", {
    month: "long",
  });

  const setData = useSetRecoilState(dataAtom);

  const getItems = async () => {
    const response = await axios.get("http://localhost:4000/api/planner");
    setData(response.data.planner[monthStr]);
  };

  useEffect(() => {
    getItems();
  }, [monthStr]);

  return (
    <ThemeProvider theme={theme}>
      <Wrap className={styles.wrap}>
        <section className="section">
          {!homePath && <Header month={monthStr} year={year + ""} />}

          <div className={styles.mainWrap}>
            {homePath || trackerPath || (
              <button name="left" className={styles.chevron} onClick={onClick}>
                <Chevron className="chevron" />
              </button>
            )}

            <section className={styles.center}>
              <Trackers className={styles.tracker} />
              <Outlet />
            </section>

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
