import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { onTrackerAtom, onDiaryAtom, onPlanAtom, onWorkAtom } from "./../atom";
import CheckBox, { Tracker } from "../components/CheckBox";
import { useState } from "react";
import Emojis from "../components/Emojis";

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
    props.tracker ? `40px 1fr 145px` : `40px 1fr 45px`};
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

interface SectionLineProps {
  tracker: boolean;
  lock: boolean;
}

const SectionLine = styled.div<SectionLineProps>`
  width: 100%;
  grid-gap: 5px;
  display: grid;
  grid-template-columns: ${(props) =>
    props.tracker ? `40px 1fr 145px` : `40px 1fr 45px`};
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

const MainBox = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  outline: none;
  padding: 0 10px;
`;

const SectionSide = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(3, 1fr);
`;
export const SideBox = styled.div`
  width: 45px;
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
`;

const LockBox = styled(SideBox)``;

const LineHeader = styled(Header)`
  width: 100%;
  margin-left: 30px;
`;

interface TrackerProps {
  tracker: boolean;
}

function MonthlySchedule() {
  const onTracker = useRecoilValue(onTrackerAtom);
  const onDiary = useRecoilValue(onDiaryAtom);

  function Diary() {
    const [mainContent, mainChange] = useState("");
    const setMain = (e: React.FormEvent<HTMLInputElement>) => {
      mainChange(e.currentTarget.value);
    };
    return (
      <div>
        {onDiary ? (
          <MainBox
            onChange={setMain}
            placeholder="오늘의 한 줄 일기를 써보세요. (최대 47자)"
          />
        ) : (
          <MainBox as="div">{mainContent}</MainBox>
        )}
      </div>
    );
  }

  const [lineLock, setLineLock] = useState(false);

  function Exercise() {
    const [done, setDone] = useState("");
    const doneToggle = () => {
      done == "🖤" ? setDone("·") : setDone("🖤");
    };
    return (
      <SideBox as="input" type="button" onClick={doneToggle} value={done} />
    );
  }

  function Lock() {
    const [lock, setLock] = useState(false);
    const lockToggle = () => {
      setLock((cur) => !cur);
      setLineLock(lock);
    };
    return (
      <SideBox
        as="input"
        type="button"
        onClick={lockToggle}
        value={lock ? "🔒" : "🔓"}
      />
    );
  }

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
          <MainBox as="div">
            <CheckBox />
          </MainBox>
          <SectionSide>
            {onTracker ? <SideBox>😊</SideBox> : null}
            {onTracker ? <SideBox>🏃🏻</SideBox> : null}
            <SideBox>🔒</SideBox>
          </SectionSide>
        </TableHeader>

        <SectionTable>
          {thisDates.map((date: Date) => (
            <SectionLine
              lock={lineLock}
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
                <Lock />
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
