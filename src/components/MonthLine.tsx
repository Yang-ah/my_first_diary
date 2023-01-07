import styled from "styled-components";

const SectionLine = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 40px 1fr 80px 40px;
  grid-gap: 1px;
  height: 40px;
  margin-bottom: 1px;
`;

const DateBox = styled.div`
  background-color: ${(props) => props.theme.thirdColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainBox = styled.div`
  background-color: ${(props) => props.theme.secondColor};
`;

const SectionSide = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1px;
`;
const SideBox = styled.div`
  background-color: ${(props) => props.theme.thirdColor};
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
