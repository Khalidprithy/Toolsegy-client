import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const UserDashboard = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile">
            <input id="my-dashboard-btn" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl font-bold text-secondary m-2'>My Dashboard </h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label for="my-dashboard-btn" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto bg-primary lg:bg-white lg:text-primary lg:w-60 w-48 md:bg-primary text-white">
                    <li className='font-bold'><Link to='/dashboard/profile'>My Profile</Link></li>
                    {
                        (user && !admin) && <>
                            <li className='font-bold'><Link to='/dashboard/myreview/:id'>Add Review</Link></li>
                            <li className='font-bold'><Link to='/dashboard'>My Orders</Link></li>
                        </>
                    }
                    {
                        (admin) && <>
                            <li className='font-bold'><Link to='/dashboard/users'>Manage User</Link></li>
                            <li className='font-bold'><Link to='/dashboard/addProduct'>Add Product</Link></li>
                            <li className='font-bold'><Link to='/dashboard/manageOrder'>Manage Orders</Link></li>
                        </>
                    }
                </ul>
                r
            </div>
        </div>
    );
};

export default UserDashboard;