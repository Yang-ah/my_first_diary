import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { onDiaryAtom } from "../atom";
import { useState } from "react";

export const MainBox = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  outline: none;
  padding: 0 10px;
  color: ${(props) => props.theme.secondColor};
  display: flex;
  align-items: center;
  font-size: 12px;
`;

function Diary() {
  const [mainContent, mainChange] = useState("");
  const onDiary = useRecoilValue(onDiaryAtom);
  const setMain = (e: React.FormEvent<HTMLInputElement>) => {
    mainChange(e.currentTarget.value);
  };

  return (
    <div>
      {onDiary ? (
        <MainBox
          onChange={setMain}
          placeholder="오늘의 한 줄 일기를 써보세요. (최대 56자)"
          value={mainContent ? mainContent : ""}
        />
      ) : (
        <MainBox as="div">{mainContent}</MainBox>
      )}
    </div>
  );
}

export default Diary;
