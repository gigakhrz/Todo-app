import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const initialState: Todo = {
  id: 5,
  text: "coding",
  done: false,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createTodo: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },

    completed: (state) => {
      state.done = !state.done;
    },
  },
});

export const { createTodo, completed } = todoSlice.actions;
export default todoSlice.reducer;
