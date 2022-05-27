import React from 'react';
import { useQuery } from 'react-query'
import Loading from '../../Shared/Loading';
import OrderRow from './OrderRow';

const MangeOrder = () => {

    const { data: allOrders, isLoading, refetch } = useQuery('allOrders', () => fetch('http://localhost:5000/purchase', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="overflow-x-auto m-4">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Address/Email</th>
                            <th>Quantity</th>
                            <th>Brand</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders.map((order, index) => <OrderRow
                                key={order._id}
                                index={index}
                                order={order}
                                refetch={refetch}
                            ></OrderRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MangeOrder;