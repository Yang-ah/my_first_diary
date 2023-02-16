import styled from "styled-components";
import { baseRadius } from "../../components/Common";

interface ISchedule {
  content?: string;
  importance?: number;
}

const Cell = styled.div`
  width: 100px;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3px;
  border-radius: ${baseRadius};
`;

const FirstCell = styled(Cell)`
  background-color: ${(props) => props.theme.fourthColor};
`;
const SecondCell = styled(Cell)`
  background-color: ${(props) => props.theme.thirdColor};
`;

const ThirdCell = styled(Cell)`
  background-color: ${(props) => props.theme.secondColor};
`;

const FourthCell = styled(Cell)`
  background-color: ${(props) => props.theme.firstColor};
  color: ${(props) => props.theme.fourthColor};
  opacity: 0.8;
`;

const LineCell = (schedule: ISchedule) => {
  const KEY = `${schedule.content}${schedule.importance}`;

  if (schedule.importance === 1) {
    return <FirstCell key={KEY}>{schedule.content}</FirstCell>;
  }
  if (schedule.importance === 2) {
    return <SecondCell key={KEY}>{schedule.content}</SecondCell>;
  }
  if (schedule.importance === 3) {
    return <ThirdCell key={KEY}>{schedule.content}</ThirdCell>;
  }
  if (schedule.importance === 4) {
    return <FourthCell key={KEY}>{schedule.content}</FourthCell>;
  }
};

export default LineCell;
