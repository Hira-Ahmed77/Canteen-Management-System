import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Home from "./Pages/Home/Home";
import OurShop from "./Components/OurShop/OurShop";
import ShopDetails from "./Components/ShopDetails/ShopDetails";
import Blog from "./Pages/BlogList/Blog";
import AuthProvider from "./Components/Provider/AuthProvider";
import LoginPage from "./Components/LoginPage/LoginPage";
import RegisterPage from "./Components/RegisterPage/RegisterPage";
import Profile from "./Components/Profile/Profile";
import PrivetRoute from "./Components/PrivetRoute/PrivetRoute";
import About from "./Components/About/About";
import Error from "./Pages/Error/Error";
// import Checkout from "./Components/Checkout/Checkout";
import DasboardRoot from "./Dashboard/DasboardRoot";
import AdminHome from "./Dashboard/AdminDashboard/AdminHome/AdminHome";
import AddProduct from "./Dashboard/AdminDashboard/AddProduct/AddProduct";
import AllMenu from "./Dashboard/AdminDashboard/AllMenu/AllMenu";
import Users from "./Dashboard/AdminDashboard/Users/Users";
import Addblog from "./Dashboard/AdminDashboard/Blogs/Addblog";
import Manageblog from "./Dashboard/AdminDashboard/Blogs/Manageblog";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UpdateMenu from "./Dashboard/UpdateMenu/UpdateMenu";
import Carts from "./Components/AddToCart/Carts";
import Updateblog from "./Dashboard/AdminDashboard/Blogs/Updateblog";
import PaymentSuccess from "./Components/PaymentSuccess/PaymentSuccess";
import PaymentFail from "./Components/PaymentFail/PaymentFail";
import Orders from "./Components/Navber/Orders";
import NewCart from "./NewCart";
import AdminSecurity from "./Axios/AdminSecurity";
import AllOrder from "./Components/Navber/AllOrder";
import CustomerFeedback from "./Dashboard/AdminDashboard/CustomerFeedback/CustomerFeedback";
import Checkout from "./Components/Checkout/Checkout";
import GetInTouch from "./Components/Footer/GetInTouch";
import MeetTeam from "./Components/Footer/MeetTeam";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/shop",
        element: <OurShop></OurShop>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/carts",
        element: <Carts></Carts>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/getInTouch",
        element: <GetInTouch></GetInTouch>,
      },
      {
        path: "/meetOurTeam",
        element: <MeetTeam></MeetTeam>,
      },

      {
        path: "/menu/:id",
        element: <NewCart></NewCart>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
      {
        path: "/shopDetails",
        element: <ShopDetails></ShopDetails>,
      },

      {
        path: "/profile",
        element: (
          <PrivetRoute>
            <Profile></Profile>
          </PrivetRoute>
        ),
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
      },
      {
        path: "/allOrders",
        element: <AllOrder></AllOrder>,
      },
      {
        path: "/order/:id",

        element: (
          <PrivetRoute>
            <Checkout></Checkout>
          </PrivetRoute>
        ),
      },
      {
        path: "/payment/success/:tranId",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "/payment/fail/:tranId",
        element: <PaymentFail></PaymentFail>,
      },
      {
        path: "dashboard",
        element: (
          <AdminSecurity>
            <DasboardRoot></DasboardRoot>
          </AdminSecurity>
        ),
        children: [
          {
            path: "/dashboard/admin/home",
            element: (
              <AdminSecurity>
                <AdminHome></AdminHome>
              </AdminSecurity>
            ),
          },
          {
            path: "/dashboard/admin/addProduct",
            element: <AddProduct></AddProduct>,
          },
          {
            path: "/dashboard/admin/allMenu",
            element: <AllMenu></AllMenu>,
          },
          {
            path: "/dashboard/admin/updateMenu/:id",
            element: <UpdateMenu></UpdateMenu>,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/menu/${params.id}`),
          },
          {
            path: "/dashboard/admin/users",
            element: <Users></Users>,
          },
          {
            path: "/dashboard/admin/customersFeedback",
            element: <CustomerFeedback></CustomerFeedback>,
          },
          {
            path: "admin/addblog",
            element: <Addblog></Addblog>,
          },
          {
            path: "admin/manageblog",
            element: <Manageblog></Manageblog>,
          },
          {
            path: "/dashboard/blogs/:id",
            element: <Updateblog></Updateblog>,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/blogs/${params.id}`),
          },
        ],
      },
    ],
  },
]);

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
