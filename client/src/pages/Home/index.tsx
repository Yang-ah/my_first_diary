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
      </footer>
    </section>
  );
};

export default Home;
