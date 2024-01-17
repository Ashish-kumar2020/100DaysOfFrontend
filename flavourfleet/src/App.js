import "./App.css";
import About from "./components/About";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";
import RestaurantMenuList from "./components/RestaurantMenuList";
import { createBrowserRouter, Outlet } from "react-router-dom";
import User from "./components/User";
function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RestaurantMenuList />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
]);
export default App;
