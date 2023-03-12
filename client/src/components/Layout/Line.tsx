import { useEffect, useState } from "react";
import { onTrackerAtom } from "../../atom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { useMatch } from "react-router-dom";
import { thisMonthString } from "../Common/Dates";
import LineCell from "../../pages/Scheduler/LineCell";
import { DateBox, MainBox, SectionSide, SideBox } from "../Common";

interface SectionLineProps {
  tracker: boolean;
}

const SectionLine = styled.div<SectionLineProps>`
  width: 100%;
  grid-gap: 5px;
  display: grid;
  grid-template-columns: ${(props) =>
    props.tracker ? `40px 1fr 120px` : `40px 1fr 38px`};
  margin-bottom: 5px;
  height: 40px;

  :last-child {
    margin: 0px;
  }
`;

const Line = (date: Date) => {
  const dataMonth = thisMonthString.toLocaleLowerCase();

  // management state : useState, recoil
  const onTracker = useRecoilValue(onTrackerAtom);
  const [emoji, setEmotion] = useState("");
  const [onLock, setLock] = useState(true);
  const [Diary, setDiary] = useState("");
  const [exercise, setExercise] = useState("·");
  const [plans, setPlans] = useState([]);
  const [works, setWorks] = useState([]);

  // change state functions
  const exerciseToggle = () =>
    exercise === "♥" ? setExercise("·") : setExercise("♥");
  const changeLock = () => setLock((cur) => !cur);
  const changeDiary = (e: React.FormEvent<HTMLInputElement>) =>
    setDiary(e.currentTarget.value);

  const changeEmotion = (e: React.FormEvent<HTMLSelectElement>) => {
    setEmotion(e.currentTarget.value);
    // console.log(emoji);
  };

  // match
  const diaryMatch = useMatch("/list/diary");
  const schedulerMatch = useMatch("/list/scheduler");
  const planMatch = useMatch("/list/scheduler/plan");
  const workMatch = useMatch("/list/scheduler/work");

  // fetch data
  const fetchData = () =>
    fetch("http://localhost:4000/api/planner")
      .then((response) => response.json())
      .then((json) => json.planner[dataMonth]);
  //  .then((data) => setWholeData(data));

  /*
  const setWholeData = (data: any) => {
    const planner = data[date.getDate() - 1];
    setEmotion(planner.emotion);
    setExercise(planner.exercise ? "♥" : "·");
    setDiary(planner.diary);
    setLock(planner.lock);
    setPlans(planner.schedule.plan);
    setWorks(planner.schedule.work);
  };*/

  useEffect(() => {
    fetchData();
  }, []);

  // tsx
  return (
    <SectionLine key={date.getDate()} tracker={onTracker ? true : false}>
      <DateBox>{date.getDate()}</DateBox>

      {diaryMatch ? (
        <MainBox
          type="text"
          onChange={changeDiary}
          placeholder="오늘의 한 줄 일기를 써보세요. (최대 46자)"
          value={Diary ? Diary : ""}
          disabled={onLock}
          maxLength={46}
        />
      ) : (
        <MainBox as="div">
          {(schedulerMatch || planMatch) &&
            plans.map((plan) => LineCell(plan, "plan"))}
          {(schedulerMatch || workMatch) &&
            works.map((work) => LineCell(work, "work"))}
        </MainBox>
      )}

      <SectionSide tracker={onTracker ? true : false}>
        {onTracker ? (
          <>
            {onLock ? (
              <SideBox>{emoji}</SideBox>
            ) : (
              <select onChange={changeEmotion} key={emoji} defaultValue={emoji}>
                <option value="none"></option>
                <option value="🥰">🥰</option>
              </select>
            )}

            <SideBox
              as="input"
              disabled={onLock}
              type="button"
              onClick={exerciseToggle}
              value={exercise}
            />
          </>
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
};
export default Line;
