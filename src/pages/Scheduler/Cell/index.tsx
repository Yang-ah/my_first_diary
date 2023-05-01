import styles from "./cell.module.scss";
import styled from "styled-components";
import cx from "classnames";
import { ISchedule } from "../../../state";

interface ICell {
  index: number;
  schedule: ISchedule;
  lock: boolean;
  category: string;
  month: string;
  date: number;
}

const Cell = ({ index, schedule, category, month, date, lock }: ICell) => {
  return (
    <div className={cx(styles.cell)}>
      <span>{schedule.content}</span>
      <span>{schedule.importance}</span>
      <span>{schedule?.time}</span>
      <span>{schedule?.with}</span>
      <span>{schedule?.place}</span>
      {lock || <button>x</button>}
    </div>
  );
};

export default Cell;
