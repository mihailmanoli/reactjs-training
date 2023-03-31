import { useState, useReducer } from "react";
import reducer from "../redux/reducer";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const initialState = {
    todos: [],
    completedTodos: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDelete = (todo) => {
    dispatch({
        type: 'DELETE_TODO',
        payload: {id: todo.id}
    });
  };

  const handleComplete = (todo) => {
    dispatch({
        type: 'MARK_TODO',
        payload: { ...todo }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = Date.now().toString();
    dispatch({
        type: 'ADD_TODO',
        payload: {id, title: todo}
    });
    setTodo('');
  };

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  return (
    <>
      <h2>TODOs</h2>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "200px",
            gap: "10px",
          }}
        >
          <input type="text" name="todo" value={todo} onChange={handleChange} />
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>My TODOs:</h2>
      <ul>
        {state.todos.map((todo) => (
          <>
            <li key={todo.id}>
                {todo.title}
                <button onClick={() => handleDelete(todo)}>Delete</button>
                <button onClick={() => handleComplete(todo)}>Complete</button>
            </li>
          </>
        ))}
      </ul>
      <h2>My completed TODOs:</h2>
      <ul>
        {state.completedTodos.map((todo) => (
          <>
            <li key={todo.id}>
                {todo.title}
                <button onClick={() => handleDelete(todo)}>Delete</button>
            </li>
          </>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
