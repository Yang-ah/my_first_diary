import React from "react";
import styles from "./checkBox.module.scss";
import { IconCheck } from "../../../assets/icon";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { onTrackerAtom } from "../../../atom";
import cx from "classnames";
interface ICheckBox {
  children: string;
  className?: string;
  name: string;
}

const Label = styled.label`
  color: ${(props) => props.theme.PRIMARY_50};
  > div {
    border: 1px solid ${(props) => props.theme.PRIMARY_50};
  }
  svg {
    fill: ${(props) => props.theme.PRIMARY_50};
  }
`;

const CheckBox = ({ name, children, className, ...props }: ICheckBox) => {
  const [onTracker, setTracker] = useRecoilState(onTrackerAtom);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { checked, name } = e.currentTarget;

    setTracker((prev) => {
      return { ...prev, [name]: checked };
    });
  };

  return (
    <Label className={cx(styles.wrapper, className)}>
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
    </Label>
  );
};

export default CheckBox;
