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
    children: [
      { path: "/", element: <Home /> },
      { path: "/category", element: <Category /> },
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
