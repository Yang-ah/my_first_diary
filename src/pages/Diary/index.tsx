import { dataAtom, onTrackerAtom, thisMonthAtom, IData } from "../../state";
import { useRecoilValue } from "recoil";
import { EmojiSmile } from "../../assets/emoji";
import { CheckBox, Line } from "../../components";
import { IconDumbbell, IconLock } from "../../assets/icon";
import styles from "./diary.module.scss";
import styled from "styled-components";
import cx from "classnames";
import { monthStr } from "../../utils/date";

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

        {data[monthStr(month)] &&
          data[monthStr(month)].map((item: IData) => {
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
              ></Line>
            );
          })}
      </main>
    </>
  );
};

export default Diary;
