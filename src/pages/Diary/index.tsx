import { dataAtom, onTrackerAtom, thisMonthAtom, IData } from "../../state";
import { useEffect, useState } from "react";
import { getMonthData } from "../../api/Data";
import { useRecoilValue } from "recoil";
import { EmojiSmile } from "../../assets/emoji";
import { CheckBox, Line } from "../../components";
import { getUserId, monthStr } from "../../hooks";
import { IconDumbbell, IconLock } from "../../assets/icon";
import styles from "./diary.module.scss";
import styled from "styled-components";
import cx from "classnames";

const Header = styled.header`
  > p,
  div,
  button {
    background-color: ${(props) => props.theme.PRIMARY_30};
  }
`;

const Diary = () => {
  const data = useRecoilValue(dataAtom);
  const month = useRecoilValue(thisMonthAtom);
  const onTracker = useRecoilValue(onTrackerAtom);
  const [monthData, setMonthData] = useState<IData[] | any>(
    data[monthStr(month)]
  );

  const fetchMonthData = async () => {
    const id = getUserId();
    const response = await getMonthData(id, monthStr(month));
    setMonthData(response.data);
  };

  useEffect(() => {
    fetchMonthData();
  }, [month]);

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
                key={`diary-${monthStr(month)}-${item.date}-${item.diary}-${
                  item.emotion
                }-${item.exercise}`}
                date={item.date}
                diary={item.diary}
                emotion={item.emotion}
                exercise={item.exercise}
                month={monthStr(month)}
                fetchMonthData={fetchMonthData}
              ></Line>
            );
          })}
      </main>
    </>
  );
};

export default Diary;
