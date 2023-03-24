import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { ChevronDown } from "../../assets/icon";
import cx from "classnames";
import styles from "./photo.module.scss";
interface PhotoProps {
  data: {
    planner: any;
  };
}

// TODO : 이번 달 photoUrl만 받아오기. month 조절은 layout에서 하기 (chevron layout으로 이동)

const Photo = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const [photoMonth, setMonth] = useState(month);

  const monthStr = new Date(year, photoMonth, 1).toLocaleString("en-US", {
    month: "long",
  });

  const { data } = useOutletContext<PhotoProps>();
  console.log("photo", monthStr, data.planner[monthStr]);
  return (
    <main>
      <ChevronDown className={cx(styles.icon, styles.left)} />
      <ChevronDown className={cx(styles.icon, styles.right)} />
    </main>
  );
};

export default Photo;
