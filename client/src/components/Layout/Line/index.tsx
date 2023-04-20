import styled from "styled-components";
import styles from "./line.module.scss";
import cx from "classnames";
import { useRecoilValue } from "recoil";
import { onTrackerAtom } from "../../../status";
import { useEffect, useState } from "react";
import { IconDumbbell, IconLock, IconUnlock } from "../../../assets/icon";
import { useMatch } from "react-router-dom";
import EmojiDropdown from "../../EmojiDropdown";
import Cell from "../../../pages/Scheduler/Cell";
import { patchDiary } from "../../../api/Diary";

const LineWrap = styled.ul`
  // date
  > li:first-of-type {
    background-color: ${(props) => props.theme.PRIMARY_30};
    color: white;
  }
  > li:nth-of-type(2) {
    border: 1px solid ${(props) => props.theme.PRIMARY_20};
  }
  .diarySubmitButton {
    &:hover {
      background-color: ${(props) => props.theme.PRIMARY_30};
    }
  }
`;

const Li = styled.li`
  svg {
    fill: ${(props) => props.theme.SECONDARY_30};
  }
  button {
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
  plan?: object[];
  work?: object[];
  month?: string;
  // onClick: React.MouseEventHandler<HTMLButtonElement>;
  // onLockMain: any;
}

const Line = ({
  fetchMonthData,
  month = "January",
  date,
  children,
  className,
  diary = "",
  emotion = "",
  exercise = false,
  ...props
}: ILine) => {
  const onTracker = useRecoilValue(onTrackerAtom);
  const isDiary = useMatch("/diary");
  const [onLock, setOnLock] = useState(true);

  const onClickLock = () => setOnLock((cur) => !cur);

  const onChangeDiary = (e: React.FormEvent<HTMLInputElement>) =>
    setNewDiary(e.currentTarget.value);

  const [newDiary, setNewDiary] = useState(diary);
  const [newExercise, setNewExercise] = useState(exercise);
  const [newEmotion, setNewEmotion] = useState(emotion);

  const onSubmitDiary = async (e: any) => {
    e.preventDefault();
    const id = localStorage.getItem("TOKEN") + "";
    const response = await patchDiary({
      id: id,
      month: month,
      date: +date,
      diary: newDiary,
    });

    setNewDiary("");
    setOnLock(true);
    await fetchMonthData();
    alert(response.data);
  };

  useEffect(() => {}, []);

  return (
    <>
      <LineWrap
        className={cx(className, styles.wrap, {
          [styles.tracker]: onTracker.tracker,
        })}
      >
        <li className={styles.date}>{date}</li>
        <li className={styles.main}>
          {isDiary && (
            <form className={styles.diaryForm} onSubmit={onSubmitDiary}>
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
                  onClick={onSubmitDiary}
                >
                  저장
                </button>
              )}
            </form>
          )}
          {/*<Cell importance={3} lock={onLock} />*/}
        </li>

        {onTracker.tracker && (
          <Li className={cx(styles.trackerButtons, "tracker")}>
            <button
              className={styles.exercise}
              onClick={onLock ? undefined : () => setNewExercise((cur) => !cur)}
            >
              {newExercise ? <IconDumbbell /> : "-"}
            </button>
            <EmojiDropdown
              value={emotion}
              lock={onLock}
              onClick={setNewEmotion}
            />

            <button className={styles.lock} onClick={onClickLock}>
              {onLock ? <IconLock /> : <IconUnlock />}
            </button>
          </Li>
        )}

        {onTracker.tracker || (
          <Li
            className={cx(styles.trackerButtons, "tracker", styles.offTracker)}
          >
            <button className={styles.lock} onClick={onClickLock}>
              {onLock ? <IconLock /> : <IconUnlock />}
            </button>
          </Li>
        )}
      </LineWrap>
    </>
  );
};

export default Line;
