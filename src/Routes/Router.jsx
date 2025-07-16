import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import MainLayout from '../Layout/MainLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
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