import { configureStore } from "@reduxjs/toolkit";
import todoSlice, { Todoarray } from "./todoSlice";

const store = configureStore({
  reducer: {
    createTodo: todoSlice,
  },
});

export type RootState = {
  createTodo: Todoarray;
};

export default store;
