import React from "react";
import cx from "classnames";
import styles from "./button.module.scss";

interface IButton {
  className: string;
  children: string;
  color: string;
}

const Button = ({ className, children, color, ...props }: IButton) => {
  return (
    <button
      className={cx(styles.button, className, styles[color])}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
