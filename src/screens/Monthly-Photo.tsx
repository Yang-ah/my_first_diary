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
  position: relative;
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

const ImgInput = styled.input`
  width: 100%;
  display: none;
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

const Arrow = styled.button`
  font-size: 15px;
  color: ${(props) => props.theme.fourthColor};
  background-color: inherit;
`;

const Calendar = styled.div`
  width: 690px;
  height: 570px;
  margin: 15px 5px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 24px repeat(5, 1fr);
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

interface ThisDateDivProps {
  imgProp?: string;
}

const ThisDateDiv = styled.div<ThisDateDivProps>`
  background-color: rgba(255, 255, 255, 0.8);
  // background: url(${(props) => props.imgProp});
  background-size: cover;
  border-radius: 2px;
  display: flex;
  justify-content: space-between;

  p {
    color: ${(props) => props.theme.fourthColor};
    font-weight: 200;
    padding: 5px;
    font-size: 12px;
  }
`;

export const AddBtn = styled.button`
  width: 30px;
  height: 30px;
  margin: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(129, 125, 125, 0.1);
  color: white;
  align-self: flex-end;
  justify-self: flex-end;
  cursor: pointer;
`;

const OtherDateDiv = styled(ThisDateDiv)`
  background-color: rgba(255, 255, 255, 0.3);
`;

function MonthlyPhoto() {
  const ImgArr: String[] = [];
  thisDates.forEach((date) => {
    ImgArr.push("");
  });

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
              const onChange = (event: React.FormEvent<HTMLInputElement>) => {
                ImgArr[+event.currentTarget.id - 1] = event.currentTarget.value;
                console.log(ImgArr);
              };
              return (
                <ThisDateDiv
                  as="label"
                  htmlFor={String(date.getDate())}
                  key={`${String(date.getDate())}`}
                  imgProp={`${ImgArr[date.getDate() - 1]}`}
                >
                  <p>{date.getDate()}</p>
                  <AddBtn>+</AddBtn>
                  <ImgInput
                    id={String(date.getDate())}
                    type="file"
                    accept="image"
                    onChange={onChange}
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
          <Arrow>
            <i className="fas fa-chevron-right"></i>
          </Arrow>
        </Container>
      </Section>
    </Wrap>
  );
}
export default MonthlyPhoto;
