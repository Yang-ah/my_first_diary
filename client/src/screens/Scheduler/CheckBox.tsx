import { useRecoilState } from "recoil";
import { onTrackerAtom } from "../../atom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const CheckContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  border-radius: 10px;
  i {
    font-size: 13px;
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
    p {
      margin-bottom: 3px;
    }
  }
`;

const TrackerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  position: relative;
  bottom: 20px;
  right: 5px;
  z-index: 100;
  height: 20px;
  input {
    display: none;
  }
  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    i {
      margin-right: 2px;
    }
    p {
      margin-bottom: 3px;
    }
  }
`;

export function Tracker() {
  const [onTracker, SetTracker] = useRecoilState(onTrackerAtom);
  const toggleTrackerAtom = () => SetTracker((prev) => !prev);
  return (
    <TrackerContainer>
      <input id="tracker" type="checkbox" onClick={toggleTrackerAtom} />
      <label htmlFor="tracker">
        {onTracker ? (
          <i className="fa-solid fa-square-check"></i>
        ) : (
          <i className="fa-regular fa-square"></i>
        )}
        TRACKER
      </label>
    </TrackerContainer>
  );
}

function CheckBox() {
  const navigate = useNavigate();

  const [onPlan, setPlan] = useState(false);
  const [onWork, setWork] = useState(false);

  const planToggle = () => {
    setPlan((cur) => !cur);
  };
  const workToggle = () => {
    setWork((cur) => !cur);
  };

  const goScheduler = () => {
    navigate("/list/scheduler");
  };

  const goPlan = () => {
    navigate("/list/scheduler/plan");
  };

  const goWork = () => {
    navigate("/list/scheduler/work");
  };

  useEffect(() => {
    if (onPlan === onWork) {
      goScheduler();
    } else if (onPlan && !onWork) {
      goPlan();
    } else if (!onPlan && onWork) {
      goWork();
    }
  }, [onPlan, onWork]);

  return (
    <CheckContainer>
      <div>
        <input type="checkbox" id="plan" onClick={planToggle} />
        <label htmlFor="plan">
          {onPlan ? (
            <i className="fa-solid fa-square-check"></i>
          ) : (
            <i className="fa-regular fa-square"></i>
          )}
          <span>PLAN</span>
        </label>
      </div>
      <div>
        <input type="checkbox" id="work" onClick={workToggle} />
        <label htmlFor="work">
          {onWork ? (
            <i className="fa-solid fa-square-check"></i>
          ) : (
            <i className="fa-regular fa-square"></i>
          )}
          <span>WORK</span>
        </label>
      </div>
    </CheckContainer>
  );
}

export default CheckBox;
