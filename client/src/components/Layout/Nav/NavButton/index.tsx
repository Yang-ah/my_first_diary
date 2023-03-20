import cx from "classnames";
import styles from "./navButton.module.scss";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.theme.PRIMARY_30};

  & .selectedButton,
  &:hover {
    background-color: ${(props) => props.theme.SECONDARY_30};
  }
`;

interface INavButton {
  className: string;
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const NavButton = ({
  className,
  children = "text",
  onClick = () => {},
  ...props
}: INavButton) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      className={cx(styles.button, className)}
      {...props}
    >
      <span>{children}</span>
    </Button>
  );
};
export default NavButton;
