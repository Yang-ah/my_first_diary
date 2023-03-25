import styles from "./photo.module.scss";
import { useRecoilValue } from "recoil";
import { dataAtom } from "../../atom";
import { useEffect, useState } from "react";

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const Photo = () => {
  const data = useRecoilValue(dataAtom);

  const monthStr = new Date(2023, 3, 1).toLocaleString("en-US", {
    month: "long",
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <main className={styles.wrap}>
      <section>
        {days.map((day) => {
          return (
            <p className={styles.days} key={day}>
              {day}
            </p>
          );
        })}

        {[0, 1, 2, 3].map((item) => {
          return (
            <form className={styles.dateWrap} key={"day" + item}>
              <label>
                <p>{item}</p>
                <input type="file" accept="image" />
                <button type="button"></button>
              </label>
            </form>
          );
        })}
      </section>
    </main>
  );
};

export default Photo;
