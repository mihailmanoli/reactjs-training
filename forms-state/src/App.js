import "./App.css";
import DynamicForm from "./components/dynamic-form";
// import AddControllerForm from './components/add-controller';
// import TodoList from './components/todo-list';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home";

/*
  It's useful to separate the logic from the component.
  Similar to react-router loader.
*/
async function formAction ({ request }) {
  console.log(request);
  const formElements = await request.formData();
  console.log(formElements.get('name'))
  return null;
};

const routes = createBrowserRouter([
  {
    path: "/", element: <Home />,
  },
  {
    path: "/form", element: <DynamicForm />, action: formAction,
  },
]);

function App() {
  return (
    <>
      {/*<DynamicForm />
       <AddControllerForm />
      <hr />
      <TodoList /> */}
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
