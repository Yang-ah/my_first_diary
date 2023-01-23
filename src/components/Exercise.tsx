import { useState } from "react";
import { SideBox } from "./../screens/Monthly-Schedule";
import { useRecoilValue } from "recoil";
import { onLockAtom } from "../atom";

function Exercise() {
  const onLock = useRecoilValue(onLockAtom);

  const [done, setDone] = useState("");
  const doneToggle = () => {
    done == "🖤" ? setDone("·") : setDone("🖤");
  };
  return (
    <SideBox
      as="input"
      disabled={onLock}
      type="button"
      onClick={doneToggle}
      value={done}
    />
  );
}

export default Exercise;
