import styles from "./header.module.scss";
import { useLocation } from "react-router-dom";
import { thisMonthAtom } from "../../../atom";
import { useRecoilValue } from "recoil";
import { year } from "../../../hooks";

const Header = () => {
  const location = useLocation();
  const month = useRecoilValue(thisMonthAtom);
  const monthStr = new Date(year, month, 1).toLocaleString("en-US", {
    month: "long",
  });

  return (
    <header className={styles.header}>
      {location.pathname.includes("scheduler") && monthStr}
      {location.pathname.includes("diary") && monthStr}
      {location.pathname.includes("photo") && monthStr}
      {location.pathname.includes("tracker") && year}
    </header>
  );
};
export default Header;
