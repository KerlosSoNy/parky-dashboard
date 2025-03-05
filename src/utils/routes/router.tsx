import { createBrowserRouter } from "react-router";
import App from "../../App";
import DashBoard from "../../pages/dashboard";
import Customers from "../../pages/customers/customers";
import Garage from "../../pages/garage/garage";
import Cars from "../../pages/cars/cars";
import Booking from "../../pages/booking/booking";
import Transactions from "../../pages/transactions/transactions";
import Home from "../../pages/home/home";
import AddBooking from "../../pages/booking/subpage/addBooking";
import AddTransaction from "../../pages/transactions/subpage/addTransaction";
import AddCars from "../../pages/cars/subpage/addCars";
import AddCustomer from "../../pages/customers/subPage/addCustomer";
import AddGarage from "../../pages/garage/subpage/addGarage";


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
                path: 'customers/:func/:id?',
                element: <AddCustomer />
            },
            {
                path: 'garage',
                element: <Garage />
            },
            {
                path: 'garage/:func/:id?',
                element: <AddGarage />
            },
            {
                path: 'cars',
                element: <Cars />
            },
            {
                path: 'cars/:func/:id?',
                element: <AddCars />
            },
            {
                path: 'booking',
                element: <Booking />
            },
            {
                path: 'booking/:func/:id?',
                element: <AddBooking />
            },
            {
                path: 'transactions',
                element: <Transactions />
            },
            {
                path: 'transactions/:func/:id?',
                element: <AddTransaction />
            }
        ]
    }
])