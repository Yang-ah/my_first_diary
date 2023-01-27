import { Outlet, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";

const BodyWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const AppWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 760px;
  height: 700px;
  color: ${(props) => props.theme.firstColor};
  background-color: ${(props) => props.theme.fifthColor};
  border: 1px solid ${(props) => props.theme.fourthColor};
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
  width: 80px;
  height: 50px;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.fifthColor};
  color: ${(props) => props.theme.firstColor};
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
  color: ${(props) => props.theme.fourthColor};
  margin-top: 15px;
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
