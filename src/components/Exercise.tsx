import { useState } from "react";
import { SideBox } from "./../screens/Monthly-Schedule";
function Exercise() {
  const [done, setDone] = useState("");
  const doneToggle = () => {
    done == "🖤" ? setDone("·") : setDone("🖤");
  };
  return <SideBox as="input" type="button" onClick={doneToggle} value={done} />;
}

export default Exercise;
