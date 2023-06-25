import 'bootstrap/dist/css/bootstrap.css';
import { RouterProvider } from 'react-router-dom';
import { ThemeContextProvider } from './contexts';
import { AppRouter } from './router';

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
