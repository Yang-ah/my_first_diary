import styled from "styled-components";

const SectionLine = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 40px 1fr 80px 40px;
  height: 40px;
`;

const DateBox = styled.div`
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainBox = styled.div`
  background-color: blue;
`;

const SectionSide = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: yellow;
`;
const SideBox = styled.div`
  border: 1px solid black;
  background-color: yellow;
`;

function MonthLine() {
  return (
    <SectionLine>
      <DateBox>1일</DateBox>
      <MainBox></MainBox>
      <SectionSide>
        <SideBox></SideBox>
        <SideBox></SideBox>
      </SectionSide>
      <SideBox></SideBox>
    </SectionLine>
  );
}

export default MonthLine;
