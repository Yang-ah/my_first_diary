import { useRecoilState, useRecoilValue } from "recoil";
import { getDataSelector, onTrackerAtom, thisMonthAtom } from "../../atom";
import { Line } from "../../components";
import { year } from "../../hooks";
import styles from "./diary.module.scss";
import { useState } from "react";
import cx from "classnames";
import styled from "styled-components";
import { IconDumbbell, IconLock } from "../../assets/icon";
import { EmojiSmile } from "../../assets/emoji";

const Header = styled.header`
  > p,
  div,
  button {
    background-color: ${(props) => props.theme.PRIMARY_30};
  }
`;

const Diary = () => {
  const onTracker = useRecoilValue(onTrackerAtom);
  const [data, setData] = useRecoilState(getDataSelector); // 비동기

  const month = useRecoilValue(thisMonthAtom);
  const monthStr = new Date(year, month, 1).toLocaleString("en-US", {
    month: "long",
  });

  return (
    <main>
      <Header
        className={cx(styles.header, {
          [styles.tracker]: onTracker.tracker,
        })}
      >
        <p className={styles.date}>date</p>
        <div className={styles.main}></div>

        {onTracker.tracker && (
          <aside className={cx({ [styles.trackerButtons]: onTracker.tracker })}>
            <div className={styles.exercise}>
              <IconDumbbell />
            </div>
            <div>
              <EmojiSmile />
            </div>
            <div className={styles.lock}>
              <IconLock />
            </div>
          </aside>
        )}

        {onTracker.tracker || (
          <div className={styles.lock}>
            <IconLock />
          </div>
        )}
      </Header>

      {data[monthStr] &&
        data[monthStr].map((item) => {
          return (
            <Line
              key={"diary" + item.date}
              date={item.date}
              value={item.diary}
            ></Line>
          );
        })}
    </main>
  );
};

export default Diary;
