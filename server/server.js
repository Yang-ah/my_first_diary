import express from "express";
import cors from "cors";

const PORT = 4000;
const app = express();

const fakeDB = {
  planner: {
    jan: [
      {
        date: 1,
        photoUrl: "",
        diary: "string",
        schedule: {
          work: [{ content: "string", importance: 5 }],
          plan: [{ content: "string", importance: 5 }],
        },
        emotion: "string",
        exercise: false,
        lock: true,
      },
      {
        date: 2,
        photoUrl: "url",
        diary: "string",
        schedule: {
          work: [{ content: "string", importance: 5 }],
          plan: [{ content: "string", importance: 5 }],
        },
        emotion: "string",
        exercise: false,
        lock: true,
      },
    ],
    feb: [
      {
        date: 1,
        photoUrl:
          "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        diary: "string",
        schedule: {
          work: [{ content: "string", importance: 5 }],
          plan: [{ content: "string", importance: 5 }],
        },
        emotion: "string",
        exercise: false,
        lock: true,
      },
      {
        date: 2,
        photoUrl: "",
        diary: "string",
        schedule: {
          work: [{ content: "string", importance: 5 }],
          plan: [{ content: "string", importance: 5 }],
        },
        emotion: "string",
        exercise: false,
        lock: true,
      },
    ],
  },
};

app.use(cors());
app.use(express.urlencoded({ extended: true }));

const getData = (req, res) => res.json(fakeDB);
app.get("/api/planner", getData);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
