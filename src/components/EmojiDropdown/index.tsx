import { useEffect, useState } from "react";
import { EmojiSmile } from "../../assets/emoji";
import styles from "./emojiDropdown.module.scss";
import styled from "styled-components";
import cx from "classnames";
import { Chevron } from "../../assets/icon";
import { emojis } from "../../utils/emojiData";
import convertEmoji from "../../utils/convertEmoji";

const DropdownWrap = styled.div`
  border: 1px solid ${(props) => props.theme.PRIMARY_20};
  border-radius: 5px;

  > .emojiWrap {
    border: 1px solid ${(props) => props.theme.PRIMARY_20};
    > button {
      svg {
        fill: ${(props) => props.theme.SECONDARY_30};
        transition: 0.2s fill ease-in;
      }
      &:hover {
        svg {
          fill: ${(props) => props.theme.SECONDARY_40};
        }
      }
    }
  }
`;

interface IEmojiDropdown {
  stateValue: string;
  setState: any;
  setLock: any;
  lock: boolean;
}

const EmojiDropdown = ({
  stateValue = "",
  setState,
  lock,
  setLock,
}: IEmojiDropdown) => {
  const [isOpen, setIsOpen] = useState(false);
  const [emoji, setEmoji] = useState<any>(); // Emoji Icon
  const onClickDropdown = () => setIsOpen((cur) => !cur);

  const onChangeValue = (value: string) => {
    setState(value); // Emoji string(value)
    setEmoji(convertEmoji(value)); // Emoji Icon
    setIsOpen(false);
    setLock(true);
  };

  useEffect(() => {
    setEmoji(convertEmoji(stateValue));
  }, [stateValue]);

  useEffect(() => {
    lock && setIsOpen(false);
  }, [lock]);

  return (
    <DropdownWrap className={styles.dropdownWrap}>
      <button
        className={styles.dropdownButton}
        onClick={lock ? undefined : onClickDropdown}
      >
        {emoji ? emoji : <EmojiSmile />}
        {lock || <Chevron className={styles.chevron} />}
      </button>
      <div
        className={cx("emojiWrap", styles.emojiWrap, {
          [styles.isOpen]: isOpen,
        })}
      >
        {emojis.map((emoji) => {
          return (
            <button
              key={emoji.emojiValue}
              value={emoji.emojiValue}
              onClick={() => onChangeValue(emoji.emojiValue)}
            >
              {emoji.emoji}
            </button>
          );
        })}
      </div>
    </DropdownWrap>
  );
};
export default EmojiDropdown;
