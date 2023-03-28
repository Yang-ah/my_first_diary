import styled from "styled-components";
import styles from "./line.module.scss";
import cx from "classnames";
import { useRecoilValue } from "recoil";
import { onTrackerAtom } from "../../../atom";
import SideTrackers from "./SideTrackers";

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
  child: any;
  className?: string;
}

const Line = ({ date, child, className, ...props }: ILine) => {
  const onTracker = useRecoilValue(onTrackerAtom);

  return (
    <LineWrap
      className={cx(className, styles.wrap, {
        [styles.tracker]: onTracker.tracker,
      })}
    >
      <li className={styles.date}>{date}</li>
      <li className={styles.main}>{child}</li>
      <SideTrackers />
    </LineWrap>
  );
};

export default Line;
