import React from "react";
import Navbar from "./components/navbar/NavBar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {

c

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
  },
]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
