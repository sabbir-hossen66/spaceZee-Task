import { createBrowserRouter } from "react-router-dom";
import { Root } from "../layout/Root";
import Landing from "../pages/landing/Landing";
import About from "../pages/about/About";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);