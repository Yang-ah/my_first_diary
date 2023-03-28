// router.tsx

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Layout } from "../components";
import {
  HomePage,
  PhotoPage,
  TrackerPage,
  AddPage,
  SchedulerPage,
  DiaryPage,
} from "../pages";

const router = (
  <Route>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="photo" element={<PhotoPage />} />
      <Route path="tracker" element={<TrackerPage />} />
      <Route path="diary" element={<DiaryPage />} />
      <Route path="scheduler" element={<SchedulerPage />}>
        <Route path="add" element={<AddPage />} />
      </Route>
    </Route>
  </Route>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(router));

export default rootRouter;
