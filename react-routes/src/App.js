import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Root from "./pages/Root";
import CategoryDetails from "./pages/CategoryDetails";
import Error from "./pages/Error";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    id: "root",
    loader: async () => {
      const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await resp.json();
      return data;
    },
    children: [
      { path: "/", element: <Home /> },
      { path: "/category", 
        element: <Category />,
        loader: async () => {
          const resp = await fetch('https://jsonplaceholder.typicode.com/albums');
          const data = await resp.json();
          return data;
        }, 
      },
      { path: "/category/:categoryId", element: <CategoryDetails /> }
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <section>
        <RouterProvider router={routes} />
      </section>
    </div>
  );
}

export default App;
