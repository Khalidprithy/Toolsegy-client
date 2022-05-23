import React from 'react';
import useProducts from '../../../hooks/useProducts';
import ShowProduct from './ShowProduct';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const TopProduct = () => {

    const [products] = useProducts();
    const navigate = useNavigate();

    const handleAllProduct = () => {
        navigate('/products')
    }


    return (
        <div className='p-10'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold m-2'>Top Products</h1>
                <button
                    onClick={handleAllProduct}
                    className='btn btn-sm text-white'>All Product <FaArrowRight className='ml-1'></FaArrowRight></button>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                {
                    products.slice(0, 4).map(product => <ShowProduct
                        key={product.id}
                        product={product}
                    ></ShowProduct>)
                }
            </div>
        </div>
    );
};

export default TopProduct;