import { useRecoilValue } from "recoil";
import { onTrackerAtom } from "../../../../atom";
import cx from "classnames";
import styles from "./sideTrackers.module.scss";
import { IconDumbbell, IconLock } from "../../../../assets/icon";
import { EmojiSmile } from "../../../../assets/emoji";
import styled from "styled-components";

const Li = styled.li`
  svg {
    fill: ${(props) => props.theme.SECONDARY_30};
  }
  button {
    border: 1px solid ${(props) => props.theme.PRIMARY_20};
  }
`;

const SideTrackers = () => {
  const onTracker = useRecoilValue(onTrackerAtom);

  return (
    <>
      {onTracker.tracker && (
        <Li className={cx(styles.trackerButtons, "tracker")}>
          <button className={styles.exercise}>
            <IconDumbbell />
          </button>
          <button>
            <EmojiSmile />
          </button>
          <button className={styles.lock}>
            <IconLock />
          </button>
        </Li>
      )}

      {onTracker.tracker || (
        <Li className={cx(styles.trackerButtons, "tracker", styles.offTracker)}>
          <button className={styles.lock}>
            <IconLock />
          </button>
        </Li>
      )}
    </>
  );
};

export default SideTrackers;
