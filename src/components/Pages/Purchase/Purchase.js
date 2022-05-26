import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import toast, { Toaster } from 'react-hot-toast';

const Purchase = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const { _id, category, name, price, brand, description, photo, minOrder } = product;

    const handlePurchase = event => {
        event.preventDefault();
        const orderQuantity = event.target.orderQuantity.value;
        if (orderQuantity <= 0) {
            return toast.error('Please Enter Order quantity')
        }
        if (orderQuantity < minOrder) {
            return toast.error('Order more then 5')
        }
        if (orderQuantity > product.quantity) {
            return toast.error('Not available')
        }
        // const quantity = JSON.parse(product?.quantity) - JSON.parse(orderQuantity);
        const quantity = orderQuantity;

        const purchase = {
            productId: _id,
            category,
            name,
            price,
            brand,
            description,
            photo,
            quantity,
            user: event.target.userName.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            address: event.target.address.value,
        }
        console.log(purchase);


        fetch('http://localhost:5000/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast.success('Purchase Successful')
                }
                else {

                }
            })
    }

    const handleGoBack = () => {
        navigate('/products')
    }

    return (
        <div>
            <div className='flex items-center'>
                <div>
                    <button
                        onClick={handleGoBack}
                        className='btn btn-sm rounded-md m-2'>Go Back</button>
                </div>
                <div>
                    <p className='md:text-2xl text-xl font-bold text-center md:ml-28' >Product Purchase Information</p>
                </div>

            </div>

            <div>

                <div className="hero min-h-screen">
                    <div className="hero-content flex-col md:flex-row">
                        <img className='w-64 md:w-72 lg:w-96 rounded-lg' src={product.photo} alt='' />
                        <div className='card-body'>
                            <h4 className='text-2xl font-bold text-center'>Product Details</h4>
                            <form onSubmit={handlePurchase}>
                                <h1 className="text-xl font-bold">{product.description}</h1>
                                <ul>
                                    <input type="text" name='name' value={product.name} className="input text-2xl w-full max-w-xs" readOnly />
                                    <li><span className='font-bold'>Brand: </span>{product.brand}</li>
                                    <li><span className='font-bold'>Category:</span> {product.category}</li>
                                    <li><span className='font-bold'>Price:</span> {product.price}</li>
                                    <li><span className='font-bold'>Quantity:</span> {product.quantity}</li>
                                    <li><span className='font-bold'>Minimum Order:</span> {product.minOrder}</li>
                                    <p className='text-sm font-bold m-1 '>Enter order quantity</p>
                                    <input

                                        type="number" name="orderQuantity" className="input input-sm input-bordered rounded-sm mb-2 w-20 max-w-lg" />
                                </ul>
                                <h4 className='text-xl font-bold text-center'>Purchase Information</h4>


                                <input type="text" name='userName' value={user?.displayName} className="input input-sm input-bordered mb-2 w-full max-w-lg" readOnly />
                                <input type="email" name='email' value={user?.email} className="input input-sm input-bordered mb-2 w-full max-w-lg" readOnly />
                                <input type="text" name='address' placeholder='Enter your address' className="input input-bordered mb-2 w-full max-w-lg" />
                                <input type="text" name='phone' placeholder='Enter your phone number' className="input input-bordered mb-2 w-full max-w-lg" />
                                <input type="submit" value='Purchase' className='btn btn-primary mb-2 w-full max-w-lg' />
                            </form>
                            <Toaster />
                        </div>
                    </div>
                </div>
            </div >
        </div >


    );
};

export default Purchase;