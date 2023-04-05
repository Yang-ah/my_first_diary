import { useRecoilValue } from "recoil";
import { onTrackerAtom } from "../../../../atom";
import cx from "classnames";
import styles from "./sideTrackers.module.scss";
import { IconDumbbell } from "../../../../assets/icon";
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

interface ISideTrackers {
  children: any;
}

const SideTrackers = ({ children }: ISideTrackers) => {
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
          {children}
        </Li>
      )}

      {onTracker.tracker || (
        <Li className={cx(styles.trackerButtons, "tracker", styles.offTracker)}>
          {children}
        </Li>
      )}
    </>
  );
};

export default SideTrackers;
