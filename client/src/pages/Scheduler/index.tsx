import { useRecoilState, useRecoilValue } from "recoil";
import { getDataSelector, thisMonthAtom } from "../../atom";
import { CheckBox, Line } from "../../components";
import { year } from "../../hooks";
import styles from "./scheduler.module.scss";

const Scheduler = () => {
  const [data, setData] = useRecoilState(getDataSelector);
  const month = useRecoilValue(thisMonthAtom);
  const monthStr = new Date(year, month, 1).toLocaleString("en-US", {
    month: "long",
  });

  return (
    <main>
      {data[monthStr] &&
        data[monthStr].map((item) => {
          return (
            <Line key={"scheduler" + item.date} date={item.date} value="">
              {item.schedule.plan}
            </Line>
          );
        })}
    </main>
  );
};

export default Scheduler;
