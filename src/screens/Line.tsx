import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { onTrackerAtom } from "../atom";
import CheckBox, { Tracker } from "../components/CheckBox";
import Emojis from "../components/Emojis";
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
import Diary, { MainBox } from "../components/Diary";
import Exercise from "../components/Exercise";

const SectionTable = styled.div`
  width: 100%;
  height: 100%;
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
    props.tracker ? `40px 1fr 100px` : `40px 1fr`};
  grid-gap: 2px;

  div:first-child,
  div:nth-child(2),
  div > div {
    background-color: ${(props) => props.theme.fourthColor};
  }
`;

interface SectionLineProps {
  tracker: boolean;
}

const SectionLine = styled.div<SectionLineProps>`
  width: 100%;
  grid-gap: 2px;
  display: grid;
  grid-template-columns: ${(props) =>
    props.tracker ? `40px 1fr 100px` : `40px 1fr`};
  margin-bottom: 5px;
  height: 40px;
  :last-child {
    margin: 0px;
  }
`;

const DateBox = styled.div`
  border-radius: ${baseRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  background-color: rgba(255, 255, 255, 0.8);
  color: ${(props) => props.theme.thirdColor};
`;

const SectionSide = styled.div`
  display: grid;
  grid-gap: 2px;
  grid-template-columns: repeat(3, 1fr);
`;

export const SideBox = styled.div`
  border-radius: ${baseRadius};

  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 19px;
  color: ${(props) => props.theme.fourthColor};
  span {
    color: ${(props) => props.theme.firstColor};
  }
`;

const LockBox = styled(SideBox)``;

interface TrackerProps {
  tracker: boolean;
}

const AppPage = styled.div`
  position: absolute;
  width: 80%;
  height: 500px;
  background-color: white;
  z-index: 99;
  left: 40px;
  top: 40px;
  display: none;
`;

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
              <SectionSide>
                {onTracker ? <SideBox>😊</SideBox> : null}
                {onTracker ? <SideBox>🏃🏻</SideBox> : null}
                <LockBox>🔒</LockBox>
              </SectionSide>
            </TableHeader>
          </SectionTable>
        </MainContainer>
      </Section>
    </Wrap>
  );
}
export default MonthlySchedule;
