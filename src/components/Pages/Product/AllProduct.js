import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllProduct = ({ product }) => {
    const navigate = useNavigate();
    const { _id } = product;

    const handlePurchase = id => {
        navigate(`/products/${id}`)
    }
    const handleReview = id => {
        navigate(`/dashboard/myreview/${id}`)
    }

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
                <p className='text-xs'>
                    {product.description.slice(0, 60)}

                </p>
            </td>
            <td>{product.quantity}</td>
            <td> ${product.price}</td>
            <td><p>{product.minOrder}</p></td>
            <th>
                <button
                    onClick={() => handlePurchase(_id)}
                    className="btn btn-xs rounded-sm">Buy Now</button>
                <button
                    onClick={() => handleReview(_id)}
                    className="btn btn-xs text-white rounded-sm ml-1">Review</button>
            </th>
        </tr>
    );
};

export default AllProduct;