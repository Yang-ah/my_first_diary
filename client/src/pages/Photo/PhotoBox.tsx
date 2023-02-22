import { useEffect, useState } from "react";
import styled from "styled-components";
import { AddBtn, baseRadius } from "../../components/Common";
import { thisMonthString } from "../../components/Common/Dates";

interface urlProps {
  url: string;
}

interface dateProps {
  date: Date;
}

const ImgInput = styled.input`
  width: 100%;
  display: none;
`;

const DateForm = styled.form<urlProps>`
  background: ${(props) =>
    props.url ? `url(${props.url})` : `rgba(255, 255, 255, 0.8)`};
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: ${baseRadius};
  display: flex;
  justify-content: space-between;

  p {
    padding: 5px;
    font-size: 12px;
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
    <DateForm url={photoUrl}>
      <p>{date.getDate()}</p>
      <AddBtn as="label" htmlFor={String(date.getDate())}>
        +
      </AddBtn>
      <ImgInput id={String(date.getDate())} type="file" accept="image" />
    </DateForm>
  );
};

export default PhotoBox;
