export const weeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
export const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

export const thisYear = new Date().getFullYear();
export const thisMonth = new Date().getMonth();
const thisMonthStart = new Date(thisYear, thisMonth, 1).getDay();
export const thisMonthEnd = new Date(thisYear, thisMonth + 1, 0).getDate();
const thisMonthEndDay = new Date(thisYear, thisMonth + 1, 0).getDay();
const lastMonthLastDate = new Date(thisYear, thisMonth + 1, 0).getDate();

export const thisMonthString = new Date()
  .toLocaleString("en-US", { month: "long" })
  .toUpperCase();

export const prevDates: Date[] = [];
export const thisDates: Date[] = [];
export const nextDates: Date[] = [];

for (let i = thisMonthStart - 1; i >= 0; i--) {
  prevDates.push(new Date(thisYear, thisMonth, lastMonthLastDate - i));
}

for (let i = 1; i <= thisMonthEnd; i++) {
  thisDates.push(new Date(thisYear, thisMonth, i));
}

for (let i = 1; i < 7 - thisMonthEndDay; i++) {
  nextDates.push(new Date(thisYear, thisMonth + 1, i));
}
