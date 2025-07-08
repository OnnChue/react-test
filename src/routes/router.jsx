import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import MyCart from "../pages/MyCart";
import ProductDetail from "../pages/ProductDetail";
import MainLayout from "../components/MainLayout";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/mycart",
                element: <MyCart />
            },
            {
                path: "/product-detail/:productId",
                element: <ProductDetail />
            }
        ]
    }
]);

export default router;