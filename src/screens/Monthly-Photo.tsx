import styled from "styled-components";

//size
// local : 1536
// tablet : 600~768

const Wrap = styled.div`
  color: ${(props) => props.theme.firstColor};
  margin-top: 10px;
  width: 760px;
  height: 720px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  justify-self: center;
  align-self: center;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.fourthColor};
  padding: 15px;
  background-color: ${(props) => props.theme.fifthColor};
`;

const Header = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.secondColor};
  line-height: 15px;
`;

const ThemeIcon = styled.div`
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
const DateDiv = styled.div`
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
const Message = styled.h1`
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
        <Title>JANUARY</Title>
        <Container>
          <Arrow>
            <i className="fas fa-chevron-left"></i>
          </Arrow>
          <Calendar>
            <DayDiv>SON</DayDiv>
            <DayDiv>MON</DayDiv>
            <DayDiv>TUE</DayDiv>
            <DayDiv>WED</DayDiv>
            <DayDiv>THU</DayDiv>
            <DayDiv>FRI</DayDiv>
            <DayDiv>SAT</DayDiv>
            <DateDiv>
              <p>1</p>
            </DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
            <DateDiv></DateDiv>
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
