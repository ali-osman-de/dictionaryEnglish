import { configureStore } from "@reduxjs/toolkit";
import wordReducer from "../reducers/wordSlice";

export const store = configureStore({
  reducer: {
    word: wordReducer,
  },
});
