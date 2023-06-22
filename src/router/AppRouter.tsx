import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import { Layout, Loader } from "../components";
import { BeerBrowser } from "../modules";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage errorMessage="Page not found" />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loader />}>
            <BeerBrowser />
          </Suspense>
        ),
      },
    ],
  },
]);
