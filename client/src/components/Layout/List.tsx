import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import { onTrackerAtom } from "../../atom";
import CheckBox, { Tracker } from "../../pages/Scheduler/CheckBox";
import { thisDates } from "../Common/Dates";
import styles from "./list.module.scss";

import {
  AddBtn,
  Wrap,
  DateBox,
  SideBox,
  TrackerProps,
  SectionSide,
  MainBox,
} from "../Common";

import Line from "./Line";
import { useMatch, useNavigate } from "react-router-dom";
import Add from "../../pages/Scheduler/Add";

const AddScheduleBtn = styled(motion(AddBtn))`
  width: 50px;
  height: 50px;
  border-radius: 10px;
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
      <Wrap className={styles.wrap}>
        {!diaryMatch && (
          <AddScheduleBtn
            className={styles.add_button}
            layoutId="addPage"
            onClick={clickedAdd}
          >
            +
          </AddScheduleBtn>
        )}
        <Tracker />
        <section className={styles.section_table}>
          <TableHeader
            className={styles.table_header}
            tracker={onTracker ? true : false}
          >
            <DateBox className={styles.date}>DATE</DateBox>
            <MainBox as="div">{!diaryMatch && <CheckBox />}</MainBox>
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
      </Wrap>

      <AnimatePresence>
        {addMatch && (
          <>
            <Overlay
              className={styles.overlay}
              onClick={goLine}
              animate={{ opacity: 1 }}
            ></Overlay>
            <AddPage layoutId="addPage" className={styles.add_page}>
              <Add />
            </AddPage>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
export default List;
