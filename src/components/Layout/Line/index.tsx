import styled from "styled-components";
import styles from "./line.module.scss";
import cx from "classnames";
import { useRecoilValue } from "recoil";
import { onTrackerAtom, ISchedule } from "../../../state";
import { useState } from "react";
import { IconDumbbell, IconLock, IconUnlock } from "../../../assets/icon";
import { useMatch } from "react-router-dom";
import EmojiDropdown from "../../EmojiDropdown";
import Cell from "../../../pages/Scheduler/Cell";
import { Toast } from "../../Common";

const LineWrap = styled.section`
  .date {
    background-color: ${(props) => props.theme.PRIMARY_30};
    color: white;
  }
  .main {
    border: 1px solid ${(props) => props.theme.PRIMARY_20};
  }
  .diarySubmitButton {
    &:hover {
      background-color: ${(props) => props.theme.PRIMARY_30};
      color: white;
    }
  }
`;

const TrackerWrap = styled.article`
  svg {
    fill: ${(props) => props.theme.SECONDARY_30};
  }
  > button {
    border: 1px solid ${(props) => props.theme.PRIMARY_20};
  }
`;

interface ILine {
  fetchMonthData?: any;
  date: number | string;
  children?: any;
  className?: string;
  diary?: string;
  emotion: string;
  exercise: boolean;
  planArray?: ISchedule[];
  workArray?: ISchedule[];
  month: string;
  // onClick: React.MouseEventHandler<HTMLButtonElement>;
  // onLockMain: any;
}

const Line = ({
  month = "January",
  date,
  className,
  diary = "",
  emotion = "",
  exercise = false,
  planArray,
  workArray,
}: ILine) => {
  const onTracker = useRecoilValue(onTrackerAtom);
  const isDiary = useMatch("/diary");
  const [onLock, setOnLock] = useState(true);
  const [newDiary, setNewDiary] = useState(diary);
  const [newEmotion, setNewEmotion] = useState(emotion);
  const [newExercise, setNewExercise] = useState(exercise);
  const [toastMessage, setToastMessage] = useState("");
  const [onToast, setOnToast] = useState(false);

  const onClickLock = () => setOnLock((cur) => !cur);
  const onClickDiary = () => {
    setOnLock(true);
  };
  const onClickExercise = () => {
    if (onLock) {
      return;
    }
    setToastMessage(
      `${date} ${month.slice(0, 3)} 운동 기록을 변경하였습니다. :)`
    );
    setNewExercise((cur) => !cur);
    setOnLock(true);
    showToast();
  };

  const onChangeDiary = (e: React.FormEvent<HTMLInputElement>) =>
    setNewDiary(e.currentTarget.value);

  const onChangeEmotion = (selectedEmotion: string) => {
    setNewEmotion(selectedEmotion);
    setToastMessage(
      `${date} ${month.slice(0, 3)} 감정 기록을 변경하였습니다. :)`
    );
    showToast();
  };

  const showToast = () => {
    setOnToast(true);
    const timer = setTimeout(() => {
      setOnToast(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  };

  const fakeSchedule = {
    content: "플랜플랜플스케줄이에요",
    importance: 1,
    time: "15:33",
    with: "엄마랑",
    place: "교보문고",
  };
  const fakeSchedule2 = {
    content: "플랜 스케줄이에요.",
    importance: 2,
    time: "15:33",
    with: "엄마랑랑아빠랑",
    place: "교보문고교보문고",
  };

  return (
    <LineWrap
      className={cx(className, styles.wrap, {
        [styles.tracker]: onTracker.tracker,
      })}
    >
      <div className={cx(styles.date, "date")}>{date}</div>
      {isDiary && (
        <div className={cx(styles.diaryForm, styles.main, "main")}>
          <input
            className={styles.diaryInput}
            value={newDiary}
            disabled={onLock}
            onChange={onChangeDiary}
            placeholder="오늘의 한 줄 일기를 써보세요. 일기 작성 후 꼭 저장 버튼을 눌러주세요 :)"
          />
          {onLock || (
            <button
              className={cx(styles.diarySubmitButton, "diarySubmitButton")}
              onClick={onClickDiary}
              type="button"
            >
              저장
            </button>
          )}
        </div>
      )}

      {!isDiary && (
        <main className={cx(styles.main, "main")}>
          <Cell
            index={1}
            schedule={fakeSchedule}
            lock={onLock}
            category="work"
            month={month}
            date={+date}
          />
          <Cell
            index={1}
            schedule={fakeSchedule2}
            lock={onLock}
            category="work"
            month={month}
            date={+date}
          />
          {onTracker.plan &&
            planArray?.length !== 0 &&
            planArray?.map((plan, index) => {
              return (
                <Cell
                  key={`plan-${index}-${plan.importance}-${plan.content}`}
                  index={index}
                  schedule={plan}
                  lock={onLock}
                  category="plan"
                  month={month}
                  date={+date}
                />
              );
            })}
          {onTracker.work &&
            workArray?.length !== 0 &&
            workArray?.map((work, index) => {
              return (
                <Cell
                  key={`work-${index}-${work.importance}-${work.content}`}
                  index={index}
                  schedule={work}
                  lock={onLock}
                  category="work"
                  month={month}
                  date={+date}
                />
              );
            })}
        </main>
      )}

      {onTracker.tracker && (
        <TrackerWrap className={cx(styles.trackerButtons, "tracker")}>
          <button className={styles.exercise} onClick={onClickExercise}>
            {newExercise ? <IconDumbbell /> : "-"}
          </button>
          <EmojiDropdown
            stateValue={newEmotion}
            lock={onLock}
            setLock={setOnLock}
            setState={onChangeEmotion}
          />

          <button className={styles.lock} onClick={onClickLock}>
            {onLock ? <IconLock /> : <IconUnlock />}
          </button>
        </TrackerWrap>
      )}

      {onTracker.tracker || (
        <TrackerWrap
          className={cx(styles.trackerButtons, "tracker", styles.offTracker)}
        >
          <button className={styles.lock} onClick={onClickLock}>
            {onLock ? <IconLock /> : <IconUnlock />}
          </button>
        </TrackerWrap>
      )}

      <Toast className={cx(styles.toast, { [styles.onToast]: onToast })}>
        {toastMessage}
      </Toast>
    </LineWrap>
  );
};

export default Line;
