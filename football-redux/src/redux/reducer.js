// reducer.js
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "./actionTypes";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const footballreducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

function todoReducer(state = [], action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "DELETE":
      // Filter out the task with the specified id to delete
      return state.filter((task) => task.id !== action.payload.id);

    case "UPDATE":
      // Map over the state array to update the specific task
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, status: true } : task
      );

    default:
      return state;
  }
}

export { footballreducer, todoReducer };
