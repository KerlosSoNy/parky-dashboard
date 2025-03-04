import { createBrowserRouter } from "react-router";
import App from "../../App";
import DashBoard from "../../pages/dashboard";
import Customers from "../../pages/customers/customers";
import Garage from "../../pages/garage/garage";
import Cars from "../../pages/cars/cars";
import Booking from "../../pages/booking/booking";
import Transactions from "../../pages/transactions/transactions";
import Home from "../../pages/home/home";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: 'dashboard',
        element: <DashBoard />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'customers',
                element: <Customers />
            },
            {
                path: 'garage',
                element: <Garage />
            },
            {
                path: 'cars',
                element: <Cars />
            },
            {
                path: 'booking',
                element: <Booking />
            },
            {
                path: 'transactions',
                element: <Transactions />
            },
        ]
    }
])