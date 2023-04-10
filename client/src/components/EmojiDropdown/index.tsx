import { useEffect, useRef, useState } from "react";
import { EmojiTired } from "../../assets/emoji";
import { EmojiSurprise } from "../../assets/emoji";
import { EmojiSmileBeam } from "../../assets/emoji";
import { EmojiSadTear } from "../../assets/emoji";
import { EmojiRollingEyes } from "../../assets/emoji";
import { EmojiMehBlank } from "../../assets/emoji";
import { EmojiMeh } from "../../assets/emoji";
import { EmojiGrinTongueWink } from "../../assets/emoji";
import { EmojiGrinTongueSquint } from "../../assets/emoji";
import { EmojiGrinTongue } from "../../assets/emoji";
import { EmojiGrinStars } from "../../assets/emoji";
import { EmojiGrinSquintTears } from "../../assets/emoji";
import { EmojiGrinSquint } from "../../assets/emoji";
import { EmojiGrinHearts } from "../../assets/emoji";
import { EmojiGrinBeamSweat } from "../../assets/emoji";
import { EmojiGrinBeam } from "../../assets/emoji";
import { EmojiGrin } from "../../assets/emoji";
import { EmojiGrimace } from "../../assets/emoji";
import { EmojiFrownOpen } from "../../assets/emoji";
import { EmojiFrown } from "../../assets/emoji";
import { EmojiFlushed } from "../../assets/emoji";
import { EmojiDizzy } from "../../assets/emoji";
import { EmojiAngry } from "../../assets/emoji";
import { EmojiSmile } from "../../assets/emoji";
// import { EmojiLaughSquint } from "../../assets/emoji";

import styles from "./emojiDropdown.module.scss";
import styled from "styled-components";
import cx from "classnames";
import { Chevron } from "../../assets/icon";

const emojis = [
  { value: "smile", emoji: <EmojiSmile /> },
  { value: "grin", emoji: <EmojiGrin /> },
  { value: "smileBeam", emoji: <EmojiSmileBeam /> },
  { value: "grinBeam", emoji: <EmojiGrinBeam /> },
  { value: "grinSquint", emoji: <EmojiGrinSquint /> },
  { value: "grinStars", emoji: <EmojiGrinStars /> },
  { value: "grinHearts", emoji: <EmojiGrinHearts /> },
  // { value: "laughSquint", emoji: <EmojiLaughSquint /> },
  { value: "grinTongue", emoji: <EmojiGrinTongue /> },
  { value: "grinTongueWink", emoji: <EmojiGrinTongueWink /> },
  { value: "grinTongueSquint", emoji: <EmojiGrinTongueSquint /> },
  { value: "grinBeamSweat", emoji: <EmojiGrinBeamSweat /> },
  { value: "grinSquintTears", emoji: <EmojiGrinSquintTears /> },
  { value: "mehBlank", emoji: <EmojiMehBlank /> },
  { value: "meh", emoji: <EmojiMeh /> },
  { value: "surprise", emoji: <EmojiSurprise /> },
  { value: "sadTear", emoji: <EmojiSadTear /> },
  { value: "tired", emoji: <EmojiTired /> },
  { value: "grinGrimace", emoji: <EmojiGrimace /> },
  { value: "flushed", emoji: <EmojiFlushed /> },
  { value: "rollingEyes", emoji: <EmojiRollingEyes /> },
  { value: "frownOpen", emoji: <EmojiFrownOpen /> },
  { value: "frown", emoji: <EmojiFrown /> },
  { value: "dizzy", emoji: <EmojiDizzy /> },
  { value: "angry", emoji: <EmojiAngry /> },
];

const EmojiWrap = styled.div`
  > button {
    svg {
      fill: ${(props) => props.theme.SECONDARY_30};
    }
  }
`;

const EmojiDropdown = ({ value = "", onClick, lock }: any) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [emoji, setEmoji] = useState(value);
  const onClickDropdown = () => setIsOpen((cur) => !cur);

  const emotionEmoji = (emojiValue: string) => {
    emojis
      .filter((emoji) => emoji.value === emojiValue)
      .map((emoji) => setEmoji(emoji.emoji));
  };

  useEffect(() => {
    emotionEmoji(value);
  }, [value]);

  const onClickNewEmoji = (newEmojiValue: string) => {
    onClick(newEmojiValue);
    emotionEmoji(newEmojiValue);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownWrap}>
      <button
        ref={ref}
        className={cx(styles.dropdownButton, { [styles.isOpen]: isOpen })}
        onClick={lock ? undefined : onClickDropdown}
      >
        {emoji ? emoji : <EmojiSmile />}
        {lock || <Chevron className={styles.chevron} />}
      </button>
      <EmojiWrap className={cx(styles.emojiWrap, { [styles.isOpen]: isOpen })}>
        {emojis.map((emoji) => {
          return (
            <button
              value={emoji.value}
              key={emoji.value}
              onClick={() => onClickNewEmoji(emoji.value)}
            >
              {emoji.emoji}
            </button>
          );
        })}
      </EmojiWrap>
    </div>
  );
};
export default EmojiDropdown;
