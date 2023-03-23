import express from "express";
import cors from "cors";

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

app.use(cors());
app.use(express.urlencoded({ extended: true }));

const getData = (req, res) => res.json(fakeDB);

app.get("/api/planner", getData);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
