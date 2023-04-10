import { useRecoilState, useRecoilValue } from "recoil";
import { getDataSelector, onTrackerAtom, thisMonthAtom } from "../../atom";
import { Line } from "../../components";
import { year } from "../../hooks";
import styles from "./scheduler.module.scss";
import { useState } from "react";
import cx from "classnames";
import styled from "styled-components";
import { IconDumbbell, IconLock } from "../../assets/icon";
import { EmojiSmile } from "../../assets/emoji";
import { useMatch, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Add from "./Add";

const Header = styled.header`
  > p,
  div,
  button {
    background-color: ${(props) => props.theme.PRIMARY_30};
  }
`;

const AddScheduleBtn = styled(motion.button)`
  background-color: ${(props) => props.theme.PRIMARY_30};
  color: ${(props) => props.theme.PRIMARY_50};
`;

const Overlay = styled(motion.div)``;

const AddPage = styled(motion.div)`
  background-color: ${(props) => props.theme.PRIMARY_10};
`;

const Scheduler = () => {
  const addMatch = useMatch("/scheduler/add");
  const navigate = useNavigate();

  const onTracker = useRecoilValue(onTrackerAtom);
  const [data, setData] = useRecoilState(getDataSelector); // 비동기

  const month = useRecoilValue(thisMonthAtom);
  const monthStr = new Date(year, month, 1).toLocaleString("en-US", {
    month: "long",
  });

  const clickedAdd = () => navigate("/scheduler/add");
  const goScheduler = () => navigate("/scheduler");

  return (
    <>
      <main className={styles.wrap}>
        <AddScheduleBtn
          className={styles.addButton}
          layoutId="addPage"
          onClick={clickedAdd}
        ></AddScheduleBtn>
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

        {data[monthStr] &&
          data[monthStr].map((item) => {
            return (
              <Line
                key={"diary" + item.date}
                date={item.date}
                emotion={item.emotion}
                exercise={item.exercise}
                plan={item.schedule.plan}
                work={item.schedule.work}
              ></Line>
            );
          })}
      </main>
      <AnimatePresence>
        {addMatch && (
          <>
            <Overlay
              className={styles.overlay}
              onClick={goScheduler}
              animate={{ opacity: 1 }}
            ></Overlay>
            <AddPage layoutId="addPage" className={styles.addPage}>
              <Add />
            </AddPage>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Scheduler;
