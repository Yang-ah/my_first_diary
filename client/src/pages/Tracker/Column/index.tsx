import { IconHeart, IconSolidHeart } from "../../../assets/icon";
import cx from "classnames";
import styles from "./column.module.scss";
import styled from "styled-components";

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
  return (
    <Article key={month} className={cx(styles.column, className)}>
      <header>{month === "date" || month}</header>

      {children.map((child: any) => {
        return month === "date" ? (
          <div
            key={child}
            className={cx(styles.columnChild, styles.date, "date")}
          >
            {child}
          </div>
        ) : (
          <ul
            className={cx("cell", styles.columnChild)}
            key={month + child.date}
          >
            <li>{child.emotion ? child.emotion : "·"}</li>
            <li>{child.exercise ? <IconSolidHeart /> : "·"}</li>
          </ul>
        );
      })}
    </Article>
  );
};

export default Column;
