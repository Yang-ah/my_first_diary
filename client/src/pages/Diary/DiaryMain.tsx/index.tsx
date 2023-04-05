interface IDiaryMain {
  onChange: any;
  value: string;
  disabled: boolean;
}

const DiaryMain = ({ onChange, value, disabled }: IDiaryMain) => {
  return (
    <input
      type="text"
      onChange={onChange}
      name="diary"
      placeholder="오늘의 한 줄 일기를 써보세요."
      value={value}
      disabled={disabled}
    />
  );
};

export default DiaryMain;
