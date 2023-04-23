export const year = new Date().getFullYear();

export const monthStr = (month: number) => {
  const result = new Date(year, month, 1).toLocaleString("en-US", {
    month: "long",
  });

  return result;
};

export const getUserId = () => {
  const TOKEN = localStorage.getItem("TOKEN");
  return TOKEN ?? "";
};
