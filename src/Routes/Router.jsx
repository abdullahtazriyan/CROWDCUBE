import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import MainLayout from '../Layout/MainLayout';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import AuthLayout from '../Layout/AuthLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/register',
                element: <Register></Register>
            },
            {
                path: '/auth/login',
                element: <Login></Login>
            },
        ]
    },
    {
        path: '*',
        element:
            <div className=" bg-base-100 ">
                <div className="grid place-content-center h-96 text-5xl font-bold">Oops! Page Not Found
                </div>
            </div>
    }
])
export default router;