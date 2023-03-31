import './App.css';
import DynamicForm from './components/auth';
import AddControllerForm from './components/add-controller';
import TodoList from './components/todo-list';

function App() {
  return (
    <>
      <DynamicForm />
      <AddControllerForm />
      <hr />
      <TodoList />
    </>
  );
}

export default App;
