import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HeaderComponent from "./Components/Header.js";
import Body from "./Components/Body.js";
import About from "./Components/About.js";
import Footer from "./Components/Footer.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./Components/Error.js";
import Contact from "./Components/Contact.js";
import RestaurantMenu from "./Components/RestaurantMenu.js";
import ProfileComponent from "./Components/ProfileClass.js";
import Shimmer from "./Components/Shimmer.js";
import UserContext from "./utils/userContext.js";
import {Provider} from "react-redux";
import Cart from "./Components/Cart.js"
import store from "./utils/store.js";

// chunking
// code spliting
// dynamic bundling
// on demand loading
// lazy loading
// dynamic import

// lazy loading or dynamic import
const Instamart = lazy(() => import("./Components/Instamart.js"));
// on demand loading -> upon render -> suspend loading
const AppLayout = () => {
  const [user, setuser] = useState({
    name: "Siddhant Gupta",
    email: "nobbie7549@gmail.com",
  });
  return (
    // it is overriding usercontext value
    // we can also modify the userContext.provider for smaller parts also
    <Provider store={store}>
    <UserContext.Provider value={{ user: user, setuser: setuser }}>
      <HeaderComponent />
      <Outlet />
      <Footer />
    </UserContext.Provider>
    </Provider>
  );
};
// This is the recommended router for all React Router web projects
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <ProfileComponent />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

/**
 * AppLayout
 *  (state = User)
 *    - <Body user = {user} />
 *      - <RestaurantContainer user=>
 *        - RestaurantCard user={user}
 *          -<h4>{User}</h4>>
 *
 * Props Drilling -> Props passing from parent to child to child to child
 * passing parent to child down the chain
 */
