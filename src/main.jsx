import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Login from "./components/login/login/Login.jsx";
import Main from "./components/Layouts/Main.jsx";
import ErrorPage from "./components/Layouts/Errorpage.jsx";
import CardDetails from "./components/carddetails/Carddetails.jsx";
import Blogs from "./components/Blogs.jsx";
import Register from "./components/login/register/Register.jsx";
import Body from "./components/body/Body.jsx";
import AuthProvider from "./components/AuthProvider.jsx";
import ViewDetails from "./components/body/viewdetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path:"/vdetails",
        element:<ViewDetails></ViewDetails>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
