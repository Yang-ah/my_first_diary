import { useEffect, useState } from "react";
import { onTrackerAtom } from "../atom";
import { DateBox, SectionSide, SideBox } from "./ListLayout";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { useMatch } from "react-router-dom";
import { thisMonthString } from "./Dates";

export const MainBox = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  outline: none;
  padding: 0 10px;
  display: flex;
  align-items: center;
  font-size: 12px;
`;

interface SectionLineProps {
  tracker: boolean;
}

const SectionLine = styled.div<SectionLineProps>`
  width: 100%;
  grid-gap: 2px;
  display: grid;
  grid-template-columns: ${(props) =>
    props.tracker ? `40px 1fr 120px` : `40px 1fr 38px`};
  margin-bottom: 5px;
  height: 40px;
  :last-child {
    margin: 0px;
  }
`;

function ListLine(date: Date) {
  const dataMonth = thisMonthString.toLocaleLowerCase();

  // management state : useState, recoil
  const onTracker = useRecoilValue(onTrackerAtom);
  const [emoji, setEmotion] = useState("");
  const [onLock, setLock] = useState(true);
  const [mainContent, setDiary] = useState("");
  const [exercise, setExercise] = useState("·");

  // change state functions

  const exerciseToggle = () =>
    exercise === "♥" ? setExercise("·") : setExercise("♥");
  const changeLock = () => setLock((cur) => !cur);
  const changeDiary = (e: React.FormEvent<HTMLInputElement>) =>
    setDiary(e.currentTarget.value);

  const changeEmotion = (e: React.FormEvent<HTMLSelectElement>) => {
    setEmotion(e.currentTarget.value);
    console.log(emoji);
  };
  // match
  const diaryMatch = useMatch("/list/diary");

  // fetch data
  const fetchData = () =>
    fetch("http://localhost:4000/api/planner")
      .then((response) => response.json())
      .then((json) => json.planner[dataMonth])
      .then((data) => setWholeData(data));

  const setWholeData = (data: any) => {
    const planner = data[date.getDate() - 1];
    setEmotion(planner.emotion);
    setExercise(planner.exercise ? "♥" : "·");
    setDiary(planner.diary);
    setLock(planner.lock);
  };

  useEffect(() => {
    fetchData();
  }, [emoji]);

  // jsx
  return (
    <SectionLine key={date.getDate()} tracker={onTracker ? true : false}>
      <DateBox>{date.getDate()}</DateBox>

      {diaryMatch ? (
        <MainBox
          type="text"
          onChange={changeDiary}
          placeholder="오늘의 한 줄 일기를 써보세요. (최대 46자)"
          value={mainContent ? mainContent : ""}
          disabled={onLock}
          maxLength={46}
        />
      ) : (
        <MainBox as="div">{mainContent}</MainBox>
      )}

      <SectionSide tracker={onTracker ? true : false}>
        {onTracker ? (
          <select onChange={changeEmotion} key={emoji} defaultValue={emoji}>
            <option value="none"></option>
            <option value="🥰">🥰</option>
          </select>
        ) : null}
        {onTracker ? (
          <SideBox
            as="input"
            disabled={onLock}
            type="button"
            onClick={exerciseToggle}
            value={exercise}
          />
        ) : null}

        <SideBox as="button" onClick={changeLock}>
          {onLock ? (
            <i className="fas fa-lock"></i>
          ) : (
            <i className="fas fa-lock-open"></i>
          )}
        </SideBox>
      </SectionSide>
    </SectionLine>
  );
}
export default ListLine;
