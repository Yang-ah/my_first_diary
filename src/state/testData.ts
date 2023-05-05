import { ISchedule } from ".";
import { emojis } from "../utils/emojiData";

const photoUrlArr = [
  "https://user-images.githubusercontent.com/97151214/235697426-ebadadad-989c-4973-b446-fd45311a69d6.JPG",
  "https://user-images.githubusercontent.com/97151214/235697467-257fc20c-33a9-4e64-adc3-5afbfcfaa040.JPG",
  "https://user-images.githubusercontent.com/97151214/235697476-5a38d21c-0341-4c4d-9997-872412e024af.JPG",
  "https://user-images.githubusercontent.com/97151214/235701264-8d877732-379f-462f-a42c-2badbbb77f2f.jpg",
  "https://user-images.githubusercontent.com/97151214/235701303-1c0d8f7a-47e8-4cbf-a1ac-d1ac37985640.jpg",
  "https://user-images.githubusercontent.com/97151214/235701306-cece2d79-9431-46dc-8fed-2076ed0f4560.PNG",
];

const diaryArr = [
  "오늘은 친구랑 만나서 맛있는 저녁을 먹었다.",
  "오늘은 날씨가 너무 좋아서 하루종일 기분이 좋았다.",
  "붕세권에 살아서 행복하다. 붕어빵을 사서 친구들이랑 나눠먹었다.",
  "중고 서점에서 마음에 드는 책을 발견했다. 첫 페이지를 읽고 생각했다. '이거다 싶었다' ",
  "커피없이 못살아~ 오늘도 아메리카노로 시작하는 아침!!",
];

const planArr: ISchedule[] = [
  {
    content: "서점가기",
    importance: 2,
    time: "15:00",
    place: "교보문고",
  },
  {
    content: "저녁약속",
    importance: 3,
    time: "18:30",
    place: "서면역 2번출구",
    with: "민정",
  },
  {
    content: "가족모임",
    importance: 4,
    time: "17:30",
    place: "장어맛집",
    with: "가족",
  },
  {
    content: "밀린 영화보기",
    importance: 1,
  },
];

const workArr: ISchedule[] = [
  {
    content: "거래처 미팅",
    importance: 4,
    time: "15:00",
    place: "동상동 스타벅스",
  },
  {
    content: "프로젝트 마감",
    importance: 3,
    time: "18:30",
    with: "우리 팀",
  },
  {
    content: "동기랑 스벅",
    importance: 2,
    time: "17:30",
    place: "스타벅스",
    with: "동기 2명",
  },
  {
    content: "기타 등등",
    importance: 1,
  },
];

export const setTestData = () => {
  const thisYear = new Date().getFullYear();
  const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const result: any = {};

  months.map((month) => {
    const strMonth = new Date(thisYear, month, 1).toLocaleString("en-US", {
      month: "long",
    });
    const thisMonthEnd = new Date(thisYear, month + 1, 0).getDate();

    result[strMonth] = [];

    for (let i = 1; i <= thisMonthEnd; i++) {
      result[strMonth].push({
        date: i,
        photoUrl: photoUrlArr[(i + month) % 6],
        diary: diaryArr[(i + month) % 5],
        schedule: {
          work: workArr.slice((i + month) % 4, workArr.length),
          plan: planArr.slice((i + month) % 4, planArr.length),
        },
        emotion: emojis[(i + month) % emojis.length].emojiValue,
        exercise: (i + month) % 3 === 0 ? false : true,
      });
    }
  });

  return result;
};
