import { configureStore } from "@reduxjs/toolkit";
import todoSlice, { Todoarray } from "./todoSlice";
import darkModeSlice, { Dark } from "./darkModeSlice";

const store = configureStore({
  reducer: {
    createTodo: todoSlice,
    lightMode: darkModeSlice,
  },
});

export type RootState = {
  createTodo: Todoarray;
  lightMode: Dark;
};

export default store;
