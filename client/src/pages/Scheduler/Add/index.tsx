import { useState } from "react";
import styles from "./add.module.scss";
import cx from "classnames";
import styled from "styled-components";
import { thisYear, thisMonth } from "../../../components/Common/Dates";

const Container = styled.main`
  color: ${(props) => props.theme.fontColor};

  label {
    background-color: ${(props) => props.theme.primaryColor};
  }

  button,
  input {
    color: ${(props) => props.theme.fontColor};
    border: 1px solid ${(props) => props.theme.primaryColor};
  }

  input[type="range"] {
    ::-webkit-slider-thumb {
      background-color: ${(props) => props.theme.fontColor};
    }
  }
`;

const Category = styled.button`
  color: ${(props) => props.theme.fontColor};
  background-color: #ffffff8a;
  border: 1px solid ${(props) => props.theme.primaryColor};

  &.selected,
  &:hover {
    background-color: ${(props) => props.theme.primaryColor};
  }
`;

const AddButton = styled.button`
  background-color: ${(props) => props.theme.primaryColor};

  &:hover {
    background-color: ${(props) => props.theme.pointColor};
    border-color: ${(props) => props.theme.pointColor};
  }
`;

const OptionButton = styled.button`
  background-color: #ffffff8a;
  > div {
    background-color: ${(props) => props.theme.primaryColor};
    color: white;
  }

  &.minus {
    background-color: ${(props) => props.theme.primaryColor};
    > div {
      background-color: white;
      color: ${(props) => props.theme.primaryColor};
      border: 1px solid ${(props) => props.theme.primaryColor};
    }
  }
`;

interface IOption {
  [key: string]: boolean;
}

const Add = () => {
  const date = (thisMonth + 1).toString().padStart(2, "0");
  const day = new Date().getDate().toString().padStart(2, "0");
  const today = `${thisYear}-${date}-${day}`;
  const now = `${new Date().getHours()}:${new Date().getMinutes()}`;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({ form });
  };

  const [form, setForm] = useState({
    category: "Work",
    date: "",
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

  const onOption = (e: React.FormEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;

    option[name]
      ? setOption({ ...option, [name]: false })
      : setOption({ ...option, [name]: true });
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setForm({ ...form, [name]: value });
    console.log({ form });
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
              name="with"
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
