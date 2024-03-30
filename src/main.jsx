import React from "react";
import ReactDOM from "react-dom/client";
import Posts, { loader as postsLoader } from "./routes/Posts";
import NewPost, {action as newPostAction} from "./routes/NewPost";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./routes/RouteLayout";
import PostDetails, {loader as postDetailsLoader} from "./routes/PostDetails";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/", //our domain
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: "/create-post", element: <NewPost />, action: newPostAction},
          {path: '/:id', element: <PostDetails />, loader: postDetailsLoader},
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
