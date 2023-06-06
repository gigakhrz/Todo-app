import styled from "styled-components";
import bgLight from "./assets/bg-mobile-light.jpg";
import GlobalStyles from "./GlobalStyles";
import Todo from "./Components/Todo";
function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Todo />
      </Container>
    </>
  );
}

export default App;

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-image: url(${bgLight});
  background-repeat: no-repeat;
  background-size: 100% 200px;
`;
