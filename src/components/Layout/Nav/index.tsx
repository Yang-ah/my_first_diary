import { useNavigate } from "react-router-dom";
import { IconMoon, IconThumbTack } from "../../../assets/icon";
import styles from "./nav.module.scss";
import NavButton from "./NavButton";
import { Tree, Peach, Apple, Dark } from "../../../theme";
import styled from "styled-components";
import { IconApple } from "../../../assets/icon";
import cx from "classnames";

const GNB = styled.nav`
  input[type="checkbox"] + svg {
    fill: ${(props) => props.theme.PRIMARY_40};
  }
  > button {
    background-color: ${(props) => props.theme.PRIMARY_30};

    &.selectedButton,
    &:hover {
      background-color: ${(props) => props.theme.PRIMARY_40};
    }
  }
  > .themeToggle {
    background-color: ${(props) => props.theme.PRIMARY_40};
    > p > svg {
      fill: #fff;
      margin-bottom: 8px;
    }
  }
  .apple {
    width: 36px;
  }
  .moon {
    width: 48px;
  }
`;

const ThemeButtons = styled.div`
  > button[name="peach"] {
    background-color: ${Peach.PRIMARY_10};
  }

  > button[name="tree"] {
    background-color: ${Tree.PRIMARY_10};
  }

  > button[name="apple"] {
    background-color: ${Apple.PRIMARY_10};
    > svg {
      width: 16px;
      fill: ${Apple.PRIMARY_40};
    }
  }

  > button[name="dark"] {
    background-color: ${Dark.PRIMARY_40};
    > svg {
      width: 20px;
      fill: #fff;
    }
  }
`;

interface INav {
  icon: string;
  onClick: any;
  path: string;
}

const Nav = ({ icon, onClick, path }: INav) => {
  const navigate = useNavigate();

  const goPhoto = () => navigate("/photo");
  const goSchedule = () => navigate("/scheduler");
  const goTracker = () => navigate("/tracker");
  const goDiary = () => navigate("/diary");

  return (
    <GNB className={styles.nav}>
      <label className={styles.fixedCheckBox}>
        <input type="checkbox" readOnly hidden />
        <IconThumbTack />
      </label>

      <NavButton
        className={path.includes("photo") ? "selectedButton" : ""}
        onClick={goPhoto}
      >
        PHOTO
      </NavButton>
      <NavButton
        className={path.includes("scheduler") ? "selectedButton" : ""}
        onClick={goSchedule}
      >
        SCHEDULER
      </NavButton>
      <NavButton
        className={path.includes("diary") ? "selectedButton" : ""}
        onClick={goDiary}
      >
        DIARY
      </NavButton>
      <NavButton
        className={path.includes("tracker") ? "selectedButton" : ""}
        onClick={goTracker}
      >
        TRACKER
      </NavButton>
      <div className={cx(styles.themeToggle, "themeToggle")}>
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
      </div>
    </GNB>
  );
};

export default Nav;
