import { RouterProvider } from 'react-router-dom';
import { ThemeContextProvider } from './contexts';
import { AppRouter } from './router';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <ThemeContextProvider>
        <RouterProvider router={AppRouter} />
      </ThemeContextProvider>
    </>
  );
}

export default App;
