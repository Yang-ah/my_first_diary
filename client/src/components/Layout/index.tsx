import { Outlet, useMatch, useNavigate } from "react-router-dom";
import { Pastel, Grape, Tree, Peach } from "../../theme";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import { thisMonthString, thisYear } from "../Common/Dates";
import styles from "./layout.module.scss";

const BodyWrap = styled.div`
  color: ${(props) => props.theme.firstColor};
  > main {
    background-color: ${(props) => props.theme.fourthColor};
    border: 1px solid ${(props) => props.theme.thirdColor};
  }
`;

const IconDiv = styled.div`
  background-color: ${(props) => props.theme.firstColor};
`;

const Message = styled.p`
  color: ${(props) => props.theme.secondColor};
`;

const Nav = styled.nav`
  > button {
    color: ${(props) => props.theme.firstColor};
    background-color: ${(props) => props.theme.fourthColor};
  }

  .selected_button {
    background-color: ${(props) => props.theme.thirdColor};
  }
`;

interface ThemeProps {
  themecolor: string;
}

const ThemeBtn = styled.button<ThemeProps>`
  background-color: ${(props) => props.themecolor};
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

function Layout() {
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
    let title = "SCHEDULER";

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
        <BodyWrap className={styles.body}>
          <main className={styles.main}>
            {!homeMatch && (
              <header className={styles.header}>
                <IconDiv className={styles.icon_div} />
                {titleMaker()}

                <div className={styles.icon}>{titleIcon}</div>
                <span>{trackerMatch ? thisYear : thisMonthString}</span>
              </header>
            )}
            <Outlet />

            <Message className={styles.message}>
              yangah.career@gmail.com
            </Message>
          </main>
          <Nav className={styles.nav}>
            <button
              className={photoMatch ? "selected_button" : ""}
              onClick={goPhoto}
            >
              Photo
            </button>

            <button
              className={
                schedulerMatch || addMatch || planMatch || workMatch
                  ? "selected_button"
                  : ""
              }
              onClick={goSchedule}
            >
              Scheduler
            </button>

            <button
              className={diaryMatch ? "selected_button" : ""}
              onClick={goDiary}
            >
              Diary
            </button>

            <button
              className={trackerMatch ? "selected_button" : ""}
              onClick={goTracker}
            >
              Tracker
            </button>

            <div className={styles.theme_button_container}>
              {ThemeBtns.map((theme) => (
                <ThemeBtn
                  key={theme.value}
                  themecolor={theme.themecolor}
                  onClick={changeTheme}
                  value={theme.value}
                  className={styles.theme_button}
                >
                  <span>{theme.icon}</span>
                </ThemeBtn>
              ))}
            </div>
          </Nav>
        </BodyWrap>
      </ThemeProvider>
    </>
  );
}

export default Layout;
