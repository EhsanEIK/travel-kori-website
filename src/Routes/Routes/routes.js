import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Booking from "../../Pages/Booking/Booking";
import Home from "../../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/booking', element: <Booking></Booking> },
        ]
    }
])