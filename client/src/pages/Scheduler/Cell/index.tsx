import styles from "./cell.module.scss";
import styled from "styled-components";
import cx from "classnames";

interface ISchedule {
  content?: string;
  importance: number;
  time?: string;
  with?: string;
  place?: string;
}

interface ICell {
  type: string;
  importance: number;
}
const CellDiv = styled.div<ICell>`
  color: ${(props) =>
    props.type === "plan"
      ? (props) => props.theme.PRIMARY_50
      : (props) => props.theme.SECONDARY_50};

  background-color: ${(props) =>
    props.type === "plan"
      ? (props) => props.theme.PRIMARY_10
      : (props) => props.theme.SECONDARY_10};

  border: 1px solid
    ${(props) =>
      props.type === "plan"
        ? (props) => props.theme.PRIMARY_50
        : (props) => props.theme.SECONDARY_50};
  > .plan1 {
    color: ${(props) => props.theme.PRIMARY_50};
  }
  > .plan2 {
    color: ${(props) => props.theme.PRIMARY_40};
  }
  > .plan3 {
    color: ${(props) => props.theme.PRIMARY_30};
  }
  > .plan4 {
    color: ${(props) => props.theme.PRIMARY_20};
  }
  > .work1 {
    color: ${(props) => props.theme.SECONDARY_50};
  }
  > .work2 {
    color: ${(props) => props.theme.SECONDARY_40};
  }
  > .work3 {
    color: ${(props) => props.theme.SECONDARY_30};
  }
  > .work4 {
    color: ${(props) => props.theme.SECONDARY_20};
  }
`;

const Cell = (schedule: ISchedule, type: string, lock: boolean) => {
  const KEY = `${schedule.content}${schedule.importance}`;

  return (
    <CellDiv
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
    </CellDiv>
  );
};

export default Cell;
