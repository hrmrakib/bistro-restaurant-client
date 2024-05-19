import { Link, createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/home/Home";
import OurMenu from "../pages/menu/menu/OurMenu";
import Shop from "../pages/shop/shop/Shop";
import Contact from "../pages/contact/contact/Contact";
import Login from "../pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: (
      <div className='flex flex-col justify-center items-center gap-6 my-10'>
        <h2 className='text-2xl'>404😎not found</h2>
        <button className='btn btn-outline'>
          <Link to='/'>Back to Home</Link>
        </button>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ourMenu",
        element: <OurMenu />,
      },
      {
        path: "/shop",
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
]);

export default router;
