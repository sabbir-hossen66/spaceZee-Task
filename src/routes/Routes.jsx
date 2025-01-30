import { createBrowserRouter } from "react-router-dom";
import { Root } from "../layout/Root";
import Landing from "../pages/landing/Landing";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
    ],
  },
]);