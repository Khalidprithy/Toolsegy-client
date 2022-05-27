import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import OrderRow from './OrderRow';

const MyOrders = () => {
    const [user] = useAuthState(auth)

    const navigate = useNavigate();

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/purchase?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log(res)
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => { setOrders(data) })
        }
    }, [user])
    return (
        <div>
            <div className="overflow-x-auto m-4">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Address/Phone</th>
                            <th>Quantity</th>
                            <th>Brand</th>
                            <th>Action</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <OrderRow
                                key={order._id}
                                index={index}
                                order={order}
                            ></OrderRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyOrders;