import React from "react";
import styles from "./checkBox.module.scss";
import { IconCheck } from "../../../assets/icon";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { onTrackerAtom } from "../../../atom";

interface ICheckBox {
  child: string;
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

const CheckBox = ({ child, ...props }: ICheckBox) => {
  const [onTracker, setTracker] = useRecoilState(onTrackerAtom);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { checked, name } = e.currentTarget;

    setTracker((prev) => {
      return { ...prev, [name]: checked };
    });
  };

  return (
    <Label className={styles.wrapper}>
      <div className={styles.box}>
        <input
          onChange={onChange}
          name={child}
          type="checkbox"
          hidden
          checked={onTracker[child]}
          {...props}
        />
        <IconCheck />
      </div>

      <p>{child}</p>
    </Label>
  );
};

export default CheckBox;
