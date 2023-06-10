import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

    deleteTodo: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id != action.payload);
    },
  },
});

export const { createTodo, completed, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
