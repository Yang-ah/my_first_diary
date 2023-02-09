import styled from "styled-components";
import {
  Header,
  Wrap,
  ThemeIcon,
  Section,
  SectionHeader,
  MainContainer,
  baseRadius,
  baseSpace,
} from "../components/Common";

import {
  thisDates,
  thisMonthString,
  weeks,
  prevDates,
  nextDates,
} from "../components/Dates";
import PhotoBox from "../components/PhotoBox";

const PhotoSection = styled(Section)`
  height: 100%;
`;

const Calendar = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  margin-top: ${baseSpace};
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 24px repeat(5, 1fr);
  grid-gap: 2px;
`;

const DayDiv = styled.div`
  text-align: center;
  background-color: ${(props) => props.theme.thirdColor};
  font-size: 12px;
  line-height: 24px;
  border-radius: ${baseRadius};
`;

const OtherDateDiv = styled.div`
  border-radius: ${baseRadius};
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.3);
  p {
    font-weight: 200;
    padding: 5px;
    font-size: 12px;
  }
`;

function Photo() {
  return (
    <Wrap>
      <Header>
        <ThemeIcon />
        <p>PHOTO ({thisMonthString})</p>
      </Header>
      <SectionHeader></SectionHeader>
      <PhotoSection>
        <MainContainer>
          <Calendar>
            {weeks.map((week: string) => {
              return <DayDiv key={week}>{week}</DayDiv>;
            })}

            {prevDates.map((date: Date) => {
              return (
                <OtherDateDiv key={date.getDate()}>
                  <p>{date.getDate()}</p>
                </OtherDateDiv>
              );
            })}

            {thisDates.map((date: Date) => {
              return <PhotoBox key={date.getDate()} date={date} />;
            })}

            {nextDates.map((date: Date) => {
              return (
                <OtherDateDiv key={date.getDate()}>
                  <p>{date.getDate()}</p>
                </OtherDateDiv>
              );
            })}
          </Calendar>
        </MainContainer>
      </PhotoSection>
    </Wrap>
  );
}
export default Photo;
