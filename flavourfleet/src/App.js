import "./App.css";
import Header from "./components/Header";
import RestaurantMenuList from "./components/RestaurantMenuList";
import { createBrowserRouter, Outlet } from "react-router-dom";
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
    ],
  },
]);
export default App;
