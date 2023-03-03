import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Error from "./pages/Error";
import Category from "./components/Category";
import CocktailUpload from "./components/CocktailUpload";
import CocktailPreview from "./components/CocktailPreview";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "category/:categoryId",
        children: [
          { index: true, element: <Category /> },
          { path: "cocktail/:cocktailId", element: <CocktailPreview /> },
        ],
      },
      { path: "/upload", element: <CocktailUpload /> },
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
