import Login from "./Auth/Login";
import Register from "./Auth/Register";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <section className={styles.wrap}>
      <header className={styles.logo}>
        <p>
          <span>M</span>y
        </p>
        <p>
          <span>F</span>irst
        </p>
        <p>
          <span>D</span>iary
        </p>
      </header>

      <footer>
        <button>로그인</button>
        <button>일단 둘러볼게요 !</button>
        <Register />
        <h1>login</h1>
        <Login />
      </footer>
    </section>
  );
};

export default Home;
