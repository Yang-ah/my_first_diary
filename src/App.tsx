import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

const BODY = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 760px;
  height: 720px;
  color: ${(props) => props.theme.firstColor};
  background-color: ${(props) => props.theme.fifthColor};
  border: 1px solid ${(props) => props.theme.fourthColor};
  margin-top: 10px;
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

function App() {
  const navigate = useNavigate();
  const goSchedule = () => {
    navigate("/schedule");
  };

  const goHome = () => {
    navigate("/");
  };
  return (
    <BODY>
      <Wrap>
        <Outlet />
        <BtnWrap>
          <Btn onClick={goHome}>Monthly-Photo</Btn>
          <Btn onClick={goSchedule}>Monthly-Schedule</Btn>
        </BtnWrap>
      </Wrap>
    </BODY>
  );
}

export default App;
