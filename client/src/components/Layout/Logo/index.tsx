import styled from "styled-components";

const LogoDiv = styled.div`
  color: ${(props) => props.theme.PRIMARY_50};
  text-shadow: 2px 2px 2px gray;
  font-family: "Island Moments";
`;

interface ILogo {
  className?: string;
}

const Logo = ({ className }: ILogo) => {
  return (
    <LogoDiv className={className}>
      <p>My</p>
      <p>First</p>
      <p>Diary</p>
    </LogoDiv>
  );
};

export default Logo;
