import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./components/usersSlice";

export const store = configureStore({
  reducer: { users: usersReducer },
});
