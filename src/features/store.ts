import { configureStore } from "@reduxjs/toolkit";
import todoSlice, { Todo } from "./todoSlice";

const store = configureStore({
  reducer: {
    createTodo: todoSlice,
  },
});

export type RootState = {
  createTodo: Todo;
};

export default store;
