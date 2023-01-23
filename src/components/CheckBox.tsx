import { useRecoilState } from "recoil";
import {
  onTrackerAtom,
  onDiaryAtom,
  onPlanAtom,
  onWorkAtom,
  onLockAtom,
} from "./../atom";
import styled from "styled-components";

const CheckContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  border-radius: 10px;

  color: ${(props) => props.theme.secondColor};
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

const TrackerContainer = styled(CheckContainer)`
  height: 10px;
  justify-content: flex-end;
  margin-right: 40px;
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
  const [onDiary, setDiary] = useRecoilState(onDiaryAtom);
  const [onPlan, setPlan] = useRecoilState(onPlanAtom);
  const [onWork, setWork] = useRecoilState(onWorkAtom);
  const [onLock, setLock] = useRecoilState(onLockAtom);

  const toggleDiaryAtom = () => {
    setDiary((prev) => !prev);
  };
  const togglePlanAtom = () => {
    onDiary
      ? alert("다이어리 해제 후 다시 클릭해주세요.")
      : setPlan((prev) => !prev);
  };
  const toggleWorkAtom = () => {
    onDiary
      ? alert("다이어리 해제 후 다시 클릭해주세요.")
      : setWork((prev) => !prev);
  };
  const toggleLockAtom = () => {
    setLock((prev) => !prev);
  };

  return (
    <CheckContainer>
      <div>
        <input id="plan" type="checkbox" onClick={togglePlanAtom} />
        <label htmlFor="plan">
          {onDiary ? (
            <i className="fa-regular fa-square"></i>
          ) : onPlan ? (
            <i className="fa-solid fa-square-check"></i>
          ) : (
            <i className="fa-regular fa-square"></i>
          )}
          PLAN
        </label>
      </div>
      <div>
        <input id="work" type="checkbox" onClick={toggleWorkAtom} />
        <label htmlFor="work">
          {onDiary ? (
            <i className="fa-regular fa-square"></i>
          ) : onWork ? (
            <i className="fa-solid fa-square-check"></i>
          ) : (
            <i className="fa-regular fa-square"></i>
          )}
          WORK
        </label>
      </div>
      <div>
        <input id="diary" type="checkbox" onClick={toggleDiaryAtom} />
        <label htmlFor="diary">
          {onDiary ? (
            <i className="fa-solid fa-square-check"></i>
          ) : (
            <i className="fa-regular fa-square"></i>
          )}
          DIARY
        </label>
      </div>
      <div>
        <input id="lock" type="checkbox" onClick={toggleLockAtom} />
        <label htmlFor="lock">
          {onLock ? (
            <i className="fa-solid fa-square-check"></i>
          ) : (
            <i className="fa-regular fa-square"></i>
          )}
          LOCK<p>{onLock ? "🔒" : "🔓"}</p>
        </label>
      </div>
    </CheckContainer>
  );
}

export default CheckBox;
