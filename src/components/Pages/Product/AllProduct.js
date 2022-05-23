import React from 'react';

const AllProduct = ({ product }) => {
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={product.photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{product.name}</div>
                        <div className="text-sm opacity-50">{product.category}</div>
                    </div>
                </div>
            </td>
            <td>
                {product.description}
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>{product.quantity}</td>
            <td><input className='border-2 rounded-md px-2 w-10' type="text" value={product.minOrder} /></td>
            <th>
                <button className="btn btn-xs">Buy Now</button>
            </th>
        </tr>
    );
};

export default AllProduct;