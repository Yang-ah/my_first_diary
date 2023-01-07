import styled from "styled-components";
import MonthLine from "./../components/MonthLine";

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
`;

const Header = styled.div`
  display: flex;
`;

const Month = styled.h1`
  margin-right: 20px;
`;
const MonthMode = styled.h1``;

const Section = styled.div``;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div:first-child {
    display: flex;
    margin-right: 40px;
  }
`;

const SectionTable = styled.div`
  width: 690px;
  height: 570px;
  background-color: ${(props) => props.theme.fourthColor};
`;

function MonthlySchedule() {
  return (
    <Wrap>
      <Header>
        <Month>JANUARY</Month>
        <MonthMode>SCHEDULE</MonthMode>
      </Header>
      <Section>
        <SectionHeader>
          <div>
            <div>
              <input type="checkbox" />
              <label>PLAN</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>WORK</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>DIARY</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>TRACKER</label>
            </div>
          </div>
          <div>
            <div>
              <input type="checkbox" />
              <label>WEEKLY MODE</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>DIARY MODE</label>
            </div>
          </div>
        </SectionHeader>
        <SectionTable>
          <MonthLine />
          <MonthLine />
          <MonthLine />
          <MonthLine />
          <MonthLine />
          <MonthLine />
          <MonthLine />
          <MonthLine />
        </SectionTable>
      </Section>
    </Wrap>
  );
}
export default MonthlySchedule;
