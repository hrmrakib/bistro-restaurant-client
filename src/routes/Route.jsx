import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/home/Home";
import OurMenu from "../pages/menu/menu/OurMenu";
import Shop from "../pages/shop/shop/Shop";
import Contact from "../pages/contact/contact/Contact";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Cart from "../pages/dashboard/cart/Cart";
import Dashboard from "../layouts/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Payment from "../pages/dashboard/payment/Payment";
import AllUsers from "../pages/dashboard/allUsers/AllUsers";
import AddItems from "../pages/dashboard/addItems/AddItem";
import ManageItems from "../pages/dashboard/manageItem/ManageItem";
import PaymentHistory from "../pages/dashboard/paymentHistory/PaymentHistory";
import AdminHome from "../pages/dashboard/adminHome/AdminHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <OurMenu />,
      },
      {
        path: "/shop/:category",
        element: <Shop />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "allUsers",
        element: <AllUsers />,
      },
      {
        path: "/dashboard/addItems",
        element: <AddItems />,
      },
      {
        path: "/dashboard/manageItems",
        element: <ManageItems />,
      },
      {
        path: "/dashboard/paymentHistory",
        element: <PaymentHistory />,
      },
      {
        path: "/dashboard/adminHome",
        element: <AdminHome />,
      },
    ],
  },
]);

export default router;
