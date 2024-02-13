import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import "symbol-observable";

import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";
import App from "./App.jsx";

import PostDetail from "./components/PostDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    error: <Page404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/post/:postId",
        element: <PostDetail />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
