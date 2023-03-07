import React from "react";
import Navbar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer/>
      </>
    );
}

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <,Home/,

        },
        {
          path: "/gigs",
          element: <Gigs/>,
        },
        {
          path: "about",
          element: <h1>About</h1>,
        },
        {
          path: "about",
          element: <h1>About</h1>,
        },
        {
          path: "about",
          element: <h1>About</h1>,
        },
        {
          path: "about",
          element: <h1>About</h1>,
        },
        {
          path: "about",
          element: <h1>About</h1>,
        },
      
      ]
  },
]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
