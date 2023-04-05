import { useRecoilState, useRecoilValue } from "recoil";
import { getDataSelector, thisMonthAtom } from "../../atom";
import { CheckBox, Line, LineHeader } from "../../components";
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
      <LineHeader>
        <div className={styles.checkBoxWrap}>
          <CheckBox className={styles.checkbox} name="plan">
            plan
          </CheckBox>
          <CheckBox className={styles.checkbox} name="work">
            work
          </CheckBox>
        </div>
      </LineHeader>

      {data[monthStr] &&
        data[monthStr].map((item) => {
          return (
            <Line key={"scheduler" + item.date} date={item.date}>
              {item.schedule.plan}
            </Line>
          );
        })}
    </main>
  );
};

export default Scheduler;
