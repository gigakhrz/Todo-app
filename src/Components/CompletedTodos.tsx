import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../features/store";
import ChooseTodos from "./ChooseTodos";
import { completed, deleteTodo } from "../features/todoSlice";
import check from "../assets/icon-check.svg";

const CompletedTodos = (): JSX.Element => {
  const tasks = useSelector((store: RootState) => store.createTodo.tasks);
  const mode = useSelector((store: RootState) => store.lightMode.dark);

  const dispatch = useDispatch();

  const Completed = tasks.filter((task) => task.done === true);

  return (
    <Cont>
      <Ulcontainer task={tasks} mode={mode}>
        {Completed.map((complete, index) => (
          <TaskDiv mode={mode} done={complete.done} key={complete.id}>
            <li className="todo">
              <div
                className="isDone"
                onClick={() => dispatch(completed(complete.id))}
              >
                <img src={check} alt="" />
              </div>

              <p>{complete.text}</p>

              <svg
                className="delete-icon"
                onClick={() => dispatch(deleteTodo(complete.id))}
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
            {index !== Completed.length - 1 && <hr />}
          </TaskDiv>
        ))}
      </Ulcontainer>
      {tasks.length > 0 ? <ChooseTodos /> : null}
    </Cont>
  );
};

export default CompletedTodos;

const Cont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const TaskDiv = styled.div<{ mode: boolean; done: boolean }>`
  width: 327px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 1024px) {
    width: 540px;
  }

  hr {
    border: none;
    height: 1px;
    width: 100%;
    background-color: ${(props) => (props.mode ? "#393A4B" : "#E3E4F1")};
  }

  .isDone {
    width: 20px;
    height: 20px;
    @media (min-width: 1024px) {
      width: 24px;
      height: 24px;

      cursor: pointer;
    }

    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(211, 211, 211, 0.7);
    cursor: pointer;
    background: ${(props) =>
      props.done ? " linear-gradient(135deg, #55ddff 0%, #c058f3 100%)" : ""};
    img {
      display: ${(props) => (props.done ? "flex" : "none")};
    }
  }

  .isDone:hover {
    border: 1px solid #c058f3;
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
  background-color: ${(props) => (props.mode ? "#25273D" : "white")};

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
    padding: 16px 20px;
    background-color: ${(props) => (props.mode ? "#25273D" : "white")};
    border-radius: 5px;
    @media screen and (min-width: 1024px) {
      width: 540px;
      gap: 24px;
      padding: 20px 24px;
    }

    &:hover {
      svg.delete-icon {
        display: block;
        cursor: pointer;
      }
    }

    p {
      width: 78%;
      font-size: 12px;
      font-weight: 400;
      line-height: 12px;
      letter-spacing: -0.17px;

      @media screen and (min-width: 1024px) {
        font-size: 18px;
        line-height: 18px;
        letter-spacing: -0.25px;
        cursor: pointer;
      }
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
`;
