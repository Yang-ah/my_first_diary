import { useState } from "react";
import styles from "./add.module.scss";

interface Ioption {
  [key: string]: boolean;
}

const Add = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({ form });
  };

  const [form, setForm] = useState({
    category: "work",
    date: "",
    content: "",
    importance: 1,
    time: "",
    place: "",
    with: "",
  });

  const [option, setOption] = useState<Ioption>({
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

  const onClickRadio = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    setForm({ ...form, [name]: value });
  };

  return (
    <main className={styles.container}>
      <form className={styles.form} id="addForm" onSubmit={onSubmit}>
        <label>Category</label>
        <button
          type="button"
          id="work"
          name="category"
          value="work"
          onClick={onClickRadio}
        >
          Work
        </button>
        <button
          type="button"
          id="plan"
          name="category"
          value="plan"
          onClick={onClickRadio}
        >
          Plan
        </button>

        <label>Date</label>
        <input
          type="date"
          name="date"
          value={form.date}
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

        {/* TODO : range 스타일 추가하기 */}
        <label>Importance</label>
        <input
          type="range"
          name="importance"
          className={styles.two}
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

        {/* TODO : button 위에 +버튼 만들기 */}
        <button type="button" name="time" onClick={onOption}>
          Time
        </button>
        <button type="button" name="place" onClick={onOption}>
          Place
        </button>
        <button type="button" name="with" onClick={onOption}>
          With
        </button>
      </form>

      <button type="submit" form="addForm" className={styles.submit_button}>
        Add
      </button>
    </main>
  );
};

export default Add;
