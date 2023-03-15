import styled from "styled-components";
import styles from "./list.module.scss";
import { useMatch, useNavigate } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import { onTrackerAtom } from "../../atom";

import SideTracker, { TrackerToggle } from "./Line/SideTracker";
import { thisDates } from "../Common/Dates";
import { SideBox, TrackerProps, SectionSide } from "../Common";

import Line from "./Line/index";
import Add from "../../pages/Scheduler/Add";

const AddScheduleBtn = styled(motion.button)`
  background-color: ${(props) => props.theme.pointColor};
  color: ${(props) => props.theme.fontColor};
`;

const Overlay = styled(motion.div)``;

const AddPage = styled(motion.div)`
  background-color: ${(props) => props.theme.backgroundColor};
`;

const TableHeader = styled.div<TrackerProps>`
  grid-template-columns: ${(props) =>
    props.tracker ? `40px 1fr 120px` : `40px 1fr 38px`};

  div:first-child,
  div:nth-child(2),
  div > div {
    background-color: ${(props) => props.theme.primaryColor};
  }

  // className : styles.date
  > p {
    background-color: ${(props) => props.theme.primaryColor};
  }
`;

// main

const List = () => {
  const addMatch = useMatch("/list/scheduler/add");
  const diaryMatch = useMatch("/list/diary");
  const onTracker = useRecoilValue(onTrackerAtom);

  const navigate = useNavigate();
  const clickedAdd = () => navigate("/list/scheduler/add");
  const goLine = () => navigate("/list/scheduler");

  return (
    <>
      <div className={styles.wrap}>
        {!diaryMatch && (
          <AddScheduleBtn
            className={styles.addButton}
            layoutId="addPage"
            onClick={clickedAdd}
          >
            +
          </AddScheduleBtn>
        )}
        <TrackerToggle />
        <section className={styles.section}>
          <TableHeader
            className={styles.sectionHeader}
            tracker={onTracker ? true : false}
          >
            <p className={styles.date}>DATE</p>
            <div className={styles.mainBox}>
              {!diaryMatch && <SideTracker />}
            </div>

            <SectionSide tracker={onTracker ? true : false}>
              {onTracker && (
                <>
                  <SideBox>
                    <i className="fas fa-smile-wink"></i>
                  </SideBox>
                  <SideBox>
                    <i className="fas fa-running"></i>
                  </SideBox>
                </>
              )}

              <SideBox>
                <i className="fas fa-lock"></i>
              </SideBox>
            </SectionSide>
          </TableHeader>
          {thisDates.map((date) => Line(date))}
        </section>
      </div>

      <AnimatePresence>
        {addMatch && (
          <>
            <Overlay
              className={styles.overlay}
              onClick={goLine}
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
export default List;
