import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Layout, Loader } from '../components';
import { ErrorPage } from './ErrorPage';
const BeerBrowser = lazy(() => import('../modules/BeerBrowser/BeerBrowser'));
const BeerFavourites = lazy(() => import('../modules/BeerFavourites/beerFavourites'));
const BeerDetails = lazy(() => import('../modules/BeerDetails/BeerDetails'));
const RandomBeerDetails = lazy(() => import('../modules/BeerDetails/RandomBeerDetails'));

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
        path: '/favourites',
        element: (
          <Suspense fallback={<Loader />}>
            <BeerFavourites />
          </Suspense>
        ),
      },
      {
        path: '/details/random',
        element: (
          <Suspense fallback={<Loader />}>
            <RandomBeerDetails />
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
