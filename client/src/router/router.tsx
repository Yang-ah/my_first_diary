// router.tsx

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Layout } from "../components";
import { Home } from "../pages";

const router = (
  <Route>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
  </Route>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(router));

export default rootRouter;
