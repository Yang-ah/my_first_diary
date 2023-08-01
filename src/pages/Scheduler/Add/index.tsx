import { useState } from "react";
import dayjs from "dayjs";
import styles from "./add.module.scss";
import styled from "styled-components";
import cx from "classnames";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { dataAtom } from "../../../state";
import { Toast } from "../../../components";
import { monthStr } from "../../../utils/date";

interface IOption {
  [key: string]: boolean;
}

const Add = () => {
  const navigate = useNavigate();
  const goScheduler = () => navigate("/scheduler");
  const [data, setData] = useRecoilState(dataAtom);
  const today = dayjs().format("YYYY-MM-DD");
  const now = `${new Date().getHours()}:${new Date().getMinutes()}`;
  const [onToast, setOnToast] = useState(false);

  const [form, setForm] = useState({
    category: "work",
    date: today,
    content: "",
    importance: 4,
    time: "",
    place: "",
    with: "",
  });

  const [option, setOption] = useState<IOption>({
    time: false,
    place: false,
    with: false,
  });

  const month = monthStr(+form.date.slice(5, 7) - 1);
  const date = +form.date.slice(8, 10);

  const showToast = () => {
    setOnToast(true);
    const timer = setTimeout(() => {
      setOnToast(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  };

  const onOption = (e: React.FormEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;

    option[name]
      ? setOption({ ...option, [name]: false })
      : setOption({ ...option, [name]: true });
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setForm({ ...form, [name]: value });
  };

  const onClickCategory = (e: React.FormEvent<HTMLButtonElement>) => {
    const { name, value } = e.currentTarget;
    setForm({ ...form, [name]: value });
  };

  const onClickAdd = () => {
    showToast();

    const newMonthData = [...data[month]];
    const newSchedule = {
      content: form.content,
      importance: form.importance,
      time: form.time,
      with: form.with,
      place: form.place,
    };

    if (form.category === "plan") {
      const newDayData = {
        ...newMonthData[date - 1],
        schedule: {
          ...newMonthData[date - 1].schedule,
          plan: [...newMonthData[date - 1].schedule.plan, newSchedule],
        },
      };

      newMonthData[+date - 1] = newDayData;
      const updatedObj = { ...data, [month]: newMonthData };
      setData(updatedObj);
    }

    if (form.category === "work") {
      const newDayData = {
        ...newMonthData[date - 1],
        schedule: {
          ...newMonthData[date - 1].schedule,
          work: [...newMonthData[date - 1].schedule.work, newSchedule],
        },
      };
      newMonthData[date - 1] = newDayData;
      const updatedObj = { ...data, [month]: newMonthData };
      setData(updatedObj);
    }
    goScheduler();
  };

  return (
    <Container className={styles.container}>
      <div className={styles.form} id="addForm">
        <label>Category</label>
        <Category
          type="button"
          id="work"
          name="category"
          value="work"
          onClick={onClickCategory}
          className={
            form.category === "work" ? "selected" : styles.categoryButton
          }
        >
          Work
        </Category>
        <Category
          type="button"
          id="plan"
          name="category"
          value="plan"
          onClick={onClickCategory}
          className={
            form.category === "plan" ? "selected" : styles.categoryButton
          }
        >
          Plan
        </Category>

        <label>Date</label>
        <input
          type="date"
          name="date"
          value={form.date ? form.date : today}
          className={styles.two}
          onChange={onChange}
        />

        <label htmlFor="content">Content</label>
        <input
          id="content"
          type="text"
          name="content"
          className={styles.two}
          onChange={onChange}
          maxLength={11}
          placeholder="스케줄을 간단히 입력해보세요. (최대 11자)"
        />

        <label>Importance : {form.importance}</label>
        <input
          type="range"
          name="importance"
          className={cx(styles.two, styles.range)}
          min="1"
          max="4"
          onChange={onChange}
        />
        {option.time && (
          <>
            <label>Time</label>
            <input
              type="time"
              name="time"
              className={styles.two}
              onChange={onChange}
              value={form.time ? form.time : now}
            />
          </>
        )}
        {option.place && (
          <>
            <label>Place</label>
            <input
              type="text"
              name="place"
              className={styles.two}
              onChange={onChange}
              maxLength={8}
              placeholder="어디에서 진행되나요? (최대 8글자)"
            />
          </>
        )}

        {option.with && (
          <>
            <label>With</label>
            <input
              type="text"
              name="with"
              className={styles.two}
              onChange={onChange}
              maxLength={7}
              placeholder="누구와 함께하나요? (최대 7글자)"
            />
          </>
        )}

        <OptionButton
          type="button"
          name="time"
          onClick={onOption}
          className={cx(styles.optionButton, option.time ? "minus" : "plus")}
        >
          Time
          <div>{option.time ? "-" : "+"}</div>
        </OptionButton>

        <OptionButton
          type="button"
          name="place"
          onClick={onOption}
          className={cx(styles.optionButton, option.place ? "minus" : "plus")}
        >
          Place
          <div>{option.place ? "-" : "+"}</div>
        </OptionButton>

        <OptionButton
          type="button"
          name="with"
          onClick={onOption}
          className={cx(styles.optionButton, option.with ? "minus" : "plus")}
        >
          With
          <div>{option.with ? "-" : "+"}</div>
        </OptionButton>
      </div>

      <AddButton
        className={styles.addButton}
        type="button"
        onClick={onClickAdd}
      >
        Add {form.category}
      </AddButton>
      <Toast className={cx(styles.toast, { [styles.onToast]: onToast })}>
        {`${date} ${month.slice(0, 3)} ${
          form.category
        } 스케줄 변경하였습니다. :)`}
      </Toast>
    </Container>
  );
};

const Container = styled.main`
  label {
    background-color: ${(props) => props.theme.PRIMARY_30};
    color: white;
  }

  input[type="range"] {
    ::-webkit-slider-thumb {
      background-color: ${(props) => props.theme.PRIMARY_30};
    }
  }
`;

const Category = styled.button`
  background-color: transparent;

  &.selected,
  &:hover {
    background-color: ${(props) => props.theme.PRIMARY_30};
    color: white;
  }
`;

const AddButton = styled.button`
  background-color: ${(props) => props.theme.PRIMARY_30};
  color: white;
  font-size: 18px;
`;

const OptionButton = styled.button`
  background-color: transparent;
  > div {
    background-color: ${(props) => props.theme.PRIMARY_30};
    color: white;
  }

  &.minus {
    background-color: ${(props) => props.theme.PRIMARY_30};
    color: white;
    > div {
      background-color: white;
      color: ${(props) => props.theme.PRIMARY_30};
      border: 1px solid ${(props) => props.theme.PRIMARY_30};
    }
  }
`;

export default Add;
