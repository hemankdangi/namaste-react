import { lazy } from "react";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import Shimmer from "./component/Shimmer";
import Cart from "./component/Cart";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Grocery = lazy(() => import("./component/Grocery"));

const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="app m-6">
      <Header />
      <Outlet />
    </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },{
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<Shimmer/>}><Grocery /></Suspense>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
