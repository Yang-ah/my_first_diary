import styles from "./photo.module.scss";
import { useRecoilState, useRecoilValue } from "recoil";
import { dataAtom, thisMonthAtom } from "../../status";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { IconModify, IconPlus } from "../../assets/icon";
import cx from "classnames";
import { year } from "../../hooks";
import axios from "axios";

const Main = styled.main`
  color: ${(props) => props.theme.PRIMARY_50};
  .day {
    background-color: ${(props) => props.theme.PRIMARY_30};
  }
  div {
    background-color: ${(props) => props.theme.PRIMARY_10};
  }
`;

interface ILabel {
  photoUrl?: string;
}

const Label = styled.label<ILabel>`
  &.nonePhoto {
    background-color: ${(props) => props.theme.PRIMARY_10};
    > .add {
      background-color: ${(props) => props.theme.SECONDARY_30};
    }
  }

  // have a photo
  &:not(.nonePhoto) {
    color: white;
    background: no-repeat center/120% url(${(props) => props.photoUrl});
    transition: 0.2s opacity ease-in;

    &:hover {
      opacity: 0.4;
    }
  }
`;

const Photo = () => {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [data, setData] = useRecoilState(dataAtom);
  const month = useRecoilValue(thisMonthAtom);
  const monthStr = new Date(year, month, 1).toLocaleString("en-US", {
    month: "long",
  });

  const [otherDates, setOtherDates] = useState({
    prevDates: [1, 2],
    nextDates: [3, 4],
  });

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

        {data[monthStr] &&
          data[monthStr].map((item) => {
            return (
              <form
                encType="multipart/form-data"
                className={styles.dateWrap}
                key={monthStr + item.date}
              >
                <Label
                  photoUrl={item.photoUrl}
                  className={item.photoUrl || "nonePhoto"}
                >
                  <p>{item.date + ""}</p>
                  <input type="file" accept="image/*" hidden />

                  <button
                    type="button"
                    className={cx(item.photoUrl ? styles.modify : "add")}
                  >
                    {item.photoUrl ? <IconModify /> : <IconPlus />}
                  </button>
                </Label>
              </form>
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
