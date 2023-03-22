import { useState } from "react";
import styled from "styled-components";
import { IconAt, IconGithub, IconPhone } from "../../../assets/icon";
import styles from "./footer.module.scss";
import cx from "classnames";

const FooterWrap = styled.footer`
  svg {
    fill: ${(props) => props.theme.PRIMARY_50};
  }
  p {
    color: ${(props) => props.theme.PRIMARY_50};
    border: 1px solid ${(props) => props.theme.PRIMARY_50};
  }
`;

const Footer = () => {
  const [message, setMessage] = useState("");

  const onHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    if (e.type === "mouseleave") {
      setMessage("");
      return;
    }

    name === "github" && setMessage("Click me!");
    name === "phone" && setMessage("010-6367-8340");
    name === "email" && setMessage("yangah0409@gmail.com");
  };

  return (
    <FooterWrap className={styles.footer} onMouseLeave={onHover}>
      <button type="button" onMouseEnter={onHover} name="github">
        <IconGithub />
      </button>
      <button type="button" onMouseEnter={onHover} name="phone">
        <IconPhone />
      </button>
      <button type="button" onMouseEnter={onHover} name="email">
        <IconAt />
      </button>
      <p className={cx(styles.message, message || styles.hidden)}>
        {message && message}
      </p>
    </FooterWrap>
  );
};

export default Footer;
