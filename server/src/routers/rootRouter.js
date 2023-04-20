import express from "express";
import {
  getLogin,
  postJoin,
  postLogin,
} from "../controllers/userController.js";
import { patchSchedule } from "../controllers/scheduleController.js";
import { patchDiary } from "../controllers/diaryController.js";
import { getMonthData } from "../controllers/monthDataController.js";
import { patchExercise } from "../controllers/exerciseController.js";
import { patchEmotion } from "../controllers/emotionController.js";

const rootRouter = express.Router();

rootRouter.route("/join").post(postJoin);
rootRouter.route("/login").post(postLogin);
rootRouter.route("/diary").patch(patchDiary);
rootRouter.route("/exercise").patch(patchExercise);
rootRouter.route("/emotion").patch(patchEmotion);

rootRouter.route("/schedule").patch(patchSchedule);
rootRouter.route("/login/:id").get(getLogin);
rootRouter.route("/month/:id/:month").get(getMonthData);

// rootRouter.route('/api/posts/:year/:month').patch();

export default rootRouter;
