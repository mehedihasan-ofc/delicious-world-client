import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ChefDetails from "../pages/ChefDetails/ChefDetails/ChefDetails";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import About from "../pages/About/About";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/chef/:id',
                element: <PrivateRoutes><ChefDetails></ChefDetails></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;