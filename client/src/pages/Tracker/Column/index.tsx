import { IconHeart, IconSolidHeart } from "../../../assets/icon";
import cx from "classnames";
import styles from "./column.module.scss";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { onTrackerAtom } from "../../../atom";

const Article = styled.article`
  > header,
  .date {
    background-color: ${(props) => props.theme.PRIMARY_30};
  }
  .cell {
    border: 1px solid ${(props) => props.theme.PRIMARY_10};
  }
  svg {
    fill: ${(props) => props.theme.SECONDARY_30};
  }
`;

interface IChildren {
  date: number;
  emotion: string;
  exercise: boolean;
}
interface IColumn {
  month: string;
  children: IChildren[] | number[];
  className?: string;
}

const Column = ({ children, month, className }: IColumn) => {
  const onTracker = useRecoilValue(onTrackerAtom);

  return (
    <Article key={month} className={cx(styles.column, className)}>
      {month === "date" && (
        <>
          <header></header>
          {children.map((child: any) => {
            return (
              <div
                key={child}
                className={cx(styles.columnChild, styles.date, "date")}
              >
                {child}
              </div>
            );
          })}
        </>
      )}

      {month === "date" || (
        <>
          <header>{month}</header>

          {children.map((child: any) => {
            return (
              <ul
                className={cx("cell", styles.columnChild)}
                key={month + child.date}
              >
                <li className={cx({ [styles.hidden]: !onTracker.emotion })}>
                  {child.emotion ? child.emotion : "·"}
                </li>

                <li className={cx({ [styles.hidden]: !onTracker.exercise })}>
                  {child.exercise ? <IconSolidHeart /> : <IconHeart />}
                </li>
              </ul>
            );
          })}
        </>
      )}
    </Article>
  );
};

export default Column;
