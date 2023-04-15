import express from "express";
import {
  getLogin,
  postJoin,
  postLogin,
} from "../controllers/userController.js";
import { postSchedule } from "../controllers/scheduleController.js";

const rootRouter = express.Router();

rootRouter.route("/join").post(postJoin);
rootRouter.route("/login").post(postLogin);
rootRouter.route("/schedule").post(postSchedule);
rootRouter.route("/login/:id").get(getLogin);

export default rootRouter;
