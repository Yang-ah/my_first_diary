import styled from "styled-components";

const Container = styled.form`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Wrap = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Btn = styled.div`
  width: 80px;
  height: 100%;
  background-color: red;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input``;
const Label = styled.label``;

const SubmitBtn = styled.button`
  width: 100px;
  height: 30px;
  justify-self: center;
  margin-top: 10px;
`;

// input type 달력 => 날짜 제한 가능할까? 안된다면, select로 바꿔야할듯 ??
// 아니면 좀 귀여운 버튼 일렬로 늘어놔도 귀여울듯 ??

function Add() {
  return (
    <Container>
      <Wrap>
        <Btn>Category : </Btn>
        <Btn>work</Btn>
        <Btn>plan</Btn>
      </Wrap>

      <Wrap>
        <Label htmlFor="dateInput">Date : </Label>
        <Input id="dateInput" type="date" />
      </Wrap>

      <Wrap>
        <Label htmlFor="timeInput">Time : </Label>
        <Input id="timeInput" type="time" />
      </Wrap>

      <Wrap>
        <Label htmlFor="contentInput">Content : </Label>
        <Input id="contentInput" type="text" placeholder="내용을 입력하세요." />
      </Wrap>

      <Wrap>
        <Label htmlFor="rangeInput">Importance : </Label>
        <Input id="rangeInput" type="range" min="0" max="5" list="markers" />
      </Wrap>

      <SubmitBtn>Add work</SubmitBtn>

      <datalist id="markers">
        <option value="0"></option>
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
        <option value="4"></option>
        <option value="5"></option>
      </datalist>
    </Container>
  );
}

export default Add;
