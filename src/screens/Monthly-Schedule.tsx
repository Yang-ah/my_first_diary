import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { onTrackerAtom } from "./../atom";
import CheckBox, { Tracker } from "../components/CheckBox";
import Emojis from "../components/Emojis";
import { thisDates, thisMonthString } from "../components/Dates";
import { ThemeIcon, Header, Wrap, AddBtn } from "./Monthly-Photo";
import Diary, { MainBox } from "../components/Diary";
import Exercise from "../components/Exercise";

const SectionTable = styled.div`
  margin-bottom: 15px;
  width: 700px;
  height: 580px;
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
  position: sticky;
  margin-bottom: 15px;
  width: 100%;
  top: 0;
  height: 32px;
  display: grid;
  grid-template-columns: ${(props) =>
    props.tracker ? `40px 1fr 100px` : `40px 1fr`};
  grid-gap: 5px;
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
  grid-gap: 5px;
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
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  background-color: rgba(255, 255, 255, 0.8);
  color: ${(props) => props.theme.thirdColor};
`;

const SectionSide = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(2, 1fr);
`;

export const SideBox = styled.div`
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border: none;
  outline: none;
  font-size: 19px;
  color: ${(props) => props.theme.fourthColor};
  span {
    color: ${(props) => props.theme.firstColor};
  }
  :last-child {
    margin-right: 5px;
  }
`;

const LineHeader = styled(Header)`
  width: 100%;
  margin-left: 30px;
`;

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
    <Wrap style={{ alignItems: "center" }}>
      <AddScheduleBtn>+</AddScheduleBtn>
      <AppPage>
        <div>카테고리 선택</div>
        <div>제목</div>
        <div>시간</div>
        <div>장소</div>
        <div>중요도5단계를 range로</div>
      </AppPage>
      <LineHeader>
        <ThemeIcon />
        <p>{`LINE MONTHLY - ${thisMonthString}`}</p>
      </LineHeader>
      <Tracker />

      <SectionTable>
        <TableHeader tracker={onTracker ? true : false}>
          <DateBox>DATE</DateBox>
          <MainBox as="div">
            <CheckBox />
          </MainBox>
          <SectionSide>
            {onTracker ? <SideBox>😊</SideBox> : null}
            {onTracker ? <SideBox>🏃🏻</SideBox> : null}
          </SectionSide>
        </TableHeader>
        {thisDates.map((date: Date) => (
          <SectionLine
            tracker={onTracker ? true : false}
            key={`${date.toLocaleString("en-US", {
              month: "short",
            })}${date.getDate()}`}
          >
            <DateBox>{date.getDate()}</DateBox>
            <Diary />
            <SectionSide>
              {onTracker ? <Emojis /> : null}
              {onTracker ? <Exercise /> : null}
            </SectionSide>
          </SectionLine>
        ))}
      </SectionTable>
    </Wrap>
  );
}
export default MonthlySchedule;
