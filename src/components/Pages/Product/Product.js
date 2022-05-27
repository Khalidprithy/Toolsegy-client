import React from 'react';
import useProducts from '../../../hooks/useProducts';
import AllProduct from './AllProduct';

const Product = () => {

    const [products] = useProducts()

    return (
        <div className='m-2'>
            <h1 className='text-2xl font-bold m-2'>Products</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Min Order</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <AllProduct
                                key={product.id}
                                product={product}
                            ></AllProduct>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Product;