import styled from "styled-components";
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
  SectionHeader,
  MainContainer,
  baseSpace,
  baseRadius,
} from "../components/Common";

import DateLine, { MainBox } from "../components/DateLine";

const SectionTable = styled.div`
  width: 100%;
  height: 95%;
  overflow-y: scroll;
  position: relative;
`;

const AddScheduleBtn = styled(AddBtn)`
  position: absolute;
  bottom: 30px;
  right: 30px;
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

  border-radius: ${baseRadius};
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 19px;
  color: ${(props) => props.theme.thirdColor};
  span {
    color: ${(props) => props.theme.thirdColor};
  }
`;

interface TrackerProps {
  tracker: boolean;
}

// main

function MonthlySchedule() {
  const onTracker = useRecoilValue(onTrackerAtom);

  return (
    <Wrap>
      <AddScheduleBtn>+</AddScheduleBtn>

      <Header>
        <ThemeIcon />
        <p>{`LINE MONTHLY - ${thisMonthString}`}</p>
      </Header>
      <Section>
        <SectionHeader>
          <Tracker />
        </SectionHeader>
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
