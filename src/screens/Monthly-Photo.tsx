import styled from "styled-components";
import {
  thisDates,
  thisMonthString,
  weeks,
  prevDates,
  nextDates,
} from "../components/Dates";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-self: center;
  justify-content: space-between;
  border-radius: 10px;
`;

export const Header = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.secondColor};
  line-height: 15px;
  margin: 15px 0 0 15px;
`;

export const ThemeIcon = styled.div`
  margin-right: 3px;
  width: 5px;
  height: 15px;
  background-color: ${(props) => props.theme.secondColor};
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  letter-spacing: 20px;
  font-size: 18px;
  font-weight: 400;
  color: ${(props) => props.theme.fourthColor};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Arrow = styled.div`
  font-size: 15px;
  color: ${(props) => props.theme.fourthColor};
`;

const Calendar = styled.div`
  width: 690px;
  height: 570px;
  margin: 15px 5px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 24px 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 2px;
`;

const DayDiv = styled.div`
  text-align: center;
  background-color: ${(props) => props.theme.fourthColor};
  color: ${(props) => props.theme.fifthColor};
  font-weight: 200;
  font-size: 12px;
  line-height: 24px;
  border-radius: 2px;
`;

const ThisDateDiv = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  //background-image: url("https://user-images.githubusercontent.com/97151214/211022057-38a93503-9a77-4a47-bfac-2336377683d5.jpg");
  //background-size: cover;
  border-radius: 2px;
  p {
    color: ${(props) => props.theme.fourthColor};
    font-weight: 200;
    padding: 5px;
    font-size: 12px;
  }
`;

const OtherDateDiv = styled(ThisDateDiv)`
  background-color: rgba(255, 255, 255, 0.3);
`;

export const Message = styled.h1`
  font-size: 11px;
  font-weight: 400;
  color: ${(props) => props.theme.fourthColor};
`;

function MonthlyPhoto() {
  return (
    <Wrap>
      <Header>
        <ThemeIcon />
        <p>PHOTO MONTHLY</p>
      </Header>
      <Section>
        <Title>{thisMonthString}</Title>
        <Container>
          <Arrow>
            <i className="fas fa-chevron-left"></i>
          </Arrow>
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
                  key={`${date.toLocaleString("en-US", {
                    month: "short",
                  })}${date.getDate()}`}
                >
                  <p>{date.getDate()}</p>
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
          <Arrow>
            <i className="fas fa-chevron-right"></i>
          </Arrow>
        </Container>
        <Message>yangah.career@gmail.com</Message>
      </Section>
    </Wrap>
  );
}
export default MonthlyPhoto;
