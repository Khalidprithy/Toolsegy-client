import React, { useState } from 'react';
import { useQuery } from 'react-query'
import Loading from '../../Shared/Loading';
import ConfirmDelete from './ConfirmDelete';
import OrderRow from './OrderRow';

const MangeOrder = () => {

    const [deleteProduct, setDeleteProduct] = useState(false);


    const { data: allOrders, isLoading, refetch } = useQuery('allOrders', () => fetch('https://radiant-depths-23183.herokuapp.com/allOrder', {
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
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders.map((order, index) => <OrderRow
                                key={order._id}
                                index={index}
                                order={order}
                                setDeleteProduct={setDeleteProduct}
                                refetch={refetch}
                            ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteProduct && <ConfirmDelete
                    refetch={refetch}
                    deleteProduct={deleteProduct}
                    setDeleteProduct={setDeleteProduct}
                ></ConfirmDelete>
            }
        </div>
    );
};

export default MangeOrder;