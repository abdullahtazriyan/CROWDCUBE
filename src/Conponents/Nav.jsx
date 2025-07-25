import React, { useContext } from 'react';
import { Link, Links } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Nav = () => {

    const {user, logOut} = useContext(AuthContext)

    const links = [
        <li><Link to={'/'}>Home</Link></li>,
        <li><Link to={'/add-campaign'}>Add Campaign</Link></li>
    ]

    const handleLogOut = () =>{
        logOut()
    }

    return (
        <div className="navbar bg-base-100 shadow-sm items-center">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">CROWDCUBE</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            {
                user ?
                    <div className="navbar-end flex gap-2">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                                
                            </div>
                            <h1>{user?.displayName}</h1>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a onClick={handleLogOut}>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                    :
                    <div className="navbar-end gap-3">
                        <div className='btn'><Link to={'/auth/register'}>Register</Link></div>
                        <div className='btn'><Link to={'/auth/login'}>Login</Link></div>
                    </div>
            }
        </div>
    );
};

export default Nav;