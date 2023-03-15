import { useEffect, useState } from "react";
import styled from "styled-components";
import { Section, CheckContainer } from "../../components/Common";

import styles from "./tracker.module.scss";

const TrackerSection = styled(Section)`
  display: grid;
  grid-template-columns: 20px repeat(12, 1fr);
  grid-gap: 5px;
  overflow-y: scroll;
  position: relative;
`;

const Date = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
`;

const Month = styled(Date)`
  height: 20px;
  position: sticky;
  top: 0;
`;

const dates = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const Tracker = () => {
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
    <div className={styles.wrap}>
      <header className={styles.header}>
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
      </header>
      <TrackerSection className={styles.section}>
        <div className={styles.column}>
          <Month className={styles.date}></Month>
          {dates.map((date) => (
            <Date className={styles.date} key={date}>
              {date}
            </Date>
          ))}
        </div>

        <div className={styles.column}>
          <Month className={styles.date}>JAN</Month>
          {tracker.jan.map((dateObj, index) => (
            <div className={styles.trackers} key={`jan${index}`}>
              {emotion ? <div>{dateObj["emotion"]}</div> : null}
              {exercise ? <div>{dateObj["exercise"] ? "♥" : "·"}</div> : null}
            </div>
          ))}
        </div>

        <div className={styles.column}>
          <Month className={styles.date}>FEB</Month>
          {tracker.feb.map((dateObj, index) => (
            <div className={styles.trackers} key={`feb${index}`}>
              {emotion ? <div>{dateObj["emotion"]}</div> : null}
              {exercise ? <div>{dateObj["exercise"] ? "♥" : "·"}</div> : null}
            </div>
          ))}
        </div>
        <div className={styles.column}>
          <Month className={styles.date}>MAR</Month>
          {tracker.mar.map((dateObj, index) => (
            <div className={styles.trackers} key={`mar${index}`}>
              {emotion ? <div>{dateObj["emotion"]}</div> : null}
              {exercise ? <div>{dateObj["exercise"] ? "♥" : "·"}</div> : null}
            </div>
          ))}
        </div>
        <div className={styles.column}>
          <Month className={styles.date}>APR</Month>
          {tracker.apr.map((dateObj, index) => (
            <div className={styles.trackers} key={`apr${index}`}></div>
          ))}
        </div>
        <div className={styles.column}>
          <Month className={styles.date}>MAY</Month>
          {tracker.may.map((dateObj, index) => (
            <div className={styles.trackers} key={`may${index}`}></div>
          ))}
        </div>
        <div className={styles.column}>
          <Month className={styles.date}>JUN</Month>
          {tracker.jun.map((dateObj, index) => (
            <div className={styles.trackers} key={`jun${index}`}></div>
          ))}
        </div>
        <div className={styles.column}>
          <Month className={styles.date}>JUL</Month>
          {tracker.jul.map((dateObj, index) => (
            <div className={styles.trackers} key={`jul${index}`}></div>
          ))}
        </div>
        <div className={styles.column}>
          <Month className={styles.date}>AUG</Month>
          {tracker.aug.map((dateObj, index) => (
            <div className={styles.trackers} key={`aug${index}`}></div>
          ))}
        </div>
        <div className={styles.column}>
          <Month className={styles.date}>SEP</Month>
          {tracker.sep.map((dateObj, index) => (
            <div className={styles.trackers} key={`sep${index}`}></div>
          ))}
        </div>
        <div className={styles.column}>
          <Month className={styles.date}>OCT</Month>
          {tracker.oct.map((dateObj, index) => (
            <div className={styles.trackers} key={`oct${index}`}></div>
          ))}
        </div>
        <div className={styles.column}>
          <Month className={styles.date}>NOV</Month>
          {tracker.nov.map((dateObj, index) => (
            <div className={styles.trackers} key={`nov${index}`}></div>
          ))}
        </div>
        <div className={styles.column}>
          <Month className={styles.date}>DEC</Month>
          {tracker.dec.map((dateObj, index) => (
            <div className={styles.trackers} key={`dec${index}`}></div>
          ))}
        </div>
      </TrackerSection>
    </div>
  );
};

export default Tracker;
