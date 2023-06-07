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
    <TodoContainer>
      <form className="create" onSubmit={handleAddTodo}>
        <button type="submit" className="check"></button>
        <input
          id="text1"
          onChange={(e) => setText(e.target.value)}
          className="createTodo"
          type="text"
          placeholder="Create new todo"
        />
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="todo">
            <input
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

const TodoContainer = styled.div`
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
    }
  }

  .Todo {
    display: flex;
    width: 327px;
    height: 48px;
    align-items: center;
  }
`;
