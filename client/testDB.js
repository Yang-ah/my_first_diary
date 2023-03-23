let result = [];

const thisYear = new Date().getFullYear();
const month = new Date().getMonth();
const thisMonthEnd = new Date(thisYear, month + 1, 0).getDate();

for (let i = 1; i <= thisMonthEnd; i++) {
  result.push({
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

result[0] = {
  date: 1,
  photoUrl: "",
  diary: "",
  schedule: {
    work: [],
    plan: [],
  },
  emotion: "",
  exercise: false,
};

console.log(result);
