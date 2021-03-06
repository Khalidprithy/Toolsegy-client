import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShowProduct = ({ product }) => {
    const navigate = useNavigate();
    const { _id } = product;

    const handleBuyNow = id => {
        navigate(`/products/${id}`)
    }
    const handleReview = id => {
        navigate(`/dashboard/myreview/${id}`)
    }

    return (
        <div className="card card-compact bg-base-100 border rounded-lg">
            <figure><img className='w-24' src={product.photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.description.slice(0, 100)}</p>
                <div className='flex'>
                    <p><small>Quantity: {product.quantity}</small></p>
                    <p><small>Price: ${product.price}</small></p>
                </div>
                <p><small>Minimum Order: {product?.minOrder}</small></p>
                <div className="card-actions justify-center">
                    <button
                        onClick={() => handleBuyNow(_id)}
                        className="btn btn-xs btn-primary text-white rounded-sm">Buy Now</button>
                    <button
                        onClick={() => handleReview(_id)}
                        className="btn btn-xs btn-primary text-white rounded-sm">Review</button>
                </div>
            </div>
        </div>
    );
};

export default ShowProduct;