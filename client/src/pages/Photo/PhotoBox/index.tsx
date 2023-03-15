import { useEffect, useState } from "react";
import styled from "styled-components";
import styles from "./photo-box.module.scss";
import { thisMonthString } from "../../../components/Common/Dates";

interface urlProps {
  url: string;
}

interface dateProps {
  date: Date;
}

const DateForm = styled.form<urlProps>`
  background: ${(props) =>
    props.url ? `url(${props.url})` : `rgba(255, 255, 255, 0.8)`};

  > label {
    background-color: ${(props) => props.theme.pointColor};
    color: ${(props) => props.theme.fontColor};
  }
`;

const PhotoBox = ({ date }: dateProps) => {
  const dataMonth = thisMonthString.toLocaleLowerCase();
  const [photoUrl, setPhotoUrl] = useState("");

  const fetchData = () =>
    fetch("http://localhost:4000/api/planner")
      .then((response) => response.json())
      .then((json) => json.planner[dataMonth])
      .then((data) => urlMaker(data));

  const urlMaker = (data: any) => {
    setPhotoUrl(data[date.getDate()].photoUrl);
    console.log("photoUrl : ", photoUrl);
  };

  useEffect(() => {
    fetchData();
  }, [photoUrl]);

  return (
    <DateForm url={photoUrl} className={styles.form}>
      <p>{date.getDate()}</p>
      <label className={styles.add} htmlFor={String(date.getDate())}>
        +
      </label>
      <input id={String(date.getDate())} type="file" accept="image" />
    </DateForm>
  );
};

export default PhotoBox;
