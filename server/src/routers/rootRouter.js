import express from "express";
import { getJoin, postJoin, postLogin } from "../controllers/userController.js";

const rootRouter = express.Router();

rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.route("/login").post(postLogin);
export default rootRouter;
