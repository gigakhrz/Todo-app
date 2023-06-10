import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../features/store";
import ChooseTodos from "./ChooseTodos";
import { completed, deleteTodo } from "../features/todoSlice";
import check from "../assets/icon-check.svg";

const ActiveTodos = (): JSX.Element => {
  const tasks = useSelector((store: RootState) => store.createTodo.tasks);
  const mode = useSelector((store: RootState) => store.lightMode.dark);

  const dispatch = useDispatch();

  const actives = tasks.filter((task) => task.done === false);

  return (
    <Cont>
      <Ulcontainer task={tasks} mode={mode}>
        {actives.map((active) => (
          <TaskDiv mode={mode} done={active.done} key={active.id}>
            <li className="todo">
              <div
                className="isDone"
                onClick={() => dispatch(completed(active.id))}
              >
                <img src={check} alt="" />
              </div>
              <p>{active.text}</p>

              <svg
                onClick={() => dispatch(deleteTodo(active.id))}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
              >
                <path
                  fill="#494C6B"
                  fillRule="evenodd"
                  d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                />
              </svg>
            </li>
            <hr />
          </TaskDiv>
        ))}
      </Ulcontainer>
      {tasks.length > 0 ? <ChooseTodos /> : null}
    </Cont>
  );
};

export default ActiveTodos;

const Cont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const Ulcontainer = styled.ul<{
  task: { id: number; text: string; done: boolean }[];
  mode: boolean;
}>`
  display: ${(props) => (props.task.length == 0 ? "none" : "flex")};
  width: 327px;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;

  box-shadow: ${(props) =>
    props.mode
      ? " 0px 35px 50px -15px rgba(0, 0, 0, 0.5)"
      : " 0px 35px 50px -15px rgba(194, 195, 214, 0.5)"};

  .todo {
    display: flex;
    width: 327px;
    height: 48px;
    align-items: center;
    width: 100%;
    gap: 24px;
    padding: 20px 24px;
    background-color: ${(props) => (props.mode ? "#25273D" : "white")};

    p {
      width: 78%;
      font-size: 12px;
      font-weight: 400;
      line-height: 12px;
      letter-spacing: -0.17px;
    }
  }

  svg {
    width: 18px;
    height: 18px;

    @media (max-width: 768px) {
      transform: scale(0.67);
    }
    @media (min-width: 1024px) {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    .list li:hover svg {
      display: block;
    }
  }
`;

const TaskDiv = styled.div<{ mode: boolean; done: boolean }>`
  width: 327px;
  display: flex;
  align-items: center;
  flex-direction: column;

  hr {
    border: none;
    height: 1px;
    width: 100%;
    background-color: ${(props) => (props.mode ? "#393A4B" : "#E3E4F1")};
  }

  p {
    text-decoration: ${(props) => (props.done ? "line-through" : "")};
    color: ${(props) =>
      props.done
        ? props.mode
          ? "#4D5067"
          : "#D1D2DA"
        : props.mode
        ? "#C8CBE7"
        : "#494c6b"};
  }

  .isDone {
    width: 20px;
    height: 20px;

    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(211, 211, 211, 0.7);
    cursor: pointer;
    background: ${(props) =>
      props.done ? " linear-gradient(135deg, #55ddff 0%, #c058f3 100%)" : ""};
  }
`;
