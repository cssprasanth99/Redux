export const themeReducer = (state = false, action) => {
  switch (action.type) {
    case "LIGHT":
      return true;
    case "DARK":
      return false;
    default:
      return state;
  }
};

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return [];
    case "UPDATE":
      return [];
    default:
      return state;
  }
};
