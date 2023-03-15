import express from "express";
import cors from "cors";

const PORT = 4000;
const app = express();

// 3월을 기준으로, lock은 없애기
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
        emotion: "🐰",
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
        emotion: "🐰",
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
        emotion: "🐰",
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
        emotion: "🐰",
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
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
    ],
    mar: [
      {
        date: 1,
        photoUrl: "",
        diary: "string",
        schedule: {
          work: [
            {
              content: "streeing",
              importance: 1,
              time: "15:33",
              place: "우리집",
              with: "엄마, 아빠",
            },
            {
              content: "stridgdgeng",
              importance: 2,
              time: "15:33",
              place: "우리집",
              with: "엄마, 아빠",
            },
            {
              content: "strsaaieng",
              importance: 3,
              time: "15:33",
              place: "우리집",
              with: "엄마, 아빠",
            },
            {
              content: "striddeng",
              importance: 4,
              time: "15:33",
              place: "우리집",
              with: "엄마, 아빠",
            },
          ],
          plan: [
            { content: "strieng", importance: 1 },
            { content: "stridgdgeng", importance: 2 },
            { content: "strsaaieng", importance: 3 },
            { content: "striddeng", importance: 4 },
          ],
        },
        emotion: "🐰",
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
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
      {
        date: 3,
        photoUrl: "url",
        diary: "string",
        schedule: {
          work: [{ content: "striteteng", importance: 2 }],
          plan: [{ content: "streeing", importance: 1 }],
        },
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
      {
        date: 4,
        photoUrl: "url",
        diary: "string",
        schedule: {
          work: [{ content: "striteteng", importance: 2 }],
          plan: [{ content: "streeing", importance: 1 }],
        },
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
      {
        date: 5,
        photoUrl: "url",
        diary: "string",
        schedule: {
          work: [{ content: "striteteng", importance: 2 }],
          plan: [{ content: "streeing", importance: 1 }],
        },
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
      {
        date: 6,
        photoUrl: "url",
        diary: "string",
        schedule: {
          work: [{ content: "striteteng", importance: 2 }],
          plan: [{ content: "streeing", importance: 1 }],
        },
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
      {
        date: 7,
        photoUrl: "url",
        diary: "string",
        schedule: {
          work: [{ content: "striteteng", importance: 2 }],
          plan: [{ content: "streeing", importance: 1 }],
        },
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
      {
        date: 8,
        photoUrl: "url",
        diary: "string",
        schedule: {
          work: [{ content: "striteteng", importance: 2 }],
          plan: [{ content: "streeing", importance: 1 }],
        },
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
      {
        date: 9,
        photoUrl: "url",
        diary: "string",
        schedule: {
          work: [{ content: "striteteng", importance: 2 }],
          plan: [{ content: "streeing", importance: 1 }],
        },
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
      {
        date: 10,
        photoUrl: "url",
        diary: "string",
        schedule: {
          work: [{ content: "striteteng", importance: 2 }],
          plan: [{ content: "streeing", importance: 1 }],
        },
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
      {
        date: 11,
        photoUrl: "url",
        diary: "string",
        schedule: {
          work: [{ content: "striteteng", importance: 2 }],
          plan: [{ content: "streeing", importance: 1 }],
        },
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
      {
        date: 12,
        photoUrl: "url",
        diary: "string",
        schedule: {
          work: [{ content: "striteteng", importance: 2 }],
          plan: [{ content: "streeing", importance: 1 }],
        },
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
      {
        date: 13,
        photoUrl: "url",
        diary: "string",
        schedule: {
          work: [{ content: "striteteng", importance: 2 }],
          plan: [{ content: "streeing", importance: 1 }],
        },
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
      {
        date: 14,
        photoUrl: "url",
        diary: "string",
        schedule: {
          work: [{ content: "striteteng", importance: 2 }],
          plan: [{ content: "streeing", importance: 1 }],
        },
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
      {
        date: 15,
        photoUrl: "url",
        diary: "string",
        schedule: {
          work: [{ content: "striteteng", importance: 2 }],
          plan: [{ content: "streeing", importance: 1 }],
        },
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
      {
        date: 16,
        photoUrl: "url",
        diary: "string",
        schedule: {
          work: [{ content: "striteteng", importance: 2 }],
          plan: [{ content: "streeing", importance: 1 }],
        },
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
      {
        date: 17,
        photoUrl: "url",
        diary: "string",
        schedule: {
          work: [{ content: "striteteng", importance: 2 }],
          plan: [{ content: "streeing", importance: 1 }],
        },
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
      {
        date: 18,
        photoUrl: "url",
        diary: "string",
        schedule: {
          work: [{ content: "striteteng", importance: 2 }],
          plan: [{ content: "streeing", importance: 1 }],
        },
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
      {
        date: 19,
        photoUrl: "url",
        diary: "string",
        schedule: {
          work: [{ content: "striteteng", importance: 2 }],
          plan: [{ content: "streeing", importance: 1 }],
        },
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
      {
        date: 20,
        photoUrl: "url",
        diary: "string",
        schedule: {
          work: [{ content: "striteteng", importance: 2 }],
          plan: [{ content: "streeing", importance: 1 }],
        },
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
      {
        date: 21,
        photoUrl: "url",
        diary: "string",
        schedule: {
          work: [{ content: "striteteng", importance: 2 }],
          plan: [{ content: "streeing", importance: 1 }],
        },
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
      {
        date: 22,
        photoUrl: "url",
        diary: "string",
        schedule: {
          work: [{ content: "striteteng", importance: 2 }],
          plan: [{ content: "streeing", importance: 1 }],
        },
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
      {
        date: 23,
        photoUrl: "url",
        diary: "string",
        schedule: {
          work: [{ content: "striteteng", importance: 2 }],
          plan: [{ content: "streeing", importance: 1 }],
        },
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
      {
        date: 24,
        photoUrl: "url",
        diary: "string",
        schedule: {
          work: [{ content: "striteteng", importance: 2 }],
          plan: [{ content: "streeing", importance: 1 }],
        },
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
      {
        date: 25,
        photoUrl: "url",
        diary: "string",
        schedule: {
          work: [{ content: "striteteng", importance: 2 }],
          plan: [{ content: "streeing", importance: 1 }],
        },
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
      {
        date: 26,
        photoUrl: "url",
        diary: "string",
        schedule: {
          work: [{ content: "striteteng", importance: 2 }],
          plan: [{ content: "streeing", importance: 1 }],
        },
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
      {
        date: 27,
        photoUrl: "url",
        diary: "string",
        schedule: {
          work: [{ content: "striteteng", importance: 2 }],
          plan: [{ content: "streeing", importance: 1 }],
        },
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
      {
        date: 28,
        photoUrl: "url",
        diary: "string",
        schedule: {
          work: [{ content: "striteteng", importance: 2 }],
          plan: [{ content: "streeing", importance: 1 }],
        },
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
      {
        date: 29,
        photoUrl: "url",
        diary: "string",
        schedule: {
          work: [{ content: "striteteng", importance: 2 }],
          plan: [{ content: "streeing", importance: 1 }],
        },
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
      {
        date: 30,
        photoUrl: "url",
        diary: "string",
        schedule: {
          work: [{ content: "striteteng", importance: 2 }],
          plan: [{ content: "streeing", importance: 1 }],
        },
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
      {
        date: 31,
        photoUrl: "url",
        diary: "string",
        schedule: {
          work: [{ content: "striteteng", importance: 2 }],
          plan: [{ content: "streeing", importance: 1 }],
        },
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
    ],
    apr: [
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
        emotion: "🐰",
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
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
    ],
    may: [
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
        emotion: "🐰",
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
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
    ],
    jun: [
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
        emotion: "🐰",
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
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
    ],
    jul: [
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
        emotion: "🐰",
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
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
    ],
    aug: [
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
        emotion: "🐰",
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
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
    ],
    sep: [
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
        emotion: "🐰",
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
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
    ],
    oct: [
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
        emotion: "🐰",
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
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
    ],
    nov: [
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
        emotion: "🐰",
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
        emotion: "🐰",
        exercise: false,
        lock: true,
      },
    ],
    dec: [
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
        emotion: "🐰",
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
        emotion: "🐰",
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
