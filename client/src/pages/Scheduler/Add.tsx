import { useState } from "react";
import styled from "styled-components";
import {
  thisMonth,
  thisMonthEnd,
  thisYear,
} from "../../components/Common/Dates";
import styles from "./add.module.scss";

// category

interface ICategory {
  checked: boolean;
}

const CategoryLabel = styled.label<ICategory>`
  background-color: ${(props) =>
    props.checked ? props.theme.secondColor : "inherit"};

  :hover {
    background-color: ${(props) => props.theme.secondColor};
  }
`;

const ContentInput = styled.input`
  background-color: ${(props) => props.theme.fourthColor};
`;

const Label = styled.label`
  background-color: ${(props) => props.theme.thirdColor};
`;

const DateInput = styled.input`
  background-color: ${(props) => props.theme.fourthColor};
  font-size: 16px;
`;

const InputRange = styled.input`
  background-color: ${(props) => props.theme.fourthColor};

  ::-webkit-slider-thumb {
    background-color: ${(props) => props.theme.firstColor};
  }
`;

const SubmitBtn = styled.button`
  background-color: ${(props) => props.theme.firstColor};
  color: ${(props) => props.theme.fourthColor};
`;

const Add = () => {
  const month = thisMonth < 9 ? `0${thisMonth + 1}` : thisMonth + 1;
  const today = new Date().getDate();
  const [isWork, setWork] = useState(true);

  const ChangeCategory = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.name === "work" ? setWork(true) : setWork(false);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <Label className={styles.label}>Category</Label>

        <div className={styles.category_wrap}>
          <input
            className={styles.category_input}
            id="work"
            type="radio"
            onClick={ChangeCategory}
            name="work"
          />
          <input
            className={styles.category_input}
            id="plan"
            type="radio"
            onClick={ChangeCategory}
            name="plan"
          />
          <CategoryLabel
            className={styles.category_label}
            htmlFor="work"
            as="label"
            checked={isWork}
          >
            work
          </CategoryLabel>
          <CategoryLabel
            className={styles.category_label}
            htmlFor="plan"
            as="label"
            checked={!isWork}
          >
            plan
          </CategoryLabel>
        </div>

        <Label className={styles.label} htmlFor="dateInput">
          Date
        </Label>

        <div className={styles.date_wrap}>
          <div className={styles.date_div}>
            {thisYear} / {month} /&nbsp;
            <DateInput
              className={styles.date_input}
              id="dateInput"
              type="number"
              min="1"
              max={thisMonthEnd}
              placeholder={String(today)}
            />
          </div>
        </div>

        <Label className={styles.label} htmlFor="contentInput">
          Content
        </Label>
        <ContentInput
          className={styles.content_input}
          id="contentInput"
          type="text"
          placeholder="내용을 간단히 입력하세요."
          maxLength={8}
        />

        <Label className={styles.label} htmlFor="rangeInput">
          Importance
        </Label>
        <div className={styles.range_wrap}>
          <InputRange
            className={styles.range}
            id="rangeInput"
            type="range"
            min="1"
            max="4"
            list="markers"
          />
        </div>
      </form>

      <SubmitBtn className={styles.submit_button}>
        Add {isWork ? "Work" : "Plan"}
      </SubmitBtn>
    </div>
  );
};

export default Add;
