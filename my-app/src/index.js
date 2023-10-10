import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";
import "./App.css";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import Form from "./pages/Form";
import MessageBoard from "./components/MessageBoard";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

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
        element: <Form />,
      },
      {
        path: "messages",
        element: <MessageBoard />,
    },
    ],
  },
]);



createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
