import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import Todolist from "../pages/Todolist";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/todolist", element: <Todolist /> },
]);

function Router() {
  return <RouterProvider router={router} />;
}
export default Router;
