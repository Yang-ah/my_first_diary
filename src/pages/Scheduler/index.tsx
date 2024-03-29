import { useRecoilValue } from "recoil";
import { IData, dataAtom, onTrackerAtom, thisMonthAtom } from "../../state";
import { CheckBox, Line } from "../../components";
import styles from "./scheduler.module.scss";
import cx from "classnames";
import styled from "styled-components";
import { IconDumbbell, IconLock, IconPlus } from "../../assets/icon";
import { EmojiSmile } from "../../assets/emoji";
import { useMatch, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Add from "./Add";
import { monthStr } from "../../utils/date";

const Scheduler = () => {
  const navigate = useNavigate();
  const addMatch = useMatch("/scheduler/add");
  const data = useRecoilValue(dataAtom);
  const month = useRecoilValue(thisMonthAtom);
  const onTracker = useRecoilValue(onTrackerAtom);

  const clickedAdd = () => navigate("/scheduler/add");
  const goScheduler = () => navigate("/scheduler");

  return (
    <>
      <AddScheduleBtn
        className={styles.addButton}
        layoutId="addPage"
        onClick={clickedAdd}
      >
        <IconPlus />
      </AddScheduleBtn>
      <div className={styles.checkbox}>
        <CheckBox name="tracker">tracker</CheckBox>
      </div>
      <main className={styles.wrap}>
        <Header
          className={cx(styles.header, {
            [styles.tracker]: onTracker.tracker,
          })}
        >
          <p className={styles.date}>date</p>
          <div className={styles.main}>
            <CheckBox className={styles.checkbox} name="plan">
              plan
            </CheckBox>
            <CheckBox className={styles.checkbox} name="work">
              work
            </CheckBox>
          </div>

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
        <section>
          {data[monthStr(month)] &&
            data[monthStr(month)].map((item: IData) => {
              return (
                <Line
                  key={`schedule-${monthStr(month)}-${item.date}
                  -${item.emotion}-${item.exercise}`}
                  date={item.date}
                  month={monthStr(month)}
                  emotion={item.emotion}
                  exercise={item.exercise}
                  planArray={item.schedule.plan}
                  workArray={item.schedule.work}
                />
              );
            })}
        </section>
      </main>
      <AnimatePresence>
        {addMatch && (
          <>
            <Overlay
              className={styles.overlay}
              onClick={goScheduler}
              animate={{ opacity: 1 }}
            />
            <AddPage layoutId="addPage" className={styles.addPage}>
              <Add />
            </AddPage>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const Header = styled.header`
  > p,
  div,
  button {
    background-color: ${(props) => props.theme.PRIMARY_30};
  }
`;

const AddScheduleBtn = styled(motion.button)`
  &:hover {
    background-color: ${(props) => props.theme.PRIMARY_40};
  }
`;

const Overlay = styled(motion.div)``;

const AddPage = styled(motion.div)``;

export default Scheduler;
