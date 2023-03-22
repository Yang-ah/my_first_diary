import { Apple, Dark, Peach, Tree } from "../../theme";
import styles from "./layout.module.scss";
import Nav from "./Nav";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
// import Logo from "./Logo";

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

  const onChangeTheme = (theme: string) => {
    theme === "tree" && setTheme(Tree);
    theme === "peach" && setTheme(Peach);
    theme === "apple" && setTheme(Apple);
    theme === "dark" && setTheme(Dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrap className={styles.wrap}>
        <main>{!homePath && <Header />}</main>
        <aside>
          {/*!homePath && <Logo className={styles.logo} />*/}
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
