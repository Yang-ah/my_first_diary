import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { onTrackerAtom, onDiaryAtom, onPlanAtom, onWorkAtom } from "./../atom";
import CheckBox, { Tracker } from "../components/CheckBox";

import {
  thisDates,
  thisMonthString,
  Message,
  ThemeIcon,
  Header,
} from "./Monthly-Photo";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 760px;
  height: 720px;
  color: ${(props) => props.theme.firstColor};
  background-color: ${(props) => props.theme.fifthColor};
  align-self: center;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.fourthColor};
`;

const TableHeader = styled.div<TrackerProps>`
  height: 32px;
  display: grid;
  grid-template-columns: ${(props) =>
    props.tracker ? `40px 1fr 90px` : `40px 1fr 30px`};
  grid-gap: 5px;
  margin-bottom: 10px;
  padding-right: 17px;
  div:first-child,
  div:nth-child(2),
  div > div {
    background-color: ${(props) => props.theme.fourthColor};
  }
`;

const SectionTable = styled.div`
  width: 690px;
  height: 540px;
  overflow-y: scroll;
`;

const SectionLine = styled.div<TrackerProps>`
  width: 100%;
  grid-gap: 5px;
  display: grid;
  grid-template-columns: ${(props) =>
    props.tracker ? "40px 1fr 90px" : "40px 1fr 30px"};
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

const MainBox = styled.div`
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
`;

const SectionSide = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(3, 1fr);
`;

const SideBox = styled.input`
  width: 26px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 3px;
  border: none;
  outline: none;
`;

const LockBox = styled(SideBox)`
  cursor: pointer;
`;

const LineHeader = styled(Header)`
  width: 100%;
  margin-left: 30px;
`;

interface TrackerProps {
  tracker: boolean;
}

function MonthlySchedule() {
  const onTracker = useRecoilValue(onTrackerAtom);

  return (
    <Wrap>
      <LineHeader>
        <ThemeIcon />
        <p>{`LINE MONTHLY - ${thisMonthString}`}</p>
      </LineHeader>
      <Tracker />

      <section>
        <TableHeader tracker={onTracker ? true : false}>
          <DateBox>DATE</DateBox>
          <MainBox>
            <CheckBox />
          </MainBox>
          <SectionSide>
            {onTracker ? <SideBox as="div">😊</SideBox> : null}
            {onTracker ? <SideBox as="div">🏃🏻</SideBox> : null}
            <SideBox as="div">🔒</SideBox>
          </SectionSide>
        </TableHeader>

        <SectionTable>
          {thisDates.map((date: Date) => (
            <SectionLine
              tracker={onTracker ? true : false}
              key={`${date.toLocaleString("en-US", {
                month: "short",
              })}${date.getDate()}`}
            >
              <DateBox>{date.getDate()}</DateBox>
              <MainBox></MainBox>
              <SectionSide>
                {onTracker ? <SideBox /> : null}
                {onTracker ? <SideBox /> : null}
                <LockBox as="button">🔒</LockBox>
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
