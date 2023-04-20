import { useRecoilState, useRecoilValue } from "recoil";
import { dataAtom, onTrackerAtom, thisMonthAtom, IData } from "../../status";
import { CheckBox, Line } from "../../components";
import { year } from "../../hooks";
import styles from "./diary.module.scss";
import { useEffect, useState } from "react";
import cx from "classnames";
import styled from "styled-components";
import { IconDumbbell, IconLock } from "../../assets/icon";
import { EmojiSmile } from "../../assets/emoji";
import axios from "axios";

const Header = styled.header`
  > p,
  div,
  button {
    background-color: ${(props) => props.theme.PRIMARY_30};
  }
`;

const Diary = () => {
  const onTracker = useRecoilValue(onTrackerAtom);
  const data = useRecoilValue(dataAtom);
  const [month, setMonth] = useRecoilState(thisMonthAtom);
  const monthStr = new Date(year, month, 1).toLocaleString("en-US", {
    month: "long",
  });
  const [monthData, setMonthData] = useState<IData[] | any>(data[monthStr]);

  const getMonthData = async () => {
    const id = localStorage.getItem("TOKEN");
    const response = await axios.get(`/month/${id}/${monthStr}`);
    setMonthData(response.data);
  };

  useEffect(() => {
    getMonthData();
  }, [month, monthStr]);

  return (
    <>
      <div className={styles.checkbox}>
        <CheckBox name="tracker">tracker</CheckBox>
      </div>
      <main>
        <Header
          className={cx(styles.header, {
            [styles.tracker]: onTracker.tracker,
          })}
        >
          <p className={styles.date}>date</p>
          <div className={styles.main}></div>

          {onTracker.tracker && (
            <aside
              className={cx({ [styles.trackerButtons]: onTracker.tracker })}
            >
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

        {monthData &&
          monthData.map((item: IData) => {
            return (
              <Line
                key={`${monthStr}-${item.date}-${item.diary}-${item.emotion}-${item.exercise}`}
                date={item.date}
                diary={item.diary}
                emotion={item.emotion}
                exercise={item.exercise}
              ></Line>
            );
          })}
      </main>
    </>
  );
};

export default Diary;
