// router.tsx

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Layout, ListLayout } from "../components";
import {
  Home,
  Photo,
  Tracker,
  Scheduler,
  Work,
  Plan,
  Add,
  Diary,
} from "../screens";

const router = (
  <Route>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="photo" element={<Photo />} />
      <Route path="tracker" element={<Tracker />} />
      <Route path="list" element={<ListLayout />}>
        <Route path="diary" element={<Diary />} />
        <Route path="scheduler" element={<Scheduler />}>
          <Route path="plan" element={<Plan />} />
          <Route path="work" element={<Work />} />
          <Route path="add" element={<Add />} />
        </Route>
      </Route>
    </Route>
  </Route>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(router));

export default rootRouter;
