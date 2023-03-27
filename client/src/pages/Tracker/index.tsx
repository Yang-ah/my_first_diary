import { useRecoilState } from "recoil";
import { getDataSelector } from "../../atom";
import styled from "styled-components";
import styles from "./tracker.module.scss";

import Column from "./Column";

const Tracker = () => {
  const [data, setData] = useRecoilState(getDataSelector);
  const months = Object.keys(data);
  const dates = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  return (
    <main className={styles.main}>
      <Column children={dates} month="date" key="date" />
      {months.map((month) => {
        return (
          <Column
            children={data[month]}
            month={month.slice(0, 3).toUpperCase()}
            key={"column" + month}
          />
        );
      })}
    </main>
  );
};

export default Tracker;
