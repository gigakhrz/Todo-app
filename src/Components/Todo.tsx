import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { createTodo, completed } from "../features/todoSlice";
import { RootState } from "../features/store";
import { useState } from "react";

const Todo = (): JSX.Element => {
  const tasks = useSelector((store: RootState) => store.createTodo.tasks);
  const dispatch = useDispatch();

  const [text, setText] = useState<string>("");

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim() !== "") {
      dispatch(createTodo(text));
    }
  };

  console.log(tasks);

  return (
    <TodoContainer task={tasks}>
      <form className="create" onSubmit={handleAddTodo}>
        <button type="submit" className="check"></button>
        <input
          id="text1"
          onChange={(e) => setText(e.target.value)}
          className="createTodo"
          type="text"
          placeholder="Create new todo..."
        />
      </form>
      <ul className="list">
        {tasks.map((task) => (
          <li key={task.id} className="todo">
            <input
              className="isDone"
              type="checkbox"
              onClick={() => dispatch(completed(task.id))}
            />
            <p>{task.text}</p>
          </li>
        ))}
      </ul>
    </TodoContainer>
  );
};

export default Todo;

const TodoContainer = styled.div<{
  task: { id: number; text: string; done: boolean }[];
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  .create {
    width: 327px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 14px 0 14px 20px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);

    .check {
      width: 20px;
      height: 20px;

      border: none;
      background: white;
      border-radius: 50%;
      border: 2px solid #d1d2da;
    }

    .createTodo {
      width: 100%;
      height: 48px;
      border: none;

      font-family: Josefin Sans;
      font-size: 12px;
      font-weight: 400;
      line-height: 12px;
      letter-spacing: -0.17px;
      color: #494c6b;
    }

    .createTodo:focus-visible {
      outline: none;
    }
    .createTodo::placeholder {
      color: #9495a5;
    }
  }

  .list {
    display: ${(props) => (props.task.length == 0 ? "none" : "flex")};
    width: 327px;
    align-items: center;
    flex-direction: column;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);

    .todo {
      display: flex;
      width: 327px;
      height: 48px;
      align-items: center;
      width: 100%;
      gap: 24px;
      padding: 20px 24px;

      .isDone {
        width: 20px;
        height: 20px;
      }

      p {
        font-size: 12px;
        font-weight: 400;
        line-height: 12px;
        letter-spacing: -0.17px;
        color: #494c6b;
      }
    }
  }
`;
