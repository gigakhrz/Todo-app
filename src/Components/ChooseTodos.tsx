import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../features/store";

const ChooseTodos = (): JSX.Element => {
  const mode = useSelector((store: RootState) => store.lightMode.dark);

  return (
    <ChooseContainer mode={mode}>
      <p>All</p>
      <p>Active</p>
      <p>Completed</p>
    </ChooseContainer>
  );
};
export default ChooseTodos;

const ChooseContainer = styled.nav<{ mode: boolean }>`
  width: 327px;
  height: 48px;
  background-color: ${(props) => (props.mode ? "#25273D" : "white")};
  box-shadow: ${(props) =>
    props.mode
      ? " 0px 35px 50px -15px rgba(0, 0, 0, 0.5)"
      : " 0px 35px 50px -15px rgba(194, 195, 214, 0.5)"};

  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 19px;

  p {
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: -0.19px;
    color: #9495a5;
  }
`;
