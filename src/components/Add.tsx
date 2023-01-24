import styled from "styled-components";

const AddPage = styled.div`
  position: absolute;
  width: 80%;
  height: 500px;
  background-color: white;
  z-index: 99;
  left: 40px;
  top: 40px;
  display: none;
`;

function Add() {
  return <AddPage></AddPage>;
}

export default Add;
