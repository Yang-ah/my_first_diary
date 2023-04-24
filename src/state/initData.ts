export const setInitData = () => {
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
