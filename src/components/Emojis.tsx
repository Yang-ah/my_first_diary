import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { onLockAtom } from "../atom";
import { SideBox } from "../screens/Monthly-Schedule";

const Option = styled.option`
  border: none;
  outline: none;
  font-size: 20px;
`;

function Emojis() {
  const onLock = useRecoilValue(onLockAtom);

  return (
    <SideBox as="select" disabled={onLock}>
      <Option value="none"></Option>
      <Option value="happy">🥰</Option>
      <Option value="good">🙂</Option>
      <Option value="not bad">😐</Option>
      <Option value="sad">☹️</Option>
      <Option value="very sad">😭</Option>
      <Option value="upset">🤯</Option>
      <Option value="angry">🤬</Option>
      <Option value="embarrassed">😰</Option>
      <Option value="sick">🤒</Option>
    </SideBox>
  );
}

export default Emojis;
