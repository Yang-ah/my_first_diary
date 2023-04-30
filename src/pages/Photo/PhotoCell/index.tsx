import { useRef, useState } from "react";
import { IconModify, IconPlus } from "../../../assets/icon";
import styled from "styled-components";
import styles from "./photoCell.module.scss";
import cx from "classnames";

interface ILabel {
  photoUrl?: string;
}

interface IInput {
  ref: React.RefObject<HTMLInputElement>;
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

const PhotoCell = ({ item, month, id }: any) => {
  const imgRef = useRef<any>(null);
  const [newImgUrl, setNewImgUrl] = useState(item.photoUrl);

  const onChange = async () => {
    const reader = new FileReader();
    reader.readAsDataURL(imgRef.current.files[0]);
    reader.onload = () => setNewImgUrl(reader.result + "");
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
          type="submit"
          className={cx(item.photoUrl ? styles.modify : "add")}
        >
          {item.photoUrl ? <IconModify /> : <IconPlus />}
        </button>
      </Label>
    </form>
  );
};

export default PhotoCell;
