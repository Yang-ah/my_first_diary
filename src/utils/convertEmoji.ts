import { emojis } from "./emojiData";

const convertEmoji = (value: string) => {
  const selectedEmoji = emojis.find((emoji) => emoji.emojiValue === value);
  return selectedEmoji ? selectedEmoji.emoji : null;
};

export default convertEmoji;
