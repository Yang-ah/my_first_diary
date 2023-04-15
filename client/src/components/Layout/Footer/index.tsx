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
  return (
    <FooterWrap className={styles.footer}>
      <p className={styles.copyright}> ⓒ 2023. Yang-ah all rights reserved.</p>
    </FooterWrap>
  );
};

export default Footer;
