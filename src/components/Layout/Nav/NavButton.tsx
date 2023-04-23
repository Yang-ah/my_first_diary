import cx from "classnames";
import styled from "styled-components";

const Button = styled.button`
  & .selectedButton &:hover {
    background-color: ${(props) => props.theme.PRIMARY_40};
  }
`;

interface INavButton {
  className: string;
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
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
      className={cx("button", className)}
      {...props}
    >
      <span>{children}</span>
    </Button>
  );
};
export default NavButton;
