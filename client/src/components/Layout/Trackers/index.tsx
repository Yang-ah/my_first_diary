import { useState } from "react";
import { useLocation } from "react-router-dom";
import { CheckBox } from "../../Common";

interface ITracker {
  className: string;
}

const Trackers = ({ className, ...props }: ITracker) => {
  const location = useLocation();
  const trackerPath = location.pathname === "/tracker";
  const diaryPath = location.pathname === "/diary";
  const schedulerPath = location.pathname.includes("scheduler");

  return (
    <header className={className} {...props}>
      {trackerPath &&
        ["emotion", "exercise"].map((child: string) => {
          return <CheckBox key={child} child={child} />;
        })}

      {(diaryPath || schedulerPath) && <CheckBox child="tracker" />}
    </header>
  );
};

export default Trackers;
