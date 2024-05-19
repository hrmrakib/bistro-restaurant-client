import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/home/Home";
import OurMenu from "../pages/menu/menu/OurMenu";
import Shop from "../pages/shop/shop/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: (
      <div className='flex justify-center items-center'>
        <h2>404😎not found</h2>
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
    ],
  },
]);

export default router;
