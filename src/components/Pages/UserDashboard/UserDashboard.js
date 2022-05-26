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
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li className='font-bold'><Link to='/dashboard'>My Orders</Link></li>
                    <li className='font-bold'><Link to='/dashboard/myreview'>My Review</Link></li>
                    {admin && <li className='font-bold'><Link to='/dashboard/users'>All Users</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default UserDashboard;