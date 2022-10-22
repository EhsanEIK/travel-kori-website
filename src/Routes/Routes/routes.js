import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Booking from "../../Pages/Booking/Booking";
import Destination from "../../Pages/Destination/Destination/Destination";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/places'),
                element: <Home></Home>
            },
            { path: '/booking', element: <PrivateRoute><Booking></Booking></PrivateRoute> },
            {
                path: '/destination/:id',
                // loader: ({ params }) => fetch(${ params.id }),
                element: <PrivateRoute><Destination></Destination></PrivateRoute>
            },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
        ]
    }
])