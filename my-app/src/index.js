import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from './pages/Home';
import RSVP from './pages/RSVP';
import Messages from "./pages/Messages";
import NavBar from "./components/NavBar";

const Layout = () => {
    return (
        <>
        <NavBar />
        <Outlet />
        </>
    )
}

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
              },
              {
                path: "rsvp",
                element: <RSVP />,
              },
              {
                path: "messages",
                element: <Messages />,
              },
        ],
    },
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);