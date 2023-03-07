import React from "react";
import Navbar from "./components/navbar/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

const router = createBrowserRouter([
  {
    path: "/",
    element: <,
  },
]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
