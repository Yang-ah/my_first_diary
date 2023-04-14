import express from "express";
import cors from "cors";
import "./db.js";
import bodyParser from "body-parser";
import rootRouter from "./routers/rootRouter.js";

const PORT = 4000;
const app = express();

const setData = () => {
  const thisYear = new Date().getFullYear();
  const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const result = {};

  months.map((month) => {
    const strMonth = new Date(thisYear, month, 1).toLocaleString("en-US", {
      month: "long",
    });
    const thisMonthEnd = new Date(thisYear, month + 1, 0).getDate();

    result[strMonth] = [];

    for (let i = 1; i <= thisMonthEnd; i++) {
      result[strMonth].push({
        date: i,
        photoUrl: "",
        diary: "",
        schedule: {
          work: [],
          plan: [],
        },
        emotion: "",
        exercise: false,
      });
    }
  });

  return result;
};

const fakeDB = {
  planner: setData(),
};
const getData = (req, res) => res.json(fakeDB);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", rootRouter);

app.get("/api/planner", getData);
app.post("/api/schedule", (req, res) => {
  const { category, content, date, importance, place, time, who } = req.body;
  console.log(req.body);
  return res.send("success");
});

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

export default app;
