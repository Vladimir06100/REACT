import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404 from "./components/Error404/Error404";
import Search from "./pages/Search/Search";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    error: <Error404 />
  },
  {
    path: "/search",
    element: <Search />,
    error: <Error404 />
  }
]);

function App() {
  return  (
    <div className="App">
      <RouterProvider router={router} />
      <Footer />  
    </div>
  )
}

export default App;
