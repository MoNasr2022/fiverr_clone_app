import React from "react";
import Navbar from "./components/navbar/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

  return (
    <div className="App">
      <Navbar />
     
    </div>
  );
}

export default App;
