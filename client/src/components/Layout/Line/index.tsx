import styled from "styled-components";
import styles from "./line.module.scss";
import cx from "classnames";
import { useRecoilValue } from "recoil";
import { onTrackerAtom } from "../../../atom";
import { useState } from "react";
import { IconDumbbell, IconLock, IconUnlock } from "../../../assets/icon";
import { EmojiSmile } from "../../../assets/emoji";
import { useMatch } from "react-router-dom";

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
  value: any;
  // onClick: React.MouseEventHandler<HTMLButtonElement>;
  // onLockMain: any;
}

const Line = ({ date, children, className, value, ...props }: ILine) => {
  const onTracker = useRecoilValue(onTrackerAtom);

  const isDiary = useMatch("/diary");
  const [onLock, setOnLock] = useState(true);
  const onClickLock = () => {
    setOnLock((cur) => !cur);
  };

  const [diary, setDiary] = useState(value);
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setDiary(e.currentTarget.value);
  };

  return (
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
            value={diary}
            disabled={onLock}
            onChange={onChange}
          />
        )}
      </li>

      {onTracker.tracker && (
        <Li className={cx(styles.trackerButtons, "tracker")}>
          <button className={styles.exercise}>
            <IconDumbbell />
          </button>
          <button>
            <EmojiSmile />
          </button>
          <button className={styles.lock} onClick={onClickLock}>
            {onLock ? <IconLock /> : <IconUnlock />}
          </button>
        </Li>
      )}

      {onTracker.tracker || (
        <Li className={cx(styles.trackerButtons, "tracker", styles.offTracker)}>
          <button className={styles.lock} onClick={onClickLock}>
            {onLock ? <IconLock /> : <IconUnlock />}
          </button>
        </Li>
      )}
    </LineWrap>
  );
};

export default Line;
