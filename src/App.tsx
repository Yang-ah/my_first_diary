import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

const BodyWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 760px;
  height: 100%;
  color: ${(props) => props.theme.firstColor};
  background-color: ${(props) => props.theme.fifthColor};
  border: 1px solid ${(props) => props.theme.fourthColor};
  margin: 10px 0;
  align-self: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 15px;
  position: relative;
`;

const BtnWrap = styled.div`
  position: absolute;
  width: 200px;
  top: 10px;
  right: -201px;
`;

const Btn = styled.button`
  width: 120px;
  height: 50px;
  margin-bottom: 10px;
`;

export const Message = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 11px;
  font-weight: 400;
  color: ${(props) => props.theme.fourthColor};
`;

function App() {
  const navigate = useNavigate();
  const goSchedule = () => {
    navigate("/schedule");
  };

  const goHome = () => {
    navigate("/");
  };
  return (
    <BodyWrap>
      <Wrap>
        <Outlet />
        <BtnWrap>
          <Btn onClick={goHome}>Monthly-Photo</Btn>
          <Btn onClick={goSchedule}>Monthly-Schedule</Btn>
        </BtnWrap>
        <Message>yangah.career@gmail.com</Message>
      </Wrap>
    </BodyWrap>
  );
}

export default App;
