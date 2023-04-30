import styled from "styled-components";
import styles from "./line.module.scss";
import cx from "classnames";
import { useRecoilValue } from "recoil";
import { onTrackerAtom, ISchedule } from "../../../state";
import { useEffect, useState } from "react";
import { IconDumbbell, IconLock, IconUnlock } from "../../../assets/icon";
import { useMatch } from "react-router-dom";
import EmojiDropdown from "../../EmojiDropdown";
import Cell from "../../../pages/Scheduler/Cell";

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
  fetchMonthData,
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
  const id = localStorage.getItem("TOKEN") + "";

  const onClickLock = () => setOnLock((cur) => !cur);

  const onChangeDiary = (e: React.FormEvent<HTMLInputElement>) =>
    setNewDiary(e.currentTarget.value);

  const [newDiary, setNewDiary] = useState(diary);
  const [newEmotion, setNewEmotion] = useState(emotion);

  return (
    <LineWrap
      className={cx(className, styles.wrap, {
        [styles.tracker]: onTracker.tracker,
      })}
    >
      <div className={cx(styles.date, "date")}>{date}</div>
      {isDiary && (
        <form className={cx(styles.diaryForm, styles.main, "main")}>
          <input
            className={styles.diaryInput}
            value={newDiary}
            disabled={onLock}
            onChange={onChangeDiary}
            placeholder="오늘의 한 줄 일기를 써보세요. 일기 작성 후 꼭 저장 버튼을 눌러주세요."
          />
          {onLock || (
            <button
              className={cx(styles.diarySubmitButton, "diarySubmitButton")}
            >
              저장
            </button>
          )}
        </form>
      )}

      {!isDiary && (
        <main className={cx(styles.main, "main")}>
          {planArray?.length !== 0 &&
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
          {workArray?.length !== 0 &&
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
          <button className={styles.exercise}>
            {exercise ? <IconDumbbell /> : "-"}
          </button>
          <EmojiDropdown
            stateValue={newEmotion}
            lock={onLock}
            setState={setNewEmotion}
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
    </LineWrap>
  );
};

export default Line;
