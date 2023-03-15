import { useEffect, useState } from "react";
import { onTrackerAtom } from "../../../atom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import styles from "./line.module.scss";
import { useMatch } from "react-router-dom";
import { thisMonthString } from "../../Common/Dates";
import LineCell from "../../../pages/Scheduler/LineCell";
import {
  DateBox,
  MainBox,
  SectionSide,
  SideBox,
  TrackerProps,
} from "../../Common";

const EmojiOptions = ["😊", "😌", "😱", "🤯", "😢"];

const SectionLine = styled.div<TrackerProps>`
  grid-template-columns: ${(props) =>
    props.tracker ? `40px 1fr 120px` : `40px 1fr 38px`};
`;

const Line = (date: Date) => {
  const dataMonth = thisMonthString.toLocaleLowerCase();

  // management state : useState, recoil
  const onTracker = useRecoilValue(onTrackerAtom);

  const [onLock, setLock] = useState(true);
  const changeLock = () => setLock((cur) => !cur);

  const [schedule, setSchedule] = useState({
    plans: [],
    works: [],
    emotion: "",
    diary: "",
    exercise: "·",
  });

  const changeSchedule = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>
  ) => {
    const { value, name } = e.currentTarget;

    if (name === "exercise") {
      value === "♥"
        ? setSchedule((prev) => {
            return { ...prev, [name]: "·" };
          })
        : setSchedule((prev) => {
            return { ...prev, [name]: "♥" };
          });
    }

    setSchedule((prev) => {
      return { ...prev, [name]: value };
    });
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
      .then((json) => json.planner[dataMonth])
      .then((data) => setWholeData(data));

  const setWholeData = (data: any) => {
    const planner = data[date.getDate() - 1];
    setSchedule((prev) => {
      return {
        ...prev,
        ["emotion"]: planner.emotion,
        ["exercise"]: planner.exercise ? "♥" : "·",
        ["diary"]: planner.diary,
        ["plans"]: planner.schedule.plan,
        ["works"]: planner.schedule.work,
      };
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SectionLine
      className={styles.line}
      key={date.getDate()}
      tracker={onTracker ? true : false}
    >
      <DateBox>{date.getDate()}</DateBox>

      {diaryMatch ? (
        <MainBox
          type="text"
          onChange={changeSchedule}
          name="diary"
          placeholder="오늘의 한 줄 일기를 써보세요."
          value={schedule.diary ? schedule.diary : ""}
          disabled={onLock}
        />
      ) : (
        <MainBox as="div">
          {(schedulerMatch || planMatch) &&
            schedule.plans.map((plan) => LineCell(plan, "plan", onLock))}
          {(schedulerMatch || workMatch) &&
            schedule.works.map((work) => LineCell(work, "work", onLock))}
        </MainBox>
      )}

      <SectionSide tracker={onTracker}>
        {onTracker ? (
          <>
            {onLock ? (
              <SideBox>{schedule.emotion}</SideBox>
            ) : (
              <select
                onChange={changeSchedule}
                name="emotion"
                key={schedule.emotion}
                defaultValue={schedule.emotion}
              >
                <option value="none"></option>
                {EmojiOptions.map((emoji) => (
                  <option key={emoji} value={emoji}>
                    {emoji}
                  </option>
                ))}
              </select>
            )}

            <SideBox
              as="input"
              disabled={onLock}
              type="button"
              onClick={changeSchedule}
              value={schedule.exercise}
              name="exercise"
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
