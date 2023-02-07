// router.tsx

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Photo from "./screens/Photo";
import List from "./screens/List";
import Tracker from "./screens/Tracker";
import Add from "./screens/Add";
import Scheduler from "./screens/Scheduler";
import Diary from "./screens/Diary";
import Work from "./screens/Work";
import Plan from "./screens/Plan";

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
        path: "list",
        element: <List />,
        children: [
          {
            path: "scheduler",
            element: <Scheduler />,
            children: [
              { path: "plan", element: <Plan /> },
              { path: "work", element: <Work /> },
              { path: "add", element: <Add /> },
            ],
          },
          { path: "diary", element: <Diary /> },
        ],
      },
      {
        path: "tracker",
        element: <Tracker />,
      },
    ],
  },
]);

export default router;
