import { combineReducers, legacy_createStore } from "redux";
import { footballreducer, todoReducer } from "./reducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  football: footballreducer,
});
export const store = legacy_createStore(rootReducer);
