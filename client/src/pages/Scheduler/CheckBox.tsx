import { useRecoilState } from "recoil";
import { onTrackerAtom } from "../../atom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { CheckContainer } from "../../components/Common";

const TrackerContainer = styled(CheckContainer)`
  justify-content: flex-end;
  position: relative;
  bottom: 20px;
  right: 5px;
  z-index: 100;
  height: 20px;
`;

export const Tracker = () => {
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
};

const CheckBox = () => {
  const [onPlan, setPlan] = useState(true);
  const [onWork, setWork] = useState(true);

  const planToggle = () => setPlan((cur) => !cur);
  const workToggle = () => setWork((cur) => !cur);

  const navigate = useNavigate();
  const goScheduler = () => navigate("/list/scheduler");
  const goPlan = () => navigate("/list/scheduler/plan");
  const goWork = () => navigate("/list/scheduler/work");

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
};

export default CheckBox;
