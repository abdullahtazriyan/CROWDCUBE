import { Outlet } from "react-router-dom";
import Nav from "../Conponents/Nav";

const AuthLayout = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto"><Nav></Nav></div>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;