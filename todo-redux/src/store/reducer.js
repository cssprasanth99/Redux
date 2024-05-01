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

export default todoReducer;
