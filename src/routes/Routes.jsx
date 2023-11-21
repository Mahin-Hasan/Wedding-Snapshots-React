import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Gallery from "../components/Gallery/Gallery";
import Contact from "../components/Contact/Contact";
import PackageDetails from "../components/PackageDetails/PackageDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('wedding.json')
            },
            {
                path: '/packagedetails/:id',
                element: <PrivateRoute><PackageDetails></PackageDetails></PrivateRoute>,
                loader: () => fetch('wedding.json')
            },
            {
                path: '/gallary',
                element: <Gallery></Gallery>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

        ]
    }
])



export default router;