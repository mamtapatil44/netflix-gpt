import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


const routes = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/browse", element: <Browse /> },
]);

const Body = () => {
  

 
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
};

export default Body;
