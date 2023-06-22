import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./router";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <RouterProvider router={AppRouter} />
    </>
  );
}

export default App;
