import styled from "styled-components";
import {
  Header,
  AddBtn,
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

const ImgInput = styled.input`
  width: 100%;
  display: none;
`;

const PhotoSection = styled(Section)`
  height: 100%;
`;

const Title = styled.h1`
  width: 100%;
  letter-spacing: 20px;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
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

const ThisDateDiv = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  background-size: cover;
  border-radius: ${baseRadius};
  display: flex;
  justify-content: space-between;

  p {
    padding: 5px;
    font-size: 12px;
  }
`;

const OtherDateDiv = styled(ThisDateDiv)`
  background-color: rgba(255, 255, 255, 0.3);
  p {
    font-weight: 200;
  }
`;

function Photo() {
  return (
    <Wrap>
      <Header>
        <ThemeIcon />
        <p>PHOTO - {thisMonthString}</p>
      </Header>
      <PhotoSection>
        <SectionHeader></SectionHeader>

        <MainContainer>
          <Calendar>
            {weeks.map((week: string) => {
              return <DayDiv key={week}>{week}</DayDiv>;
            })}

            {prevDates.map((date: Date) => {
              return (
                <OtherDateDiv
                  key={`${date.toLocaleString("en-US", {
                    month: "short",
                  })}${date.getDate()}`}
                >
                  <p>{date.getDate()}</p>
                </OtherDateDiv>
              );
            })}

            {thisDates.map((date: Date) => {
              return (
                <ThisDateDiv
                  as="label"
                  htmlFor={String(date.getDate())}
                  key={`${String(date.getDate())}`}
                >
                  <p>{date.getDate()}</p>
                  <AddBtn>+</AddBtn>
                  <ImgInput
                    id={String(date.getDate())}
                    type="file"
                    accept="image"
                  />
                </ThisDateDiv>
              );
            })}

            {nextDates.map((date: Date) => {
              return (
                <OtherDateDiv
                  key={`${date.toLocaleString("en-US", {
                    month: "short",
                  })}${date.getDate()}`}
                >
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
