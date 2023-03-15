// router.tsx

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Layout, ListLayout } from "../components";
import { Home, Photo, Tracker, Add } from "../pages";

const router = (
  <Route>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="photo" element={<Photo />} />
      <Route path="tracker" element={<Tracker />} />
      <Route path="list" element={<ListLayout />}>
        <Route path="diary" />
        <Route path="scheduler">
          <Route path="plan" />
          <Route path="work" />
          <Route path="add" element={<Add />} />
        </Route>
      </Route>
    </Route>
  </Route>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(router));

export default rootRouter;
