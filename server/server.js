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
          work: [
            { content: "streeing", importance: 4 },
            { content: "strieng", importance: 4 },
          ],
          plan: [{ content: "strieng", importance: 3 }],
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
          work: [{ content: "striteteng", importance: 2 }],
          plan: [{ content: "streeing", importance: 1 }],
        },
        emotion: "string",
        exercise: false,
        lock: true,
      },
    ],
    feb: [
      {
        date: 1,
        photoUrl: "good",
        diary: "hry",
        schedule: {
          work: [
            { content: "rwtywtw", importance: 1 },
            { content: "wtwtw", importance: 3 },
            { content: "wtwt", importance: 2 },
          ],
          plan: [
            { content: "seeetring", importance: 2 },
            { content: "stwtwtwtring", importance: 3 },
            { content: "streeing", importance: 2 },
          ],
        },
        emotion: "🥰",
        exercise: true,
        lock: true,
      },
      {
        date: 2,
        photoUrl: "hey",
        diary: "string",
        schedule: {
          work: [{ content: "streeeeing", importance: 3 }],
          plan: [{ content: "streeing", importance: 4 }],
        },
        emotion: "🥰",
        exercise: true,
        lock: false,
      },
      {
        date: 3,
        photoUrl: "hey",
        diary: "string",
        schedule: {
          work: [{ content: "strieewttwtng", importance: 2 }],
          plan: [{ content: "strwtwtwing", importance: 3 }],
        },
        emotion: "🥰",
        exercise: true,
        lock: true,
      },
      {
        date: 4,
        photoUrl: "hey",
        diary: "string",
        schedule: {
          work: [{ content: "strwtwting", importance: 5 }],
          plan: [{ content: "strwtwtwing", importance: 5 }],
        },
        emotion: "string",
        exercise: false,
        lock: true,
      },
      {
        date: 5,
        photoUrl: "hey",
        diary: "diary",
        schedule: {
          work: [{ content: "strwtwtwng", importance: 5 }],
          plan: [{ content: "strwtwting", importance: 5 }],
        },
        emotion: "string",
        exercise: false,
        lock: true,
      },
      {
        date: 6,
        photoUrl: "hey",
        diary: "string",
        schedule: {
          work: [{ content: "strwtwtwtwing", importance: 5 }],
          plan: [{ content: "strwtwing", importance: 5 }],
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
