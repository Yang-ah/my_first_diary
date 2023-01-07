import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Wrap>
      <Outlet />
    </Wrap>
  );
}

export default App;
