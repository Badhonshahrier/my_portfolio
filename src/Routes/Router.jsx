import { createBrowserRouter, RouterProvider } from "react-router";
import Main_Layout from "../Layouts/Main_Layout";
import Home from "../Pages/Home";
import About from "../Components/About";
import Project from "../Components/Project";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_Layout></Main_Layout>,
    children: [
      {
        index: true,
        Component: Home,
        loader:()=>fetch("project.json")
      },
      {
        path:"/about",
        Component:About
      },
      {
        path:"/project",
        Component:Project,
        
      }
    ],
  },
]);
