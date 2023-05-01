import styles from "./cell.module.scss";
import styled from "styled-components";
import cx from "classnames";
import { ISchedule } from "../../../state";
import { IconStar } from "../../../assets/icon";

interface ICell {
  index: number;
  schedule: ISchedule;
  lock: boolean;
  category: string;
  month: string;
  date: number;
}

const Wrap = styled.div`
  &.plan1 {
    svg {
      fill: ${(props) => props.theme.PRIMARY_10};
    }
  }
  &.plan2 {
    svg {
      fill: ${(props) => props.theme.PRIMARY_20};
    }
  }
  &.plan3 {
    svg {
      fill: ${(props) => props.theme.PRIMARY_30};
    }
  }
  &.plan4 {
    svg {
      fill: ${(props) => props.theme.PRIMARY_40};
    }
  }
  &.work1 {
    svg {
      fill: ${(props) => props.theme.SECONDARY_10};
    }
  }
  &.work2 {
    svg {
      fill: ${(props) => props.theme.SECONDARY_20};
    }
  }
  &.work3 {
    svg {
      fill: ${(props) => props.theme.SECONDARY_30};
    }
  }
  &.work4 {
    svg {
      fill: ${(props) => props.theme.SECONDARY_40};
    }
  }
`;

const Cell = ({ index, schedule, category, month, date, lock }: ICell) => {
  return (
    <Wrap className={cx(styles.cell, `${category}${schedule.importance}`)}>
      <div className={styles.front}>
        <div className={styles.starWrap}>
          <span>{schedule.importance}</span>
          <IconStar />
        </div>
        <span>{schedule.content}</span>
        {lock || <button>x</button>}
      </div>
      <div className={styles.back}>
        <p className={styles.time}>@{schedule?.time}</p>
        <p className={styles.with}>w/{schedule?.with}</p>
        <p className={styles.place}>{schedule?.place}</p>
      </div>
    </Wrap>
  );
};

export default Cell;
