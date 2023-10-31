import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.scss";

import RootLayout from "./pages/Root/RootLayout";
import HomePage from "./pages/Home/HomePage";
import MenuPage from "./pages/Menu/MenuPage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, path: "/", element: <HomePage /> },
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
