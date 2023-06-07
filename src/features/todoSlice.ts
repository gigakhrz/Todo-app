import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Todo from "../Components/Todo";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export interface Todoarray {
  tasks: Todo[];
}

const initialState: Todoarray = {
  tasks: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createTodo: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        done: false,
      };
      state.tasks.unshift(newTodo);
    },

    completed: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.done = !task.done;
      }
    },
  },
});

export const { createTodo, completed } = todoSlice.actions;
export default todoSlice.reducer;
