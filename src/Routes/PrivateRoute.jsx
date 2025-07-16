import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Conponents/Loading';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    const location = useLocation()
    // console.log(location)

    if(loading){
        return <Loading></Loading>
    }

    if(user && user?.email){
        return children
    }
    
    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
};

export default PrivateRoute;