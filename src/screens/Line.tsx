import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import { onTrackerAtom } from "../atom";
import CheckBox, { Tracker } from "../components/CheckBox";
import { thisDates, thisMonthString } from "../components/Dates";

import {
  Header,
  AddBtn,
  Wrap,
  ThemeIcon,
  Section,
  MainContainer,
  baseSpace,
  baseRadius,
} from "../components/Common";

import DateLine, { MainBox } from "../components/DateLine";
import { Outlet, useMatch, useNavigate } from "react-router-dom";

const SectionTable = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  position: relative;
  margin-bottom: 25px;
`;

const AddScheduleBtn = styled(motion(AddBtn))`
  position: absolute;
  bottom: 5px;
  right: 20px;
  z-index: 100;
  width: 50px;
  height: 50px;
  font-size: 25px;
  border-radius: ${baseRadius};
`;

const TableHeader = styled.div<TrackerProps>`
  width: 100%;
  height: 32px;
  position: sticky;
  margin-bottom: ${baseSpace};
  top: 0;
  display: grid;
  grid-template-columns: ${(props) =>
    props.tracker ? `40px 1fr 120px` : `40px 1fr 40px`};
  grid-gap: 2px;

  div:first-child,
  div:nth-child(2),
  div > div {
    background-color: ${(props) => props.theme.thirdColor};
  }
`;

export const DateBox = styled.div`
  width: 100%;
  border-radius: ${baseRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  background-color: ${(props) => props.theme.thirdColor};
`;

export const SectionSide = styled.div<TrackerProps>`
  display: grid;
  grid-gap: 2px;
  grid-template-columns: ${(props) =>
    props.tracker ? `repeat(3, 1fr)` : `1fr`};
`;

export const SideBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${baseRadius};
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  color: ${(props) => props.theme.firstColor};
  cursor: pointer;
`;

interface TrackerProps {
  tracker: boolean;
}

const Overlay = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: rgba(1, 1, 1, 0.7);
  position: absolute;
  z-index: 200;
  top: -40px;
  opacity: 0;
`;

const AddPage = styled(motion.div)`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.theme.fourthColor};
  position: absolute;
  z-index: 300;
  top: 120px;
  border-radius: ${baseRadius};
`;

// main

function MonthlySchedule() {
  const addMatch = useMatch("/line/add");
  const onTracker = useRecoilValue(onTrackerAtom);
  const navigate = useNavigate();

  const clickedAdd = () => navigate("/line/add");
  const goLine = () => navigate("/line");

  console.log(addMatch);

  return (
    <Wrap>
      <AddScheduleBtn layoutId="addPage" onClick={clickedAdd}>
        +
      </AddScheduleBtn>
      <AnimatePresence>
        {addMatch ? (
          <>
            <Overlay onClick={goLine} animate={{ opacity: 1 }}></Overlay>
            <AddPage layoutId="addPage">
              <Outlet />
            </AddPage>
          </>
        ) : null}
      </AnimatePresence>

      <Header>
        <ThemeIcon />
        <p>{`LINE MONTHLY - ${thisMonthString}`}</p>
      </Header>
      <Section>
        <Tracker />
        <MainContainer>
          <SectionTable>
            <TableHeader tracker={onTracker ? true : false}>
              <DateBox>DATE</DateBox>
              <MainBox as="div">
                <CheckBox />
              </MainBox>
              <SectionSide tracker={onTracker ? true : false}>
                {onTracker ? (
                  <SideBox>
                    <i className="fas fa-smile-wink"></i>
                  </SideBox>
                ) : null}
                {onTracker ? (
                  <SideBox>
                    <i className="fas fa-running"></i>
                  </SideBox>
                ) : null}
                <SideBox>
                  <i className="fas fa-lock"></i>
                </SideBox>
              </SectionSide>
            </TableHeader>
            {thisDates.map((date) => DateLine(date.getDate()))}
          </SectionTable>
        </MainContainer>
      </Section>
    </Wrap>
  );
}
export default MonthlySchedule;
