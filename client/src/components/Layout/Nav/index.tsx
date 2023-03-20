import { useMatch, useNavigate } from "react-router-dom";
import { IconThumbTack } from "../../../assets/icon";
import styles from "./nav.module.scss";
import NavButton from "./Button/NavButton";
import { Tree } from "../../../theme";
import styled from "styled-components";
import { useState } from "react";
import ThemeButtons from "./Button/ThemeButtons";

const GNB = styled.nav`
  > svg {
    fill: ${(props) => props.theme.SECONDARY_50};
  }
  > button {
    background-color: ${(props) => props.theme.PRIMARY_30};
  }
`;

const Nav = () => {
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
      <button className={styles.themeToggle}>
        <p>{Tree.ICON}</p>
        <ThemeButtons />
      </button>
    </GNB>
  );
};

export default Nav;
