import styled from "styled-components";
import styles from "./line.module.scss";
import cx from "classnames";
import { useRecoilValue } from "recoil";
import { onTrackerAtom } from "../../../atom";
import { useState } from "react";
import { IconDumbbell, IconLock, IconUnlock } from "../../../assets/icon";
import { useMatch } from "react-router-dom";
import EmojiDropdown from "../../EmojiDropdown";

const LineWrap = styled.ul`
  // date
  > li:first-of-type {
    background-color: ${(props) => props.theme.PRIMARY_30};
    color: white;
  }
  > li:nth-of-type(2) {
    border: 1px solid ${(props) => props.theme.PRIMARY_20};
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
  date: number | string;
  children?: any;
  className?: string;
  diary?: string;
  emotion: string;
  exercise: boolean;
  plan?: object[];
  work?: object[];
  // onClick: React.MouseEventHandler<HTMLButtonElement>;
  // onLockMain: any;
}

const Line = ({
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

  // 나중에 submit으로 바꾸기
  const onClickLock = () => {
    setOnLock((cur) => !cur);
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setNewDiary(e.currentTarget.value);
  };

  const [newDiary, setNewDiary] = useState(diary);
  const [newExercise, setNewExercise] = useState(exercise);
  const [newEmotion, setNewEmotion] = useState(emotion);

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
            <input
              className={styles.diaryInput}
              value={newDiary}
              disabled={onLock}
              onChange={onChange}
              placeholder="오늘의 한 줄 일기를 써보세요."
            />
          )}
        </li>

        {onTracker.tracker && (
          <Li className={cx(styles.trackerButtons, "tracker")}>
            <button
              className={styles.exercise}
              onClick={() => setNewExercise((cur) => !cur)}
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
