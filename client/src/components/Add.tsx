import styled from "styled-components";
import { thisMonth, thisMonthEnd, thisYear } from "./Dates";

const fontSize = "13px";

const Container = styled.form`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  font-size: ${fontSize};
`;

const Wrap = styled.div`
  width: 100%;
  height: 70%;
  display: grid;
  grid-template-columns: 4fr 6fr;
  grid-gap: 5px;
  margin-bottom: 30px;
`;

const BtnWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
`;

const Btn = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 1px #0000006b, 0px 0px 1px #0d0d0d88;

  :hover {
    transform: scale(1.3);
    cursor: pointer;
    background-color: ${(props) => props.theme.secondColor};
  }
`;

const ContentInput = styled.input`
  box-shadow: 1px 1px 1px #0000006b, 0px 0px 1px #0d0d0d88;
  padding: 0 5px;
  font-size: 12px;
  background-color: ${(props) => props.theme.fourthColor};
  ::placeholder {
    font-weight: 300;
    font-size: 12px;
    color: rgba(1, 1, 1, 0.2);
  }
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: end;
  font-weight: 500;
  box-shadow: 1px 1px 1px #0000006b, 0px 0px 1px #0d0d0d88;
  background-color: ${(props) => props.theme.thirdColor};
`;

const DateWrap = styled.div`
  width: 100%;
  box-shadow: 1px 1px 1px #0000006b, 0px 0px 1px #0d0d0d88;
  display: flex;
  justify-content: center;
`;

const DateInput = styled.input`
  width: 30px;
  height: 100%;
  background-color: ${(props) => props.theme.fourthColor};
  font-size: ${fontSize};
  font-weight: 300;
  ::placeholder {
    color: rgba(1, 1, 1, 0.2);
  }
`;

const DateDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: ${fontSize};
`;

const RangeWrap = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 1px 1px 1px #0000006b, 0px 0px 1px #0d0d0d88;
`;

const InputRange = styled.input`
  width: 100%;
  height: 10px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #0000006b, 0px 0px 1px #0d0d0d88;
  background-color: ${(props) => props.theme.fourthColor};

  ::-webkit-slider-thumb {
    background-color: transparent;
    height: 20px;
    width: 16px;
    background-color: ${(props) => props.theme.firstColor};
    border-radius: 5px;
  }
`;

const SubmitBtn = styled.button`
  width: 100px;
  height: 30px;
  justify-self: center;
  margin-top: 10px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.firstColor};
  color: ${(props) => props.theme.fourthColor};
  font-weight: 300;
  :hover {
    transform: scale(1.2);
  }
`;

function Add() {
  const month = thisMonth < 9 ? `0${thisMonth + 1}` : thisMonth + 1;
  const today = new Date().getDate();

  return (
    <Container>
      <Wrap>
        <Label>Category</Label>

        <BtnWrap>
          <Btn>work</Btn>
          <Btn>plan</Btn>
        </BtnWrap>

        <Label htmlFor="dateInput">Date</Label>

        <DateWrap>
          <DateDiv>
            {thisYear} / {month} /&nbsp;
            <DateInput
              id="dateInput"
              type="number"
              min="1"
              max={thisMonthEnd}
              placeholder={String(today)}
            />
          </DateDiv>
        </DateWrap>

        <Label htmlFor="contentInput">Content</Label>
        <ContentInput
          id="contentInput"
          type="text"
          placeholder="내용을 간단히 입력하세요."
          maxLength={8}
        />

        <Label htmlFor="rangeInput">Importance</Label>
        <RangeWrap>
          <InputRange
            id="rangeInput"
            type="range"
            min="0"
            max="4"
            list="markers"
          />
        </RangeWrap>
      </Wrap>

      <SubmitBtn>Add work</SubmitBtn>
    </Container>
  );
}

export default Add;
