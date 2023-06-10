import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { completed, deleteTodo } from "../features/todoSlice";
import { RootState } from "../features/store";

import ChooseTodos from "./ChooseTodos";

const Todo = (): JSX.Element => {
  const tasks = useSelector((store: RootState) => store.createTodo.tasks);
  const dispatch = useDispatch();

  console.log(tasks);
  //for lightmode
  const mode = useSelector((store: RootState) => store.lightMode.dark);

  return (
    <Ulcontainer task={tasks} mode={mode}>
      {tasks.map((task) => (
        <TaskDiv mode={mode} done={task.done} key={task.id}>
          <li className="todo">
            <input
              className="isDone"
              type="checkbox"
              onClick={() => dispatch(completed(task.id))}
            />
            <p>{task.text}</p>

            <svg
              onClick={() => dispatch(deleteTodo(task.id))}
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
      {tasks.length > 0 ? <ChooseTodos /> : null}
    </Ulcontainer>
  );
};

export default Todo;

const Ulcontainer = styled.div<{
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

    .isDone {
      width: 20px;
      height: 20px;
    }

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
`;
