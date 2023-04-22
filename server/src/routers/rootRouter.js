import express from "express";
import {
  getLogin,
  postJoin,
  postLogin,
} from "../controllers/userController.js";
import {
  deleteSchedule,
  postSchedule,
} from "../controllers/scheduleController.js";
import { patchDiary } from "../controllers/diaryController.js";
import { getMonthData } from "../controllers/monthDataController.js";
import { patchExercise } from "../controllers/exerciseController.js";
import { patchEmotion } from "../controllers/emotionController.js";
import { postPhotoUrl } from "../controllers/photoUrlController.js";
import { uploadFiles } from "../middlewares.js";

const rootRouter = express.Router();

rootRouter.route("/join").post(postJoin);
rootRouter.route("/login").post(postLogin);
rootRouter.route("/diary").patch(patchDiary);
rootRouter.route("/exercise").patch(patchExercise);
rootRouter.route("/emotion").patch(patchEmotion);
rootRouter
  .route("/schedule/:id/:category/:month/:date/:index")
  .delete(deleteSchedule);

rootRouter.route("/schedule").post(postSchedule);
rootRouter.route("/login/:id").get(getLogin);
rootRouter.route("/month/:id/:month").get(getMonthData);
rootRouter
  .route("/photo/:id/:month/:date")
  .post(uploadFiles.single("photoUrl"), postPhotoUrl);
export default rootRouter;
