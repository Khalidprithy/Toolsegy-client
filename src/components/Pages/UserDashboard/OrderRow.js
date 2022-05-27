import React from 'react';
import toast from 'react-hot-toast';
import { AiFillDelete } from 'react-icons/ai';

const OrderRow = ({ order, index, refetch }) => {
    const { email } = order;

    const handleDelete = email => {
        fetch(`http://localhost:5000/purchase/${email}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success(`Order ${order.name} is deleted`)
                    refetch()
                }
            })
    }

    return (

        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
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
                <label for="confirm-delete" className="tooltip" data-tip="Delete"><AiFillDelete className='text-red-500'></AiFillDelete></label>
                <button
                    onClick={() => handleDelete(email)}
                    className="tooltip" data-tip="Delete"><AiFillDelete className='text-red-500'></AiFillDelete></button>
            </th>
        </tr >
    );
};

export default OrderRow;