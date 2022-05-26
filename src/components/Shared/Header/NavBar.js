import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const NavBar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };


    const menuItems = <>
        <li className='text-white'><Link to='/'>Home</Link></li>
        <li className='text-white'><Link to='/products'>Products</Link></li>
        <li className='text-white'><Link to='/client'>Client</Link></li>
        <li className='text-white'><Link to='/review'>Review</Link></li>
        <li className='text-white'><Link to='/blog'>Blog</Link></li>
        {
            user && <li className='text-white'><Link to='/dashboard'>Dashboard</Link></li>
        }
    </>
    const loginItems = <>

        <li className='text-white'>
            {
                user ? <button onClick={logout} className="btn btn-ghost">Sign Out</button> : <Link to='/login'>LOGIN</Link>
            }
        </li>
    </>

    return (
        <div className="navbar bg-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost md:hidden lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="1" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-48">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl text-white">Toolsegy</Link>
            </div>
            <div className="navbar-center hidden md:flex lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {loginItems}
                </ul>
                <div>
                    <label tabIndex="2" for="my-dashboard-btn" className="btn btn-ghost md:hidden lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default NavBar;