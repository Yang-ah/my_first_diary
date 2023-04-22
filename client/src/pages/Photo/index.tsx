import { useEffect, useState } from "react";
import { IData, dataAtom, thisMonthAtom } from "../../state";
import { useRecoilValue } from "recoil";
import { getUserId, monthStr, year } from "../../hooks";
import { getMonthData } from "../../api/Data";
import PhotoCell from "./PhotoCell";
import styles from "./photo.module.scss";
import styled from "styled-components";
import cx from "classnames";

const Main = styled.main`
  color: ${(props) => props.theme.PRIMARY_50};
  .day {
    background-color: ${(props) => props.theme.PRIMARY_30};
  }
  div {
    background-color: ${(props) => props.theme.PRIMARY_10};
  }
`;

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const Photo = () => {
  const data = useRecoilValue(dataAtom);
  const month = useRecoilValue(thisMonthAtom);
  const [otherDates, setOtherDates] = useState({
    prevDates: [1, 2],
    nextDates: [3, 4],
  });
  const [monthData, setMonthData] = useState<IData[] | any>(
    data[monthStr(month)]
  );

  const fetchMonthData = async () => {
    const id = getUserId();
    const response = await getMonthData(id, monthStr(month));
    setMonthData(response.data);
  };

  const changeOtherDates = () => {
    const prev: number[] = [];
    const next: number[] = [];

    const thisMonthStart = new Date(year, month, 1).getDay();
    const thisMonthEndDay = new Date(year, month + 1, 0).getDay();
    const lastMonthLastDate = new Date(year, month, 0).getDate();

    for (let i = thisMonthStart - 1; i >= 0; i--) {
      prev.push(lastMonthLastDate - i);
    }

    for (let i = 1; i < 7 - thisMonthEndDay; i++) {
      next.push(i);
    }

    setOtherDates(() => {
      return { prevDates: prev, nextDates: next };
    });
  };

  useEffect(() => {
    changeOtherDates();
    fetchMonthData();
  }, [data, month]);

  return (
    <Main className={styles.wrap}>
      <header>
        {days.map((day) => {
          return (
            <p className={cx("day", styles.day)} key={day}>
              {day}
            </p>
          );
        })}
      </header>

      <section className={cx(styles.datesSection, "datesSection")}>
        {otherDates.prevDates.map((date) => {
          return (
            <div className={styles.otherDateWrap} key={"prev" + date}>
              {date + ""}
            </div>
          );
        })}

        {monthData &&
          monthData.map((item: IData) => {
            return (
              <PhotoCell
                key={monthStr(month) + item.date}
                item={item}
                month={monthStr(month)}
                id={getUserId()}
                fetchMonthData={fetchMonthData}
              />
            );
          })}

        {otherDates.nextDates.map((date) => {
          return (
            <div className={styles.otherDateWrap} key={"prev" + date}>
              {date + ""}
            </div>
          );
        })}
      </section>
    </Main>
  );
};

export default Photo;
