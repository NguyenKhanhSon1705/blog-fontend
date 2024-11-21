import { createBrowserRouter } from "react-router-dom";
import LayoutAdmin from "../layouts/DefaultLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import PostDetails from "../pages/PostDetails";
import Main from "../layouts/Main";
import SearchPage from "../pages/SearchPage";

const router = createBrowserRouter(
  [

    // route cho client
    {
        path: "/",
        element:<Main/>,
        children: [
            {path:'/', element:<Home/>},
            {path:'/contact', element:<Contact/>},
            {path:'/post/:slug', element:<PostDetails/>},
            {path:'/search', element:<SearchPage/>},
        ]
    },

    // route cho admin
    {
      path: "/admin/*",
      element: <LayoutAdmin />,
    //   children: [
    //     { path: "login", element: <Login /> }, // Trang Home mặc định
    //   ],
    },
    {
        path: "/admin/login",
        element: <Login />
    }
    ,
    {
        path: "/admin/register",
        element: <Register />
    }
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default router;
