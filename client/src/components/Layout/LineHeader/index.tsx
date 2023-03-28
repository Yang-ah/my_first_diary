import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { CheckBox } from "../../Common";
import Line from "../Line";

// TODO : styles 만들기, scheduler header 꾸미기

const Header = styled.header`
  > .header {
    color: white;

    > li {
      background-color: ${(props) => props.theme.PRIMARY_30};
      border: none;

      > button {
        background-color: ${(props) => props.theme.PRIMARY_30};
        border: none;
        cursor: auto;

        > svg {
          fill: white;
        }
      }
    }

    > .tracker {
      background-color: transparent;
    }
  }
`;

interface ILineHeader {
  className?: string;
}

const LineHeader = ({ className }: ILineHeader) => {
  const location = useLocation();
  const isScheduler = location.pathname.includes("scheduler");
  const isDiary = location.pathname.includes("diary");

  return (
    <Header className={className}>
      {isDiary && <Line date="date" child="" className="header" />}

      {isScheduler && (
        <Line
          date="date"
          child={
            <>
              <CheckBox child="plan" />
              <CheckBox child="work" />
            </>
          }
          className="header"
        />
      )}
    </Header>
  );
};

export default LineHeader;
