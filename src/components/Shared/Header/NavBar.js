import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const menuItems = <>
        <li className='text-white'><Link to='/'>Home</Link></li>
        <li className='text-white'><Link to='/products'>Products</Link></li>
        <li className='text-white'><Link to='/client'>Client</Link></li>
        <li className='text-white'><Link to='/review'>Review</Link></li>
        <li className='text-white'><Link to='/Blog'>Blog</Link></li>
    </>
    const loginItems = <>
        <li className='text-white'><Link to='/login'>Login</Link></li>
        <li className='text-white'><Link to='/signup'>Sign Up</Link></li>
    </>

    return (
        <div className="navbar bg-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="1" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-48">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl text-white">Toolsegy</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {loginItems}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;