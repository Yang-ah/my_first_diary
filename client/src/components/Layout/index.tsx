import { Apple, Dark, Peach, Tree } from "../../theme";
import styles from "./layout.module.scss";
import Nav from "./Nav";
import styled, { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import axios from "axios";

const Wrap = styled.div`
  > main {
    background-color: white;
    > header {
      color: ${(props) => props.theme.PRIMARY_50};
    }
  }

  > aside {
    background-color: ${(props) => props.theme.PRIMARY_10};
  }
`;

const Layout = () => {
  const [theme, setTheme] = useState(Apple);
  const location = useLocation();
  const homePath = location.pathname === "/";
  const [data, setData] = useState({});

  const onChangeTheme = (theme: string) => {
    theme === "tree" && setTheme(Tree);
    theme === "peach" && setTheme(Peach);
    theme === "apple" && setTheme(Apple);
    theme === "dark" && setTheme(Dark);
  };

  const thisMonth = new Date().getMonth();

  const getItems = async () => {
    const response = await axios.get("http://localhost:4000/api/planner");
    setData(response.data);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Wrap className={styles.wrap}>
        <main>
          {!homePath && <Header />}
          <Outlet context={{ data }} />
        </main>
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
