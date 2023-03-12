import styled from "styled-components";
import { Wrap, Section, MainContainer } from "../../components/Common";

import {
  thisDates,
  weeks,
  prevDates,
  nextDates,
} from "../../components/Common/Dates";

import PhotoBox from "./PhotoBox";
import styles from "./photo.module.scss";

const DayDiv = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
`;

const Photo = () => {
  return (
    <Wrap>
      <Section>
        <MainContainer>
          <div className={styles.calendar}>
            {weeks.map((week: string) => {
              return (
                <DayDiv className={styles.day} key={week}>
                  {week}
                </DayDiv>
              );
            })}

            {prevDates.map((date: Date) => {
              return (
                <div className={styles.other_date} key={date.getDate()}>
                  <p>{date.getDate()}</p>
                </div>
              );
            })}

            {thisDates.map((date: Date) => {
              return <PhotoBox key={date.getDate()} date={date} />;
            })}

            {nextDates.map((date: Date) => {
              return (
                <div className={styles.other_date} key={date.getDate()}>
                  <p>{date.getDate()}</p>
                </div>
              );
            })}
          </div>
        </MainContainer>
      </Section>
    </Wrap>
  );
};
export default Photo;
