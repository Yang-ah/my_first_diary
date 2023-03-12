import { useState } from "react";
import styles from "./add.module.scss";
import cx from "classnames";
import styled from "styled-components";
import { thisYear, thisMonth } from "../../components/Common/Dates";
import { Red } from "../../theme";

const Container = styled.main`
  color: ${Red.fontColor};

  label {
    background-color: ${Red.thirdColor};
  }

  button,
  input {
    color: ${Red.fontColor};
    background-color: #ffffff8a;
  }

  input[type="range"] {
    background-color: ${Red.thirdColor};
    ::-webkit-slider-thumb {
      background-color: ${Red.fontColor};
    }
  }
`;

const Category = styled.button`
  color: ${Red.fontColor};
  background-color: #ffffff8a;

  &.selected,
  &:hover {
    background-color: ${Red.primaryColor};
    color: white;
  }
`;

const AddButton = styled.button`
  background-color: ${Red.thirdColor};

  &:hover {
    background-color: ${Red.primaryColor};
    color: white;
  }
`;

const OptionButton = styled.button`
  background-color: ${Red.backgroundColor};

  &.plus {
    background-color: ${Red.thirdColor};
  }

  > div {
    background-color: ${Red.primaryColor};
    color: white;
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
          className={styles.optionButton}
        >
          Time
          <div className={option.time ? "minus" : "plus"}>
            {option.time ? "-" : "+"}
          </div>
        </OptionButton>

        <OptionButton
          type="button"
          name="place"
          onClick={onOption}
          className={styles.optionButton}
        >
          Place
          <div className={option.place ? "minus" : "plus"}>
            {option.place ? "-" : "+"}
          </div>
        </OptionButton>

        <OptionButton
          type="button"
          name="with"
          onClick={onOption}
          className={styles.optionButton}
        >
          With
          <div className={option.with ? "minus" : "plus"}>
            {option.with ? "-" : "+"}
          </div>
        </OptionButton>
      </form>

      <AddButton type="submit" form="addForm">
        Add {form.category}
      </AddButton>
    </Container>
  );
};

export default Add;
