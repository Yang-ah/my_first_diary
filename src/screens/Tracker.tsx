import styled from "styled-components";
import {
  Header,
  Wrap,
  ThemeIcon,
  Section,
  baseRadius,
} from "../components/Common";
import { months } from "../components/Dates";

const TrackerSection = styled(Section)`
  display: grid;
  grid-template-columns: 20px repeat(12, 1fr);
  grid-gap: 5px;
  overflow-y: scroll;
  position: relative;
`;

const Date = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background-color: ${(props) => props.theme.fourthColor};
  border-radius: ${baseRadius};
  color: white;
`;

const Month = styled(Date)`
  height: 20px;
  position: sticky;
  top: 0;
`;

const Trackers = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: ${baseRadius};
`;

const dates = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const Column = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 20px repeat(31, 35px);
  grid-gap: 5px;
`;

function Tracker() {
  return (
    <Wrap>
      <Header>
        <ThemeIcon />
        <p>TRACKER</p>
      </Header>
      <TrackerSection>
        <Column>
          <Month></Month>
          {dates.map((date) => (
            <Date key={date}>{date}</Date>
          ))}
        </Column>
        {months.map((month) => (
          <Column key={month}>
            <Month>{month}</Month>
            {dates.map((date) => (
              <Trackers key={date}></Trackers>
            ))}
          </Column>
        ))}
      </TrackerSection>
    </Wrap>
  );
}

export default Tracker;
