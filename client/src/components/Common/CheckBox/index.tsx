import React from "react";
import cx from "classnames";
import styles from "./checkBox.module.scss";

interface ICheckBox {
  className: string;
}

const CheckBox = ({ className, ...props }: ICheckBox) => {
  return (
    <label className={cx(styles.wrapper, className)}>
      <input type="checkbox" readOnly hidden {...props} />
    </label>
  );
};

export default CheckBox;
