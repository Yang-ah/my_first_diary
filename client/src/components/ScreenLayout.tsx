import { Outlet, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Pastel, Grape, Tree, Peach } from "../theme";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";
import { baseSpace } from "./Tag";
import { thisMonthString, thisYear } from "./Dates";

const Header = styled.div`
  width: 100%;
  height: 15px;
  font-size: 14px;
  display: flex;
  align-items: center;
  line-height: 15px;
  margin-bottom: ${baseSpace};
`;

const ThemeIcon = styled.div`
  width: 5px;
  height: 15px;
  margin-right: 3px;
  background-color: ${(props) => props.theme.firstColor};
`;

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
  themecolor: string;
}

const ThemeBtn = styled(motion.button)<ThemeProps>`
  background-color: ${(props) => props.themecolor};
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

const IconDiv = styled.div`
  padding: 0 5px;
`;

interface IThemeBtn {
  themecolor: string;
  value: string;
  icon: string;
}

const ThemeBtns: IThemeBtn[] = [
  {
    themecolor: Peach.secondColor,
    value: "peach",
    icon: Peach.icon,
  },
  {
    themecolor: Grape.thirdColor,
    value: "grape",
    icon: Grape.icon,
  },
  {
    themecolor: Tree.thirdColor,
    value: "tree",
    icon: Tree.icon,
  },
  {
    themecolor: Pastel.secondColor,
    value: "pastel",
    icon: Pastel.icon,
  },
];

function ScreenLayout() {
  const [theme, setTheme] = useState(Tree);
  const [titleIcon, setIcon] = useState(Tree.icon);

  const changeTheme = (e: React.FormEvent<HTMLButtonElement>) => {
    const theme = e.currentTarget.value;

    if (theme === "tree") {
      setTheme(Tree);
      setIcon(Tree.icon);
    }
    if (theme === "peach") {
      setTheme(Peach);
      setIcon(Peach.icon);
    }
    if (theme === "pastel") {
      setTheme(Pastel);
      setIcon(Pastel.icon);
    }
    if (theme === "grape") {
      setTheme(Grape);
      setIcon(Grape.icon);
    }
  };

  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const goPhoto = () => {
    navigate("/photo");
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

  const homeMatch = useMatch("/");
  const schedulerMatch = useMatch("/list/scheduler");
  const planMatch = useMatch("/list/scheduler/plan");
  const workMatch = useMatch("/list/scheduler/work");

  const diaryMatch = useMatch("/list/diary");
  const addMatch = useMatch("/list/scheduler/add");

  const photoMatch = useMatch("/photo");
  const trackerMatch = useMatch("/tracker");

  const titleMaker = () => {
    let title = "SCHEDULE";

    if (diaryMatch) {
      title = "DIARY";
    } else if (photoMatch) {
      title = "PHOTO";
    } else if (trackerMatch) {
      title = "TRACKER";
    }

    return <div>{title}</div>;
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <BodyWrap>
          <AppWrap>
            {homeMatch ? null : (
              <Header>
                <ThemeIcon />
                {titleMaker()}
                <IconDiv>{titleIcon}</IconDiv>
                {trackerMatch ? (
                  <span>{thisYear}</span>
                ) : (
                  <span>{thisMonthString}</span>
                )}
              </Header>
            )}
            <Outlet />
            <BtnWrap>
              {photoMatch ? (
                <SelectedBtn onClick={goPhoto}>Photo</SelectedBtn>
              ) : (
                <Btn onClick={goPhoto}>Photo</Btn>
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
                {ThemeBtns.map((theme) => (
                  <ThemeBtn
                    key={theme.value}
                    themecolor={theme.themecolor}
                    onClick={changeTheme}
                    value={theme.value}
                  >
                    <span>{theme.icon}</span>
                  </ThemeBtn>
                ))}
              </ThemeContainer>
            </BtnWrap>
            <Message>yangah.career@gmail.com</Message>
          </AppWrap>
        </BodyWrap>
      </ThemeProvider>
    </>
  );
}

export default ScreenLayout;
