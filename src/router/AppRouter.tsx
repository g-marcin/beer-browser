import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Layout, Loader } from '../components';
import { ErrorPage } from './ErrorPage';
const BeerBrowser = lazy(()=> import ("../modules/BeerBrowser/BeerBrowser"))
const BeerDetails = lazy(()=> import ("../modules/BeerDetails/BeerDetails"))


export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage errorMessage="Page not found" />,
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<Loader />}>
            <BeerBrowser />
          </Suspense>
        ),
      },
      {
        path: '/details/:id',
        element: (
          <Suspense fallback={<Loader />}>
            <BeerDetails />
          </Suspense>
        ),
      },
    ],
  },
]);
