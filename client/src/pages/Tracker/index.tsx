import { useEffect, useState } from "react";
import styled from "styled-components";
import { Wrap, Section, baseRadius } from "../../components/Common";
import { CheckContainer } from "../Scheduler/CheckBox";

const CheckHeader = styled.header`
  width: 100%;
  padding: 0 15px 5px 0;

  > div {
    justify-content: flex-end;
  }
`;

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
  background-color: ${(props) => props.theme.thirdColor};
  border-radius: ${baseRadius};
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
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    font-size: 18px;
  }
  > div:first-of-type {
    margin-right: 3px;
  }
`;

const dates = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

const Column = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 20px repeat(31, 35px);
  grid-gap: 5px;
`;

function Tracker() {
  const [emotion, setEmotion] = useState(true);
  const [exercise, setExercise] = useState(true);

  const [tracker, setTracker] = useState({
    jan: [],
    feb: [],
    mar: [],
    apr: [],
    may: [],
    jun: [],
    jul: [],
    aug: [],
    sep: [],
    oct: [],
    nov: [],
    dec: [],
  });
  // const [trackerObj, setTrackerObj] = useState();

  const fetchData = () =>
    fetch("http://localhost:4000/api/planner")
      .then((response) => response.json())
      .then((json) => json.planner)
      .then((data) => setTracker(data));

  useEffect(() => {
    fetchData();
  }, []);

  const emotionToggle = () => setEmotion((cur) => !cur);
  const exerciseToggle = () => setExercise((cur) => !cur);

  return (
    <Wrap>
      <CheckHeader>
        <CheckContainer>
          <div>
            <input type="checkbox" id="emotion" onClick={emotionToggle} />
            <label htmlFor="emotion">
              {emotion ? (
                <i className="fa-solid fa-square-check"></i>
              ) : (
                <i className="fa-regular fa-square"></i>
              )}
              <span>EMOTION</span>
            </label>
          </div>
          <div>
            <input type="checkbox" id="exercise" onClick={exerciseToggle} />
            <label htmlFor="exercise">
              {exercise ? (
                <i className="fa-solid fa-square-check"></i>
              ) : (
                <i className="fa-regular fa-square"></i>
              )}
              <span>EXERCISE</span>
            </label>
          </div>
        </CheckContainer>
      </CheckHeader>
      <TrackerSection>
        <Column>
          <Month></Month>
          {dates.map((date) => (
            <Date key={date}>{date}</Date>
          ))}
        </Column>

        <Column>
          <Month>JAN</Month>
          {tracker.jan.map((dateObj, index) => (
            <Trackers key={`jan${index}`}>
              {emotion ? <div>{dateObj["emotion"]}</div> : null}
              {exercise ? <div>{dateObj["exercise"] ? "♥" : "·"}</div> : null}
            </Trackers>
          ))}
        </Column>

        <Column>
          <Month>FEB</Month>
          {tracker.feb.map((dateObj, index) => (
            <Trackers key={`feb${index}`}>
              {emotion ? <div>{dateObj["emotion"]}</div> : null}
              {exercise ? <div>{dateObj["exercise"] ? "♥" : "·"}</div> : null}
            </Trackers>
          ))}
        </Column>
        <Column>
          <Month>MAR</Month>
          {tracker.mar.map((dateObj, index) => (
            <Trackers key={`mar${index}`}></Trackers>
          ))}
        </Column>
        <Column>
          <Month>APR</Month>
          {tracker.apr.map((dateObj, index) => (
            <Trackers key={`apr${index}`}></Trackers>
          ))}
        </Column>
        <Column>
          <Month>MAY</Month>
          {tracker.may.map((dateObj, index) => (
            <Trackers key={`may${index}`}></Trackers>
          ))}
        </Column>
        <Column>
          <Month>JUN</Month>
          {tracker.jun.map((dateObj, index) => (
            <Trackers key={`jun${index}`}></Trackers>
          ))}
        </Column>
        <Column>
          <Month>JUL</Month>
          {tracker.jul.map((dateObj, index) => (
            <Trackers key={`jul${index}`}></Trackers>
          ))}
        </Column>
        <Column>
          <Month>AUG</Month>
          {tracker.aug.map((dateObj, index) => (
            <Trackers key={`aug${index}`}></Trackers>
          ))}
        </Column>
        <Column>
          <Month>SEP</Month>
          {tracker.sep.map((dateObj, index) => (
            <Trackers key={`sep${index}`}></Trackers>
          ))}
        </Column>
        <Column>
          <Month>OCT</Month>
          {tracker.oct.map((dateObj, index) => (
            <Trackers key={`oct${index}`}></Trackers>
          ))}
        </Column>
        <Column>
          <Month>NOV</Month>
          {tracker.nov.map((dateObj, index) => (
            <Trackers key={`nov${index}`}></Trackers>
          ))}
        </Column>
        <Column>
          <Month>DEC</Month>
          {tracker.dec.map((dateObj, index) => (
            <Trackers key={`dec${index}`}></Trackers>
          ))}
        </Column>
      </TrackerSection>
    </Wrap>
  );
}

export default Tracker;
