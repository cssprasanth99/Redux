import { legacy_createStore, combineReducers } from "redux";
import { themeReducer, todoReducer } from "../reducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  todo: todoReducer,
});

export const store = legacy_createStore(rootReducer);
