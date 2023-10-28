import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.scss";

import RootLayout from "./pages/Root/RootLayout";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/Home/HomePage";
import MenuPage from "./pages/Menu/MenuPage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/menu",
        element: <MenuPage />,
      },
      {
        path: "/menu/:filter",
        element: <MenuPage />,
      },
      {
        path: "/:productID",
        element: <ProductDetailPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
