import styled from "styled-components";

const Button = styled.button`
  & .selectedButton,
  &:hover {
    background-color: ${(props) => props.theme.SECONDARY_30};
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
    <Button type="button" onClick={onClick} className={className} {...props}>
      <span>{children}</span>
    </Button>
  );
};
export default NavButton;
