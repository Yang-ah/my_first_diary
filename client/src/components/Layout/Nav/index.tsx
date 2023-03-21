import { useMatch, useNavigate } from "react-router-dom";
import { IconMoon, IconThumbTack } from "../../../assets/icon";
import styles from "./nav.module.scss";
import NavButton from "./Button/NavButton";
import { Tree, Peach, Apple, Dark } from "../../../theme";
import styled from "styled-components";
import { IconApple } from "../../../assets/icon";

const GNB = styled.nav`
  input[type="checkbox"] + svg {
    fill: ${(props) => props.theme.PRIMARY_50};
  }
  > button {
    background-color: ${(props) => props.theme.PRIMARY_30};
  }
  > button[name="themeToggle"] > p > svg {
    fill: #fff;
    margin-bottom: 8px;
  }
  .apple {
    width: 36px;
  }
  .moon {
    width: 48px;
  }
`;

const ThemeButtons = styled.div`
  > button > svg {
    width: 16px;
  }
  > button[name="peach"] {
    background-color: ${Peach.PRIMARY_10};
  }

  > button[name="tree"] {
    background-color: ${Tree.PRIMARY_10};
  }

  > button[name="apple"] {
    background-color: ${Apple.PRIMARY_10};
    > svg {
      fill: ${Apple.PRIMARY_50};
    }
  }

  > button[name="dark"] {
    background-color: ${Dark.PRIMARY_50};
    > svg {
      width: 20px;
      fill: #fff;
    }
  }
`;

interface INav {
  icon: string;
  onClick: any;
}

const Nav = ({ icon, onClick }: INav) => {
  const navigate = useNavigate();

  const goPhoto = () => navigate("/photo");
  const goSchedule = () => navigate("/list/scheduler");
  const goTracker = () => navigate("/tracker");
  const goDiary = () => navigate("/list/diary");

  const schedulerMatch = useMatch("/list/scheduler");
  const planMatch = useMatch("/list/scheduler/plan");
  const workMatch = useMatch("/list/scheduler/work");

  const diaryMatch = useMatch("/list/diary");
  const addMatch = useMatch("/list/scheduler/add");

  const photoMatch = useMatch("/photo");
  const trackerMatch = useMatch("/tracker");

  return (
    <GNB className={styles.nav}>
      <label className={styles.fixedCheckBox}>
        <input type="checkbox" readOnly hidden />
        <IconThumbTack />
      </label>

      <NavButton
        className={photoMatch ? "selectedButton" : ""}
        children="PHOTO"
        onClick={goPhoto}
      />
      <NavButton
        className={
          schedulerMatch || addMatch || planMatch || workMatch
            ? "selectedButton"
            : ""
        }
        children="SCHEDULER"
        onClick={goSchedule}
      />
      <NavButton
        className={diaryMatch ? "selectedButton" : ""}
        children="DIARY"
        onClick={goDiary}
      />
      <NavButton
        className={trackerMatch ? "selectedButton" : ""}
        children="TRACKER"
        onClick={goTracker}
      />
      <button name="themeToggle" className={styles.themeToggle}>
        <p>
          {icon === "apple" ? (
            <IconApple className="apple" />
          ) : icon === "dark" ? (
            <IconMoon className="moon" />
          ) : (
            icon
          )}
        </p>

        <ThemeButtons className={styles.themeButtons}>
          <button onClick={() => onClick("peach")} name="peach">
            {Peach.ICON}
          </button>
          <button onClick={() => onClick("tree")} name="tree">
            {Tree.ICON}
          </button>
          <button onClick={() => onClick("apple")} name="apple">
            <IconApple />
          </button>
          <button onClick={() => onClick("dark")} name="dark">
            <IconMoon />
          </button>
        </ThemeButtons>
      </button>
    </GNB>
  );
};

export default Nav;
