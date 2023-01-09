import styled from "styled-components";
import { thisDates, thisMonthString, Message } from "./Monthly-Photo";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 760px;
  height: 720px;
  color: ${(props) => props.theme.firstColor};
  background-color: ${(props) => props.theme.fifthColor};
  align-self: center;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.fourthColor};
`;

const Header = styled.div`
  display: flex;
  letter-spacing: 10px;
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => props.theme.fourthColor};
  h1:first-child {
    margin-right: 20px;
  }
`;

const SectionHeader = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.secondColor};
  font-size: 13px;
  padding-right: 15px;
`;

const CheckBox = styled.div`
  display: flex;
  :last-child {
    flex-direction: column;
  }
  input {
    width: 15px;
    height: 15px;
  }
  label {
    padding: 0 0 2px 2px;
  }
  > div {
    display: flex;
    align-items: center;
    margin-right: 5px;
  }
`;

const SectionTable = styled.div`
  width: 690px;
  height: 540px;
  overflow-y: scroll;
`;

const SectionLine = styled.div`
  width: 100%;
  grid-gap: 1px;
  display: grid;
  grid-template-columns: 40px 1fr 80px 40px;
  margin-bottom: 1px;
  height: 40px;
  :last-child {
    margin: 0px;
  }
`;

const DateBox = styled.div`
  border-radius: 5px;
  background-color: ${(props) => props.theme.fourthColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.secondColor};
  font-size: 13px;
`;

const MainBox = styled.div`
  border-radius: 5px;
  background-color: ${(props) => props.theme.fourthColor};
`;

const SectionSide = styled.div`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(2, 1fr);
`;

const SideBox = styled.div`
  background-color: ${(props) => props.theme.fourthColor};
  border-radius: 5px;
`;

function MonthlySchedule() {
  return (
    <Wrap>
      <Header>
        <h1>{thisMonthString}</h1>
        <h1>SCHEDULE</h1>
      </Header>
      <section>
        <SectionHeader>
          <CheckBox>
            <div>
              <input id="plan" type="checkbox" />
              <label htmlFor="plan">PLAN</label>
            </div>
            <div>
              <input id="work" type="checkbox" />
              <label htmlFor="work">WORK</label>
            </div>
            <div>
              <input id="diary" type="checkbox" />
              <label htmlFor="diary">DIARY</label>
            </div>
            <div>
              <input id="tracker" type="checkbox" />
              <label htmlFor="tracker">TRACKER</label>
            </div>
          </CheckBox>
          <CheckBox>
            <div>
              <input id="weekly-mode" type="checkbox" />
              <label htmlFor="weekly-mode">WEEKLY MODE</label>
            </div>
          </CheckBox>
        </SectionHeader>

        <SectionTable>
          {thisDates.map((date: Date) => (
            <SectionLine key={date.getDate()}>
              <DateBox>{date.getDate()}</DateBox>
              <MainBox></MainBox>
              <SectionSide>
                <SideBox></SideBox>
                <SideBox></SideBox>
              </SectionSide>
              <SideBox></SideBox>
            </SectionLine>
          ))}
        </SectionTable>
      </section>
      <Message>yangah.career@gmail.com</Message>
    </Wrap>
  );
}
export default MonthlySchedule;
