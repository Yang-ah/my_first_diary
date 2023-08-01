import { useNavigate } from "react-router-dom";
import { IconThumbTack } from "../../../assets/icon";
import styles from "./nav.module.scss";
import NavButton from "./NavButton";
import { Tree, Peach, Apple, Dark } from "../../../theme";
import styled from "styled-components";
import { IconApple } from "../../../assets/icon";
import cx from "classnames";
import { Toast } from "../../Common";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { isLoginAtom } from "../../../state";

interface INav {
  icon: string;
  onClick: any;
  path: string;
}

const Nav = ({ icon, onClick, path }: INav) => {
  const [onToast, setOnToast] = useState(false);
  const isLogin = useRecoilValue(isLoginAtom);

  const navigate = useNavigate();

  const showToast = () => {
    setOnToast(true);
    const timer = setTimeout(() => {
      setOnToast(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  };

  const goPhoto = () => (isLogin ? navigate("/photo") : showToast());
  const goSchedule = () => (isLogin ? navigate("/scheduler") : showToast());
  const goTracker = () => (isLogin ? navigate("/tracker") : showToast());
  const goDiary = () => (isLogin ? navigate("/diary") : showToast());

  return (
    <GNB className={styles.nav}>
      <label className={cx(styles.fixedCheckBox, "fixed")}>
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
        <p>{icon === "apple" ? <IconApple className="apple" /> : icon}</p>

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
            {Dark.ICON}
          </button>
        </ThemeButtons>
      </div>
      <Toast className={cx(styles.toast, { [styles.onToast]: onToast })}>
        로그인 후 이용부탁드립니다.
      </Toast>
    </GNB>
  );
};

const GNB = styled.nav`
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
    background-color: ${Dark.PRIMARY_30};
  }
`;

export default Nav;
