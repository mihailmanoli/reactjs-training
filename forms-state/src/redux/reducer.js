function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
        completedTodos: state.completedTodos.filter(
          (todo) => todo.id !== action.payload.id
        ),
      };
    case "MARK_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
        completedTodos: [...state.completedTodos, action.payload],
      };
    default:
      throw new Error("Wrong action!");
  }
}

export default reducer;
