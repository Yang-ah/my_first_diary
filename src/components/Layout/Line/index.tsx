import styled from "styled-components";
import styles from "./line.module.scss";
import cx from "classnames";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { onTrackerAtom, ISchedule, dataAtom } from "../../../state";
import { useState } from "react";
import { IconDumbbell, IconLock, IconUnlock } from "../../../assets/icon";
import { useMatch } from "react-router-dom";
import EmojiDropdown from "../../EmojiDropdown";
import Cell from "../../../pages/Scheduler/Cell";
import { Toast } from "../../Common";

interface ILine {
  date: number | string;
  className?: string;
  diary?: string;
  emotion: string;
  exercise: boolean;
  planArray?: ISchedule[];
  workArray?: ISchedule[];
  month: string;
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
  const setData = useSetRecoilState(dataAtom);

  const onClickLock = () => setOnLock((cur) => !cur);

  const showToast = () => {
    setOnToast(true);
    const timer = setTimeout(() => {
      setOnToast(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  };

  const onSubmitDiary = (
    e: React.FormEvent<HTMLButtonElement | HTMLFormElement>
  ) => {
    e.preventDefault();
    setToastMessage(
      `${date} ${month.slice(0, 3)} 다이어리를 변경하였습니다. :)`
    );
    showToast();
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
    setData((prevData) => {
      const newMonthData = [...prevData[month]];
      const newData = {
        ...newMonthData[+date - 1],
        exercise: !newExercise,
      };
      newMonthData[+date - 1] = newData;
      const newDataObj = { ...prevData, [month]: newMonthData };
      return newDataObj;
    });
  };

  const onChangeDiary = (e: React.FormEvent<HTMLInputElement>) =>
    setNewDiary(e.currentTarget.value);

  const onChangeEmotion = (selectedEmotion: string) => {
    setNewEmotion(selectedEmotion);
    setToastMessage(
      `${date} ${month.slice(0, 3)} 감정 기록을 변경하였습니다. :)`
    );
    setOnLock(true);
    setData((prevData) => {
      const newMonthData = [...prevData[month]];
      const newData = {
        ...newMonthData[+date - 1],
        emotion: selectedEmotion,
      };
      newMonthData[+date - 1] = newData;
      const newDataObj = { ...prevData, [month]: newMonthData };
      return newDataObj;
    });
  };

  return (
    <LineWrap
      className={cx(className, styles.wrap, {
        [styles.tracker]: onTracker.tracker,
      })}
    >
      <div className={cx(styles.date, "date")}>{date}</div>
      {isDiary && (
        <form
          onSubmit={onSubmitDiary}
          className={cx(styles.diaryForm, styles.main, "main")}
        >
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
              onClick={onSubmitDiary}
              type="submit"
            >
              저장
            </button>
          )}
        </form>
      )}

      {!isDiary && (
        <main className={cx(styles.main, "main")}>
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
          <button
            className={cx(styles.exercise, { [styles.onLock]: onLock })}
            onClick={onClickExercise}
          >
            {newExercise ? <IconDumbbell /> : "-"}
          </button>

          <EmojiDropdown
            className={cx({ [styles.onLock]: onLock })}
            stateValue={newEmotion}
            lock={onLock}
            setState={onChangeEmotion}
          />

          <button className={cx(styles.lock)} onClick={onClickLock}>
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

export default Line;
