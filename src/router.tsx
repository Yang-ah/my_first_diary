// router.tsx

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MonthlyPhoto from "./screens/Monthly-Photo";
import MonthlySchedule from "./screens/Monthly-Schedule";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <MonthlyPhoto />,
      },
      {
        path: "schedule",
        element: <MonthlySchedule />,
      },
    ],
  },
]);

export default router;
