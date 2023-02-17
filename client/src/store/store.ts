import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { feedbackReducer } from "./reducers/feedbackSlice";
const rootReducer = combineReducers({
  feedbackReducer,
});

export const cStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type Store = ReturnType<typeof cStore>;
export type AppDispatch = Store["dispatch"];
