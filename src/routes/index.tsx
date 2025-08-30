import { createBrowserRouter } from "react-router";
import { HomePage } from "../pages/home";
import { Route } from "./route";

export const router = createBrowserRouter([
  { path: "/", element: <Route page={HomePage} /> },
]);
