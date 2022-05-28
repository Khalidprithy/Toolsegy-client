import { async } from '@firebase/util';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import auth from '../../../firebase.init';

const AddProduct = () => {

    const [user] = useAuthState(auth);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = '252bb439cd1e3bfb0cf4929db5f825ce';


    const onSubmit = async data => {
        const image = data.photo[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData

        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        user: data.name,
                        email: data.email,
                        name: data.productName,
                        brand: data.brand,
                        description: data.description,
                        category: data.category,
                        price: parseInt(data.price),
                        quantity: parseInt(data.quantity),
                        minOrder: parseInt(data.minOrder),
                        photo: img

                    }
                    fetch('https://radiant-depths-23183.herokuapp.com/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(added => {
                            if (added.insertedId) {
                                toast.success('Successfully added new product');
                                reset();
                            }
                            else {
                                toast.error('Failed to add product')
                            }
                        })
                }
                console.log('imgbb', result)
            })
    };




    return (
        <div className='flex flex-col items-center'>
            <h4 className='text-xl font-bold'>Add a new product</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1'>
                    <div className="form-control w-full max-w-xs">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-sm input-bordered w-full max-w-xs m-1"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Please Enter You Name'
                                }
                            })}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-sm input-bordered w-full max-w-xs m-1"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Please Enter You Email'
                                }
                            })}
                        />
                    </div>

                    <input className='input input-sm input-bordered w-full max-w-xs m-1' placeholder='Product Name' {...register("productName", { required: true })} />

                    <input className='input input-sm input-bordered w-full max-w-xs m-1' placeholder='Brand' {...register("brand", { required: true, maxLength: 20 })} />

                    <input className='input input-sm input-bordered w-full max-w-xs m-1' placeholder='Description' {...register("description", { required: true })} />

                    <div className="form-control w-full max-w-xs">
                        <select className="select select-sm select-bordered w-full max-w-xs m-1" {...register("category")}>
                            <option>Power Tool</option>
                            <option>Hand Tool</option>
                            <option>Repair Parts</option>
                            <option>Accessories</option>
                        </select>
                    </div>

                    <input type="number" className='input input-sm input-bordered w-full max-w-xs m-1' placeholder='Price' {...register("price", { required: true })} />

                    <input type="number" className='input input-sm input-bordered w-full max-w-xs m-1' placeholder='Quantity' {...register("quantity", { required: true, min: 5, max: 100000 })} />

                    <input type="number" className='input input-sm input-bordered w-full max-w-xs m-1' placeholder='Minimum Order' {...register("minOrder", { required: true, min: 5, max: 20 })} />

                    <input className='input input-sm input-bordered w-full max-w-xs m-1' type='file' placeholder='Photo URL' {...register("photo", { required: true })} />

                    <input className='btn btn-md w-full max-w-xs m-1' type="submit" value='Add Product' />
                </div>

            </form>
        </div>
    );
};

export default AddProduct;