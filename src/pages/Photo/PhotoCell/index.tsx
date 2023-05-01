import { useRef, useState } from "react";
import { IconModify, IconPlus } from "../../../assets/icon";
import styled from "styled-components";
import styles from "./photoCell.module.scss";
import cx from "classnames";
import { Toast } from "../../../components";
import { IData, dataAtom } from "../../../state";
import { useSetRecoilState } from "recoil";

interface ILabel {
  photoUrl?: string;
}

interface IInput {
  ref: React.RefObject<HTMLInputElement>;
}

interface IPhotoCell {
  item: IData;
  month: string;
}

const ImgInput = styled.input<IInput>``;

const Label = styled.label<ILabel>`
  &.nonePhoto {
    background-color: ${(props) => props.theme.PRIMARY_10};

    > .add {
      background-color: ${(props) => props.theme.SECONDARY_30};
    }
  }

  // have a photo
  &:not(.nonePhoto) {
    color: white;
    background: no-repeat center/120% url(${(props) => props.photoUrl});
    transition: 0.2s opacity ease-in;
    background-size: cover;

    &:hover {
      opacity: 0.4;
    }
  }
`;

const PhotoCell = ({ item, month }: IPhotoCell) => {
  const imgRef = useRef<any>(null);
  const [newImgUrl, setNewImgUrl] = useState(item.photoUrl);
  const [onToast, setOnToast] = useState(false);
  const setData = useSetRecoilState(dataAtom);

  const showToast = () => {
    setOnToast(true);
    const timer = setTimeout(() => {
      setOnToast(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  };

  const onChange = async () => {
    const reader = new FileReader();
    reader.readAsDataURL(imgRef.current.files[0]);
    reader.onload = () => {
      setNewImgUrl(reader.result + "");
      setData((prevData) => {
        const newMonthData = [...prevData[month]];
        const newData = {
          ...newMonthData[item.date - 1],
          photoUrl: reader.result + "",
        };
        newMonthData[item.date - 1] = newData;
        const newDataObj = { ...prevData, [month]: newMonthData };
        return newDataObj;
      });
    };
    showToast();
  };

  return (
    <form className={styles.dateWrap} encType="multipart/form-data">
      <Label photoUrl={newImgUrl} className={newImgUrl || "nonePhoto"}>
        <p>{item.date}</p>
        <ImgInput
          type="file"
          accept="image/*"
          ref={imgRef}
          name="photoUrl"
          hidden
          onChange={onChange}
        />

        <button
          type="button"
          // type="submit"
          className={cx(item.photoUrl ? styles.modify : "add")}
        >
          {item.photoUrl ? <IconModify /> : <IconPlus />}
        </button>
      </Label>
      <Toast className={cx(styles.toast, { [styles.onToast]: onToast })}>
        {`${item.date} ${month.slice(0, 3)} 사진을 변경하였습니다. :)`}
      </Toast>
    </form>
  );
};

export default PhotoCell;
