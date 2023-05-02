import styles from "./cell.module.scss";
import styled from "styled-components";
import cx from "classnames";
import { ISchedule, dataAtom } from "../../../state";
import { IconMinus, IconStar } from "../../../assets/icon";
import { useRecoilState } from "recoil";

interface ICell {
  index: number;
  schedule: ISchedule;
  lock: boolean;
  category: string;
  month: string;
  date: number;
}

const Wrap = styled.div`
  &.plan1 {
    svg {
      fill: ${(props) => props.theme.PRIMARY_10};
    }
  }
  &.plan2 {
    svg {
      fill: ${(props) => props.theme.PRIMARY_20};
    }
  }
  &.plan3 {
    svg {
      fill: ${(props) => props.theme.PRIMARY_30};
    }
  }
  &.plan4 {
    svg {
      fill: ${(props) => props.theme.PRIMARY_40};
    }
  }
  &.work1 {
    svg {
      fill: ${(props) => props.theme.SECONDARY_10};
    }
  }
  &.work2 {
    svg {
      fill: ${(props) => props.theme.SECONDARY_20};
    }
  }
  &.work3 {
    svg {
      fill: ${(props) => props.theme.SECONDARY_30};
    }
  }
  &.work4 {
    svg {
      fill: ${(props) => props.theme.SECONDARY_40};
    }
  }
`;

const Cell = ({ index, schedule, category, month, date, lock }: ICell) => {
  const [data, setData] = useRecoilState(dataAtom);

  const deleteCell = () => {
    const newMonthData = [...data[month]];

    if (category === "work") {
      const resultArr = newMonthData[date - 1].schedule.work.filter(
        (item, idx) => idx !== index
      );
      const newData = {
        ...newMonthData[+date - 1],
        schedule: {
          ...newMonthData[date - 1].schedule,
          work: resultArr,
        },
      };
      newMonthData[date - 1] = newData;
      const updatedObj = { ...data, [month]: newMonthData };
      setData(updatedObj);
    }

    if (category === "plan") {
      const resultArr = newMonthData[date - 1].schedule.plan.filter(
        (item, idx) => idx !== index
      );
      const newData = {
        ...newMonthData[+date - 1],
        schedule: {
          ...newMonthData[date - 1].schedule,
          plan: resultArr,
        },
      };
      newMonthData[date - 1] = newData;
      const updatedObj = { ...data, [month]: newMonthData };
      setData(updatedObj);
    }
  };

  return (
    <Wrap className={cx(styles.cell, `${category}${schedule.importance}`)}>
      <div className={styles.front}>
        <div className={styles.starWrap}>
          <span>{schedule.importance}</span>
          <IconStar />
        </div>
        <span>{schedule.content}</span>
      </div>
      {(schedule.time || schedule.with || schedule.place) && (
        <div className={styles.back}>
          {schedule.time && <p className={styles.time}>{schedule?.time}</p>}
          {schedule.with && <p className={styles.with}>w/{schedule?.with}</p>}
          {schedule.place && <p className={styles.place}>@{schedule?.place}</p>}
        </div>
      )}
      {lock || (
        <button className={styles.deleteButton} onClick={deleteCell}>
          -
        </button>
      )}
    </Wrap>
  );
};

export default Cell;
