import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";

import Category from "../pages/Home/Category/Category";

import NewsLayout from "../layouts/NewsLayout";

import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivetRoute from "./PrivetRoute";
import News from "../pages/News/News/News";
import TermsAndConditions from "../shared/TermsAndConditions/TermsAndConditions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/termsAndConditions",
        element: <TermsAndConditions></TermsAndConditions>,
      },
    ],
  },
  {
    path: "/category",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://the-news-dragon-server-chandan-chandra-shil.vercel.app/categories/${params.id}`
          ),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: (
          <PrivetRoute>
            <News></News>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://the-news-dragon-server-chandan-chandra-shil.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
