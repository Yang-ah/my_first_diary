import styled from "styled-components";
import { baseRadius } from "../../components/Common";
import cx from "classnames";
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
  height: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin-right: 5px;
  border-radius: ${baseRadius};

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

  > p {
    margin-right: 5px;
  }
  > p:last-of-type {
    margin: 0;
  }

  > .stars {
    > i {
      font-size: 22px;
      position: relative;

      > p {
        width: 10px;
        position: absolute;
        top: 7px;
        left: 7px;
        font-size: 10px;
        color: white;
        text-align: center;
      }
    }
  }

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

const LineCell = (schedule: ISchedule, type: string) => {
  const KEY = `${schedule.content}${schedule.importance}`;

  return (
    <Cell key={KEY} type={type} importance={schedule.importance}>
      <p className={cx("stars", `${type}${schedule.importance}`)}>
        <i className="fas fa-star">
          <p>{schedule.importance}</p>
        </i>
      </p>
      {schedule.time && <p>✷ {schedule.time}</p>}
      {schedule.place && <p>@ {schedule.place}</p>}
      {schedule.with && <p>w/ {schedule.with}</p>}
      <p>{schedule.content}</p>
    </Cell>
  );
};

export default LineCell;
