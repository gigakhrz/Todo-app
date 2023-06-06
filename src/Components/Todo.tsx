import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { createTodo, completed } from "../features/todoSlice";
import { RootState } from "../features/store";
import { useState } from "react";

const Todo = (): JSX.Element => {
  const task = useSelector((store: RootState) => store.createTodo);
  const dispatch = useDispatch();

  const [text, setText] = useState<string>("");

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createTodo(text));
  };

  console.log(task.done);

  return (
    <TodoContainer>
      <form className="create" onSubmit={handleAddTodo}>
        <input type="submit" className="check" />
        <input
          id="text1"
          onChange={(e) => setText(e.target.value)}
          className="createTodo"
          type="text"
          placeholder="Create new todo"
        />
      </form>

      <div className="Todo">
        <input type="checkbox" onClick={() => dispatch(completed())} />
        <p>{task.text}</p>
      </div>
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
  justify-content: center;

  .create {
    width: 327px;
    display: flex;
    align-items: center;
    border: 2px solid red;

    .check {
      margin: 14px 0 20px;
      width: 20px;
      height: 20px;
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
