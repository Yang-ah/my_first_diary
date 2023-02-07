import { useEffect, useState } from "react";
import { Outlet, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";

const BodyWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.firstColor};
`;

const AppWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 760px;
  height: 700px;
  background-color: ${(props) => props.theme.fourthColor};
  border: 1px solid ${(props) => props.theme.thirdColor};
  margin: 10px 0;
  align-self: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  align-items: center;
`;

const BtnWrap = styled.div`
  position: absolute;
  width: 100px;
  top: 10px;
  right: -101px;
`;

const Btn = styled.button`
  color: ${(props) => props.theme.firstColor};
  width: 80px;
  height: 50px;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.fourthColor};
`;

const SelectedBtn = styled(Btn)`
  background-color: ${(props) => props.theme.thirdColor};
`;

export const Message = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 11px;
  font-weight: 400;
  margin-top: 15px;
  color: ${(props) => props.theme.secondColor};
`;

function App() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const goSchedule = () => {
    navigate("/line");
  };

  const goTracker = () => {
    navigate("/tracker");
  };

  const addMatch = useMatch("/line/add");
  const lineMatch = useMatch("/line");
  const photoMatch = useMatch("/");
  const trackerMatch = useMatch("/tracker");

  return (
    <BodyWrap>
      <AppWrap>
        <Outlet />
        <BtnWrap>
          {photoMatch ? (
            <SelectedBtn onClick={goHome}>Photo</SelectedBtn>
          ) : (
            <Btn onClick={goHome}>Photo</Btn>
          )}
          {lineMatch || addMatch ? (
            <SelectedBtn onClick={goSchedule}>Line</SelectedBtn>
          ) : (
            <Btn onClick={goSchedule}>Line</Btn>
          )}
          {trackerMatch ? (
            <SelectedBtn onClick={goTracker}>Tracker</SelectedBtn>
          ) : (
            <Btn onClick={goTracker}>Tracker</Btn>
          )}
        </BtnWrap>
        <Message>yangah.career@gmail.com</Message>
      </AppWrap>
    </BodyWrap>
  );
}

export default App;
