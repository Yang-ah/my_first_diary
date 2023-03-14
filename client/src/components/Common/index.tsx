import styled from "styled-components";

export const baseSpace = "15px";
export const baseRadius = "5px";

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-between;
  border-radius: 10px;
  align-items: center;
`;

export const Section = styled.section`
  width: 100%;
  height: 560px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddBtn = styled.button`
  width: 30px;
  height: 30px;
  margin: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  justify-self: flex-end;
  cursor: pointer;
  background-color: ${(props) => props.theme.pointColor};
  color: ${(props) => props.theme.fontColor};
`;

export const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const DateBox = styled.div`
  width: 100%;
  border-radius: ${baseRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  background-color: ${(props) => props.theme.primaryColor};
`;

export interface TrackerProps {
  tracker: boolean;
}

export const SectionSide = styled.div<TrackerProps>`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: ${(props) =>
    props.tracker ? `repeat(3, 1fr)` : `1fr`};
`;

export const SideBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${baseRadius};
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  color: ${(props) => props.theme.fontColor};
  cursor: pointer;
`;

export const MainBox = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  outline: none;
  padding: 0 10px;
  display: flex;
  align-items: center;
  font-size: 12px;
  overflow-x: auto;
  overflow-y: hidden;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */

  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

export const CheckContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  border-radius: 10px;
  i {
    font-size: 13px;
    margin: 2px 1px 0 0;
  }

  input {
    display: none;
  }

  div {
    margin-left: 10px;
  }
  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    i {
      margin: 2px 2px 0 0;
    }
  }
`;
