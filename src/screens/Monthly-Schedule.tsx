import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  thisDates,
  thisMonthString,
  Message,
  ThemeIcon,
  Header,
} from "./Monthly-Photo";

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
  i {
    font-size: 15px;
    margin: 2px 1px 0 0;
  }
  input {
    display: none;
  }

  div {
    margin-left: 10px;
  }
  label {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`;

const SectionTable = styled.div`
  width: 690px;
  height: 540px;
  overflow-y: scroll;
`;

const SectionLine = styled.div`
  width: 100%;
  grid-gap: 5px;
  display: grid;
  grid-template-columns: 40px 1fr 90px;
  margin-bottom: 5px;
  height: 40px;
  :last-child {
    margin: 0px;
  }
`;

const SectionLineWithoutTracker = styled(SectionLine)`
  grid-template-columns: 40px 1fr 27px;
`;

const TableHeader = styled(SectionLine)`
  height: 32px;
  margin-bottom: 10px;
  div:first-child,
  div:nth-child(2),
  div > div {
    background-color: ${(props) => props.theme.fourthColor};
  }
`;

const DateBox = styled.div`
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  background-color: rgba(255, 255, 255, 0.8);
  color: ${(props) => props.theme.thirdColor};
`;

const MainBox = styled.div`
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
`;

const SectionSide = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(3, 1fr);
`;

const SideBox = styled.input`
  width: 26px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 3px;
  border: none;
  outline: none;
`;

const LockBox = styled(SideBox)`
  cursor: pointer;
`;

const LineHeader = styled(Header)`
  width: 100%;
  margin-left: 30px;
`;

function MonthlySchedule() {
  const [onTracker, setTracker] = useState(true);
  const onClickTracker = () => {
    setTracker((cur) => !cur);
    console.log(onTracker);
  };

  return (
    <Wrap>
      <LineHeader>
        <ThemeIcon />
        <p>{`LINE MONTHLY - ${thisMonthString}`}</p>
      </LineHeader>
      <section>
        <SectionHeader>
          <CheckBox>
            <div>
              <input id="plan" type="checkbox" />
              <label htmlFor="plan">
                <i className="fa-regular fa-square"></i>
                PLAN
              </label>
            </div>
            <div>
              <input id="work" type="checkbox" />
              <label htmlFor="work">
                <i className="fa-regular fa-square"></i>
                WORK
              </label>
            </div>
            <div>
              <input id="diary" type="checkbox" />
              <label htmlFor="diary">
                <i className="fa-regular fa-square"></i>
                DIARY
              </label>
            </div>
          </CheckBox>
          <CheckBox>
            <div>
              <input id="tracker" type="checkbox" onClick={onClickTracker} />
              <label htmlFor="tracker">
                {onTracker ? (
                  <i className="fa-solid fa-square-check"></i>
                ) : (
                  <i className="fa-regular fa-square"></i>
                )}
                TRACKER
              </label>
            </div>
          </CheckBox>
        </SectionHeader>

        {onTracker ? (
          <SectionTable>
            <TableHeader>
              <DateBox>DATE</DateBox>
              <MainBox></MainBox>
              <SectionSide>
                <SideBox as="div">😌</SideBox>
                <SideBox as="div" style={{ fontSize: "20px" }}>
                  🏃🏻
                </SideBox>
                <SideBox as="div">🔒</SideBox>
              </SectionSide>
            </TableHeader>
            {thisDates.map((date: Date) => (
              <SectionLine
                key={`${date.toLocaleString("en-US", {
                  month: "short",
                })}${date.getDate()}`}
              >
                <DateBox>{date.getDate()}</DateBox>
                <MainBox></MainBox>
                <SectionSide>
                  <SideBox />
                  <SideBox />
                  <LockBox as="button">🔒</LockBox>
                </SectionSide>
              </SectionLine>
            ))}
          </SectionTable>
        ) : (
          <SectionTable>
            <TableHeader style={{ gridTemplateColumns: "40px 1fr 27px" }}>
              <DateBox>DATE</DateBox>
              <MainBox></MainBox>
              <SectionSide>
                <SideBox as="div">🔒</SideBox>
              </SectionSide>
            </TableHeader>
            {thisDates.map((date: Date) => (
              <SectionLineWithoutTracker
                key={`${date.toLocaleString("en-US", {
                  month: "short",
                })}${date.getDate()}`}
              >
                <DateBox>{date.getDate()}</DateBox>
                <MainBox></MainBox>
                <LockBox as="button">🔒</LockBox>
              </SectionLineWithoutTracker>
            ))}
          </SectionTable>
        )}
      </section>
      <Message>yangah.career@gmail.com</Message>
    </Wrap>
  );
}
export default MonthlySchedule;
