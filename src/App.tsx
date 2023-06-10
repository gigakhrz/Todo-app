import styled from "styled-components";
import bgLight from "./assets/bg-mobile-light.jpg";
import bgDark from "./assets/bg-mobile-dark.jpg";
import GlobalStyles from "./GlobalStyles";
import Todo from "./Components/Todo";
import Header from "./Components/Header";
import { useSelector } from "react-redux";
import { RootState } from "./features/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ActiveTodos from "./Components/ActiveTodos";
import CreateNewTodo from "./Components/CreateNewTodo";

function App() {
  const mode = useSelector((store: RootState) => store.lightMode.dark);

  return (
    <Router>
      <GlobalStyles />
      <Container mode={mode}>
        <Header />
        <TodoContainer>
          <CreateNewTodo />
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/active" element={<ActiveTodos />} />
          </Routes>
        </TodoContainer>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.main<{ mode: boolean }>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  background-image: url(${(props) => (props.mode ? bgDark : bgLight)});
  background-repeat: no-repeat;
  background-size: 100% 200px;
  padding-top: 48px;
  background-color: ${(props) => (props.mode ? "#25273D" : "white")};
`;

const TodoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;
