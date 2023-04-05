import styled from "styled-components";
import styles from "./line.module.scss";
import cx from "classnames";
import { useRecoilValue } from "recoil";
import { onTrackerAtom } from "../../../atom";
import SideTrackers from "./SideTrackers";
import { useState } from "react";
import { IconLock, IconUnlock } from "../../../assets/icon";
import { useMatch } from "react-router-dom";
import DiaryMain from "../../../pages/Diary/DiaryMain.tsx";

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

interface ILine {
  date: number | string;
  children?: any;
  className?: string;
}

const Line = ({ date, children, className, ...props }: ILine) => {
  const isDiary = useMatch("/diary");

  const onTracker = useRecoilValue(onTrackerAtom);
  const [onLock, setLock] = useState(true);
  const [diary, setDiary] = useState("");

  const onClickLock = () => setLock((cur) => !cur);

  const onChangeDiary = (e: React.FormEvent<HTMLInputElement>) => {
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
        {children}
        {isDiary && (
          <DiaryMain onChange={onChangeDiary} value={diary} disabled={onLock} />
        )}
      </li>
      <SideTrackers>
        <button
          className={styles.lock}
          onClick={onClickLock}
          value={onLock + ""}
        >
          {onLock ? <IconLock /> : <IconUnlock />}
        </button>
      </SideTrackers>
    </LineWrap>
  );
};

export default Line;
