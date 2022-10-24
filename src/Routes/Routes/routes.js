import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Booking from "../../Pages/Booking/Booking";
import Destination from "../../Pages/Destination/Destination/Destination";
import Home from "../../Pages/Home/Home/Home";
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
                loader: () => fetch(' https://travel-kori-server.vercel.app/places'),
                element: <Home></Home>
            },
            {
                path: '/booking/:id',
                loader: ({ params }) => fetch(` https://travel-kori-server.vercel.app/places/${params.id}`),
                element: <Booking></Booking>
            },
            {
                path: '/destination',
                loader: () => fetch(' https://travel-kori-server.vercel.app/rooms'),
                element: <PrivateRoute><Destination></Destination></PrivateRoute>
            },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
        ]
    }
])