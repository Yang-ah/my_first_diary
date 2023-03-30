import { useRecoilState, useRecoilValue } from "recoil";
import { getDataSelector, thisMonthAtom } from "../../atom";
import { Line, LineHeader } from "../../components";
import { year } from "../../hooks";

const Diary = () => {
  const [data, setData] = useRecoilState(getDataSelector);
  const month = useRecoilValue(thisMonthAtom);
  const monthStr = new Date(year, month, 1).toLocaleString("en-US", {
    month: "long",
  });

  return (
    <main>
      <LineHeader />
      {data[monthStr] &&
        data[monthStr].map((item) => {
          return (
            <Line key={"diary" + item.date} date={item.date}>
              {item.diary}
            </Line>
          );
        })}
    </main>
  );
};

export default Diary;
