import { Outlet, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Pastel, Grape, Tree, Peach } from "./theme";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";

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
  box-shadow: 5px 5px 10px #0000006b;
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
  box-shadow: 2px 2px 5px #0000006b;
`;

const SelectedBtn = styled(Btn)`
  background-color: ${(props) => props.theme.thirdColor};
`;

const ThemeContainer = styled.div`
  width: 80px;
  height: 80px;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: 2px 2px 5px #0000006b;
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

interface ThemeProps {
  themeColor: string;
}

const ThemeBtn = styled(motion.button)<ThemeProps>`
  background-color: ${(props) => props.themeColor};
  font-size: 20px;
  opacity: 0.8;
  overflow: hidden;
  :hover {
    opacity: 1;
    box-shadow: 2px 2px 5px #0000006b;
  }
  :hover span {
    font-size: 28px;
  }
`;

function App() {
  const [theme, setTheme] = useState(Tree);
  const changeTheme = (e: React.FormEvent<HTMLButtonElement>) => {
    const theme = e.currentTarget.value;

    if (theme === "tree") {
      setTheme(Tree);
    }
    if (theme === "peach") {
      setTheme(Peach);
    }
    if (theme === "pastel") {
      setTheme(Pastel);
    }
    if (theme === "grape") {
      setTheme(Grape);
    }
  };

  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const goSchedule = () => {
    navigate("/list/scheduler");
  };

  const goTracker = () => {
    navigate("/tracker");
  };

  const goDiary = () => {
    navigate("/list/diary");
  };

  const schedulerMatch = useMatch("/list/scheduler");
  const planMatch = useMatch("/list/scheduler/plan");
  const workMatch = useMatch("/list/scheduler/work");

  const diaryMatch = useMatch("/list/diary");
  const addMatch = useMatch("/list/scheduler/add");

  const photoMatch = useMatch("/");
  const trackerMatch = useMatch("/tracker");

  return (
    <>
      <ThemeProvider theme={theme}>
        <BodyWrap>
          <AppWrap>
            <Outlet />
            <BtnWrap>
              {photoMatch ? (
                <SelectedBtn onClick={goHome}>Photo</SelectedBtn>
              ) : (
                <Btn onClick={goHome}>Photo</Btn>
              )}
              {schedulerMatch || addMatch || planMatch || workMatch ? (
                <SelectedBtn onClick={goSchedule}>Scheduler</SelectedBtn>
              ) : (
                <Btn onClick={goSchedule}>Scheduler</Btn>
              )}
              {diaryMatch ? (
                <SelectedBtn onClick={goDiary}>Diary</SelectedBtn>
              ) : (
                <Btn onClick={goDiary}>Diary</Btn>
              )}

              {trackerMatch ? (
                <SelectedBtn onClick={goTracker}>Tracker</SelectedBtn>
              ) : (
                <Btn onClick={goTracker}>Tracker</Btn>
              )}
              <ThemeContainer as="div">
                <ThemeBtn
                  themeColor={Peach.secondColor}
                  onClick={changeTheme}
                  value="peach"
                >
                  <span>🍑</span>
                </ThemeBtn>
                <ThemeBtn
                  themeColor={Grape.thirdColor}
                  onClick={changeTheme}
                  value="grape"
                >
                  <span>🍇</span>
                </ThemeBtn>
                <ThemeBtn
                  themeColor={Tree.thirdColor}
                  onClick={changeTheme}
                  value="tree"
                >
                  <span>🌳</span>
                </ThemeBtn>

                <ThemeBtn
                  themeColor={Pastel.secondColor}
                  onClick={changeTheme}
                  value="pastel"
                >
                  <span>🦄</span>
                </ThemeBtn>
              </ThemeContainer>
            </BtnWrap>
            <Message>yangah.career@gmail.com</Message>
          </AppWrap>
        </BodyWrap>
      </ThemeProvider>
    </>
  );
}

export default App;
