import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Booking from "../../Pages/Booking/Booking";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/booking', element: <PrivateRoute><Booking></Booking></PrivateRoute> },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
        ]
    }
])