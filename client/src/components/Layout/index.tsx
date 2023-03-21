import { Apple, Dark, Peach, Tree } from "../../theme";
import styles from "./layout.module.scss";
import Nav from "./Nav";
import styled, { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";

const Wrap = styled.div`
  > main {
    background-color: white;
  }

  > aside {
    background-color: ${(props) => props.theme.PRIMARY_10};
  }
`;

const Layout = () => {
  const [theme, setTheme] = useState(Apple);

  const onChangeTheme = (theme: string) => {
    theme === "tree" && setTheme(Tree);
    theme === "peach" && setTheme(Peach);
    theme === "apple" && setTheme(Apple);
    theme === "dark" && setTheme(Dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrap className={styles.wrap}>
        <main></main>
        <aside>
          <Nav onClick={onChangeTheme} icon={theme.ICON} />
        </aside>
      </Wrap>
    </ThemeProvider>
  );
};

export default Layout;
