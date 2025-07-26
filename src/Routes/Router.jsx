import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import MainLayout from '../Layout/MainLayout';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import AuthLayout from '../Layout/AuthLayout';
import AddCampaign from '../Conponents/AddCampaign';
import PrivateRoute from './PrivateRoute';
import DetailsCampaign from '../Conponents/DetailsCampaign';
import PagesLayout from '../Layout/PagesLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: 'add-campaign',
                element: <PrivateRoute><AddCampaign></AddCampaign></PrivateRoute>
            },
            {
                path: 'campaign/:id',
                element: <PrivateRoute><DetailsCampaign></DetailsCampaign></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:1000/campaign/${params.id}`)
            }
        ]
    },
    {
        path: '/pages',
        element: <PagesLayout></PagesLayout>,
        children: [
            {
                path: 'campaign/:id',
                element: <PrivateRoute><DetailsCampaign></DetailsCampaign></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:1000/campaign/${params.id}`)
            }
        ]
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