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
        <div class="navbar bg-primary">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabIndex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="1" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-48">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' class="btn btn-ghost normal-case text-xl text-white">Toolsegy</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div class="navbar-end lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {loginItems}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;