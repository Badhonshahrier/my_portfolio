import { createBrowserRouter, RouterProvider } from "react-router";
import Main_Layout from "../Layouts/Main_Layout";
import Home from "../Pages/Home";
import About from "../Components/About";
import ProjectDetails from "../Components/ProjectDetails";
import Contact from "../Components/Contact";
import SkillsBar from "../Components/SkillBar";
import ProjectCard from "../Components/ProjectCard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_Layout></Main_Layout>,
    children: [
      {
        index: true,
        Component: Home,
        loader:()=>fetch("./project.json")
      },
      {
        path:"/about",
        Component:About
      },
      {
        path:"/project",
        Component:ProjectCard,
        
      },
      {
        path:"/details/:id",
        Component:ProjectDetails,
        loader:()=>fetch("./project.json")
      },
      {
        path:"/contact",
        Component:Contact
      },{
        path:"/skills",
        Component:SkillsBar
      }
    ],
    
  },
]);
