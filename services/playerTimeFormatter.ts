export const playerTimeFormatter = (seconds: number) => {
  let result: string;
  let minute = Math.floor(seconds / 60);
  let second = Math.floor(seconds % 60);

  return `${minute}:${second}`;
};
