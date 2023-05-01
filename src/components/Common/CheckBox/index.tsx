import React from "react";
import styles from "./checkBox.module.scss";
import { IconCheck } from "../../../assets/icon";
import { useRecoilState } from "recoil";
import { onTrackerAtom } from "../../../state";
import cx from "classnames";

interface ICheckBox {
  children: string;
  className?: string;
  name: string;
}

const CheckBox = ({ name, children, className, ...props }: ICheckBox) => {
  const [onTracker, setTracker] = useRecoilState(onTrackerAtom);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { checked, name } = e.currentTarget;

    setTracker((prev) => {
      return { ...prev, [name]: checked };
    });
  };

  return (
    <label className={cx(styles.wrapper, className)}>
      <div className={styles.box}>
        <input
          onChange={onChange}
          name={name}
          type="checkbox"
          hidden
          checked={onTracker[name]}
          {...props}
        />
        <IconCheck />
      </div>

      <p>{children}</p>
    </label>
  );
};

export default CheckBox;
