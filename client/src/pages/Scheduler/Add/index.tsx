import { useState } from "react";
import styles from "./add.module.scss";
import cx from "classnames";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { thisMonthAtom } from "../../../status";
import { year } from "../../../hooks";

const Container = styled.main`
  color: ${(props) => props.theme.SECONDARY_10};

  label {
    background-color: ${(props) => props.theme.PRIMARY_30};
  }

  button,
  input {
    color: ${(props) => props.theme.PRIMARY_50};
    border: 1px solid ${(props) => props.theme.PRIMARY_30};
  }

  input[type="range"] {
    ::-webkit-slider-thumb {
      background-color: ${(props) => props.theme.PRIMARY_50};
    }
  }
`;

const Category = styled.button`
  color: ${(props) => props.theme.PRIMARY_50};
  background-color: #ffffff8a;
  border: 1px solid ${(props) => props.theme.PRIMARY_30};

  &.selected,
  &:hover {
    background-color: ${(props) => props.theme.PRIMARY_30};
  }
`;

const AddButton = styled.button`
  background-color: ${(props) => props.theme.PRIMARY_30};

  &:hover {
    background-color: ${(props) => props.theme.PRIMARY_50};
    border-color: ${(props) => props.theme.PRIMARY_50};
  }
`;

const OptionButton = styled.button`
  background-color: #ffffff8a;
  > div {
    background-color: ${(props) => props.theme.PRIMARY_30};
    color: white;
  }

  &.minus {
    background-color: ${(props) => props.theme.PRIMARY_30};
    > div {
      background-color: white;
      color: ${(props) => props.theme.PRIMARY_30};
      border: 1px solid ${(props) => props.theme.PRIMARY_30};
    }
  }
`;

interface IOption {
  [key: string]: boolean;
}

const Add = () => {
  const month = useRecoilValue(thisMonthAtom);
  const date = (month + 1).toString().padStart(2, "0");
  const day = new Date().getDate().toString().padStart(2, "0");
  const today = `${year}-${date}-${day}`;
  const now = `${new Date().getHours()}:${new Date().getMinutes()}`;

  const [form, setForm] = useState({
    category: "Work",
    date: today,
    content: "",
    importance: 4,
    time: "",
    place: "",
    who: "",
  });

  const [option, setOption] = useState<IOption>({
    time: false,
    place: false,
    who: false,
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    e.preventDefault();
    const { name, value } = e.currentTarget;
    setForm({ ...form, [name]: value });
  };

  return (
    <Container className={styles.container}>
      <form className={styles.form} id="addForm" onSubmit={onSubmit}>
        <label>Category</label>
        <Category
          type="button"
          id="work"
          name="category"
          value="Work"
          onClick={onClickCategory}
          className={
            form.category === "Work" ? "selected" : styles.categoryButton
          }
        >
          Work
        </Category>
        <Category
          type="button"
          id="plan"
          name="category"
          value="Plan"
          onClick={onClickCategory}
          className={
            form.category === "Plan" ? "selected" : styles.categoryButton
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
            />
          </>
        )}

        {option.with && (
          <>
            <label>With</label>
            <input
              type="text"
              name="who"
              className={styles.two}
              onChange={onChange}
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
      </form>

      <AddButton type="submit" form="addForm">
        Add {form.category}
      </AddButton>
    </Container>
  );
};

export default Add;
