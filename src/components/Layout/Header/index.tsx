import styles from "./header.module.scss";
import { useLocation } from "react-router-dom";
import { dataAtom, thisMonthAtom } from "../../../state";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { setInitData } from "../../../state/initData";
import { setTestData } from "../../../state/testData";
import { year } from "../../../utils/date";

const Header = () => {
  const location = useLocation();
  const month = useRecoilValue(thisMonthAtom);
  const monthStr = new Date(year, month, 1).toLocaleString("en-US", {
    month: "long",
  });
  const setData = useSetRecoilState(dataAtom);

  const onClick = (e: React.FormEvent<HTMLButtonElement>) => {
    if (e.currentTarget.name === "reset") {
      setData(setInitData);
    }
    if (e.currentTarget.name === "test") {
      setData(setTestData);
    }
  };

  return (
    <header className={styles.header}>
      <span className={styles.title}>
        {location.pathname.includes("scheduler") && monthStr}
        {location.pathname.includes("diary") && monthStr}
        {location.pathname.includes("photo") && monthStr}
        {location.pathname.includes("tracker") && year}
      </span>
      <div className={styles.buttons}>
        <button name="reset" type="button" onClick={onClick}>
          데이터 초기화
        </button>
        <button name="test" type="button" onClick={onClick}>
          테스트 데이터
        </button>
      </div>
    </header>
  );
};
export default Header;
