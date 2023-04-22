import express from "express";
import cors from "cors";
import "./db.js";
import bodyParser from "body-parser";
import rootRouter from "./routers/rootRouter.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import { localsMiddleware } from "./middlewares.js";
import multer from "multer";

const PORT = 4000;
const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  session({
    secret: "mfd",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: "mongodb://127.0.0.1:27017/mfd" }),
  })
);

app.use(localsMiddleware);
app.use("/", rootRouter);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

export default app;
