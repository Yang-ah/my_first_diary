import React, { useRef } from "react";
import styled from "styled-components";
import styles from "./toast.module.scss";
import { IconCheck } from "../../../assets/icon";
import cx from "classnames";

interface IToast {
  children: string | any;
  className?: string;
}

const Container = styled.div`
  background-color: ${(props) => props.theme.PRIMARY_30};
`;

const Toast = ({ children, className }: IToast) => {
  const ref = useRef(null);

  return (
    <Container ref={ref} className={cx(styles.wrap, className)}>
      <IconCheck />
      <p>{children}</p>
    </Container>
  );
};

export default Toast;
