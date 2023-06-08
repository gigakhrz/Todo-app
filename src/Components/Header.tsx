import styled from "styled-components";
import logo from "../assets/TODO.png";
import sun from "../assets/icon-sun.svg";
import mun from "../assets/icon-moon.svg";
import { useDispatch, useSelector } from "react-redux";
import { setDark } from "../features/darkModeSlice";
import { RootState } from "../features/store";

const Header = (): JSX.Element => {
  const mode = useSelector((store: RootState) => store.lightMode.dark);
  const dispatch = useDispatch();
  const handleSetMode = (): void => {
    dispatch(setDark(!mode));
  };

  return (
    <HeaderContainer>
      <img src={logo} alt="logo img" />
      <img onClick={handleSetMode} src={mode ? mun : sun} alt="" />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  width: 327px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
