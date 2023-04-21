import styles from "./cell.module.scss";
import styled from "styled-components";
import cx from "classnames";
import { ISchedule } from "../../../state";
import { deleteSchedule } from "../../../api/Schedule";
import { getUserId } from "../../../hooks";

interface ICell {
  index: number;
  schedule: ISchedule;
  lock: boolean;
  category: string;
  month: string;
  date: number;
}

const Cell = ({ index, schedule, category, month, date, lock }: ICell) => {
  const deleteCell = async () => {
    const response = await deleteSchedule({
      id: getUserId(),
      category,
      index,
      month,
      date,
    });

    alert(response.data);
  };

  return (
    <div className={cx(styles.cell)}>
      <span>{schedule.content}</span>
      <span>{schedule.importance}</span>
      <span>{schedule?.time}</span>
      <span>{schedule?.with}</span>
      <span>{schedule?.place}</span>
      {lock || <button onClick={deleteCell}>x</button>}
    </div>
  );
};

export default Cell;
