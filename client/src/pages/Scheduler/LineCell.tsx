import styled from "styled-components";
import { baseRadius } from "../../components/Common";

interface ISchedule {
  content: string;
  importance: number;
}

interface ICell {
  type: string;
}

const Cell = styled.div<ICell>`
  width: 100px;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3px;
  border-radius: ${baseRadius};
`;

const FirstCell = styled(Cell)`
  background-color: ${(props) =>
    props.type === "plan"
      ? (props) => props.theme.plan.firstColor
      : (props) => props.theme.work.firstColor};
`;

const SecondCell = styled(Cell)`
  background-color: ${(props) =>
    props.type === "plan"
      ? (props) => props.theme.plan.secondColor
      : (props) => props.theme.work.secondColor};
`;

const ThirdCell = styled(Cell)`
  background-color: ${(props) =>
    props.type === "plan"
      ? (props) => props.theme.plan.thirdColor
      : (props) => props.theme.work.thirdColor};
`;

const FourthCell = styled(Cell)`
  background-color: ${(props) =>
    props.type === "plan"
      ? (props) => props.theme.plan.fourthColor
      : (props) => props.theme.work.fourthColor};
`;

const LineCell = (schedule: ISchedule, type: string) => {
  const KEY = `${schedule.content}${schedule.importance}`;

  if (schedule.importance === 1) {
    return (
      <FirstCell key={KEY} type={type}>
        {schedule.content}
      </FirstCell>
    );
  }
  if (schedule.importance === 2) {
    return (
      <SecondCell key={KEY} type={type}>
        {schedule.content}
      </SecondCell>
    );
  }
  if (schedule.importance === 3) {
    return (
      <ThirdCell key={KEY} type={type}>
        {schedule.content}
      </ThirdCell>
    );
  }
  if (schedule.importance === 4) {
    return (
      <FourthCell key={KEY} type={type}>
        {schedule.content}
      </FourthCell>
    );
  }
};

export default LineCell;
