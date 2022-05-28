import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, refetch, setDeleteProduct }) => {

    return (

        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask w-12 h-12">
                            <img src={order.photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{order.name}</div>
                        <div className="text-sm opacity-50">{order.category}</div>
                    </div>
                </div>
            </td>
            <td>
                {order.address}
                <br />
                <span className="badge badge-ghost badge-sm">{order.email}</span>
            </td>
            <td>{order.quantity}</td>
            <th>
                <button className="btn btn-ghost btn-xs">{order.brand}</button>
            </th>
            <th >
                <label
                    onClick={() => setDeleteProduct(order)}
                    for="confirm-delete" className="tooltip" data-tip="Delete"><AiFillDelete className='text-red-500'></AiFillDelete></label>
            </th>
            <th>
                {(!order.paid) ? <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-sm btn-success'>Pay Now</button></Link> : <div>
                    <span className='text-green-500'>Paid</span>
                    <p>Transaction id <br /> <span className='text-black'> {order.transactionId}</span></p>
                </div>}
            </th>
        </tr >
    );
};

export default OrderRow;