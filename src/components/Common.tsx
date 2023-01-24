import styled from "styled-components";

export const baseSpace = "15px";
export const baseRadius = "5px";

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-between;
  border-radius: 10px;
  position: relative;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  height: 15px;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.secondColor};
  line-height: 15px;
  margin-bottom: ${baseSpace};
`;

export const ThemeIcon = styled.div`
  width: 5px;
  height: 15px;
  margin-right: 3px;
  background-color: ${(props) => props.theme.secondColor};
`;

export const Section = styled.section`
  width: 100%;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddBtn = styled.button`
  width: 30px;
  height: 30px;
  margin: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(129, 125, 125, 0.1);
  color: white;
  align-self: flex-end;
  justify-self: flex-end;
  cursor: pointer;
`;

export const SectionHeader = styled.header`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
`;

export const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
