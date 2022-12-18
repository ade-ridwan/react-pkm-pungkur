import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import AddBalita from "./pages/AddBalita";
import Balita from "./pages/Balita";
import Posyandu from "./pages/Posyandu";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/balita",
        element: <Balita />,
      },
      {
        path: "/tambah-balita",
        element: <AddBalita />,
      },
      {
        path: "/posyandu",
        element: <Posyandu />,
      },
      {
        path: "/tambah-posyandu",
        element: <AddBalita />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
