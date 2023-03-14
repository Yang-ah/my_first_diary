import styled from "styled-components";
import cx from "classnames";
import styles from "./lineCell.module.scss";

interface ISchedule {
  content: string;
  importance: number;
  time: string;
  with: string;
  place: string;
}

interface ICell {
  type: string;
  importance: number;
}

const Cell = styled.div<ICell>`
  color: ${(props) =>
    props.type === "plan"
      ? (props) => props.theme.plan.firstColor
      : (props) => props.theme.work.firstColor};

  background-color: ${(props) =>
    props.type === "plan"
      ? (props) => props.theme.plan.backgroundColor
      : (props) => props.theme.work.backgroundColor};

  border: 1px solid
    ${(props) =>
      props.type === "plan"
        ? (props) => props.theme.plan.firstColor
        : (props) => props.theme.work.firstColor};

  > .plan1 {
    color: ${(props) => props.theme.plan.firstColor};
  }
  > .plan2 {
    color: ${(props) => props.theme.plan.secondColor};
  }
  > .plan3 {
    color: ${(props) => props.theme.plan.thirdColor};
  }
  > .plan4 {
    color: ${(props) => props.theme.plan.fourthColor};
  }

  > .work1 {
    color: ${(props) => props.theme.work.firstColor};
  }
  > .work2 {
    color: ${(props) => props.theme.work.secondColor};
  }
  > .work3 {
    color: ${(props) => props.theme.work.thirdColor};
  }
  > .work4 {
    color: ${(props) => props.theme.work.fourthColor};
  }
`;

const LineCell = (schedule: ISchedule, type: string, lock: boolean) => {
  const KEY = `${schedule.content}${schedule.importance}`;

  return (
    <Cell
      key={KEY}
      type={type}
      importance={schedule.importance}
      className={cx(styles.cell, styles.parentCell)}
    >
      {schedule.time || schedule.place || schedule.with ? (
        <>
          <p className={cx(styles.stars, `${type}${schedule.importance}`)}>
            <i className="fas fa-star">
              <p>{schedule.importance}</p>
            </i>
          </p>
          {schedule.time && <p>✷{schedule.time}</p>}
          {schedule.place && <p>@{schedule.place}</p>}
          <p className={styles.deleteButton}>{lock || "x"}</p>
          <div className={cx(styles.cell, styles.coverCell)}>
            <p>{schedule.content}</p>
            {schedule.with && <p>w/{schedule.with}</p>}
            <p className={styles.deleteButton}>{lock || "x"}</p>
          </div>
        </>
      ) : (
        <>
          <p className={cx(styles.stars, `${type}${schedule.importance}`)}>
            <i className="fas fa-star">
              <p>{schedule.importance}</p>
            </i>
          </p>
          <p>{schedule.content}</p>
          <p className={styles.deleteButton}>{lock || "x"}</p>
        </>
      )}
    </Cell>
  );
};

export default LineCell;
