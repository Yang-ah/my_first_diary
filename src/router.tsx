// router.tsx

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Photo from "./screens/Photo";
import Line from "./screens/Line";
import Tracker from "./screens/Tracker";
import Add from "./components/Add";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Photo />,
      },
      {
        path: "line",
        element: <Line />,
        children: [{ path: "add", element: <Add /> }],
      },
      {
        path: "tracker",
        element: <Tracker />,
      },
    ],
  },
]);

export default router;
