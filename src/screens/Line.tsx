import styled from "styled-components";
import { motion } from "framer-motion";
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
import { useState } from "react";
import Add from "../components/Add";

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
  background-color: ${(props) => props.theme.fourthColor};
  opacity: 0.8;
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
    background-color: ${(props) => props.theme.fourthColor};
  }
`;

export const DateBox = styled.div`
  width: 100%;
  border-radius: ${baseRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  background-color: rgba(255, 255, 255, 0.8);
  color: ${(props) => props.theme.thirdColor};
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
  color: ${(props) => props.theme.thirdColor};
  span {
    color: ${(props) => props.theme.thirdColor};
  }
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddPage = styled.div`
  width: 300px;
  height: 300px;
  background-color: white;
`;

// main

function MonthlySchedule() {
  const onTracker = useRecoilValue(onTrackerAtom);
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);

  return (
    <Wrap>
      {!clicked ? (
        <AddScheduleBtn layoutId="addPage" onClick={toggleClicked}>
          +
        </AddScheduleBtn>
      ) : null}
      {clicked ? (
        <Overlay layoutId="addPage">
          <AddPage>
            <Add />
          </AddPage>
        </Overlay>
      ) : null}

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
