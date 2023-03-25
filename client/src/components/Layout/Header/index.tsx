import styles from "./header.module.scss";
import { useLocation } from "react-router-dom";

interface IMonth {
  month: string;
  year: string;
}

const Header = ({ month, year }: IMonth) => {
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
