import { Tree } from "../../theme";
import styles from "./layout.module.scss";
import Nav from "./Nav";

import { ThemeProvider } from "styled-components";

const Layout = () => {
  return (
    <ThemeProvider theme={Tree}>
      <div className={styles.wrap}>
        <main></main>
        <aside>
          <Nav />
        </aside>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
