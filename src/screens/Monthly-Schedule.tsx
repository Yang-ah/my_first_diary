import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { onTrackerAtom } from "./../atom";
import CheckBox, { Tracker } from "../components/CheckBox";
import Emojis from "../components/Emojis";
import { thisDates, thisMonthString } from "../components/Dates";
import { Message, ThemeIcon, Header, Wrap } from "./Monthly-Photo";
import Diary, { MainBox } from "../components/Diary";
import Exercise from "../components/Exercise";

const SectionTable = styled.div`
  width: 700px;
  height: 580px;
  overflow-y: scroll;
`;

const TableHeader = styled.div<TrackerProps>`
  height: 32px;
  display: grid;
  grid-template-columns: ${(props) =>
    props.tracker ? `40px 1fr 100px` : `40px 1fr`};
  grid-gap: 5px;
  margin-bottom: 15px;
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

// main

function MonthlySchedule() {
  const onTracker = useRecoilValue(onTrackerAtom);

  return (
    <Wrap style={{ alignItems: "center" }}>
      <LineHeader>
        <ThemeIcon />
        <p>{`LINE MONTHLY - ${thisMonthString}`}</p>
      </LineHeader>
      <Tracker />

      <section>
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
      </section>
      <Message>yangah.career@gmail.com</Message>
    </Wrap>
  );
}
export default MonthlySchedule;
