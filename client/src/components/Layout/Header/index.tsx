import styles from "./header.module.scss";
import { useLocation } from "react-router-dom";

const Header = () => {
  const month = new Date()
    .toLocaleString("en-US", { month: "long" })
    .toUpperCase();

  const year = new Date().getFullYear() + "";
  const location = useLocation();

  return (
    <header className={styles.header}>
      {location.pathname.includes("list") && month}
      {location.pathname.includes("photo") && month}
      {location.pathname.includes("tracker") && year}
    </header>
  );
};
export default Header;
