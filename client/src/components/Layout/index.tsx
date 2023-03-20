import { Tree } from "../../theme";
import styles from "./layout.module.scss";
import Nav from "./Nav";
import styled, { ThemeProvider } from "styled-components";

const Wrap = styled.div`
  > main {
    background-color: white;
  }

  > aside {
    background-color: ${(props) => props.theme.PRIMARY_10};
  }
`;

const Layout = () => {
  return (
    <ThemeProvider theme={Tree}>
      <Wrap className={styles.wrap}>
        <main></main>
        <aside>
          <Nav />
        </aside>
      </Wrap>
    </ThemeProvider>
  );
};

export default Layout;
