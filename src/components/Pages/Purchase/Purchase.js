import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';

const Purchase = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    return (
        <div>
            <div>
                <p className='text-2xl font-bold text-center'>Product Purchase Information</p>
            </div>
            <div>
                <div>
                    <button className='btn btn-sm rounded-md m-2'>Go Back</button>
                </div>

                <div className='card-body'>
                    <h4 className='text-xl font-bold'>Product Info</h4>
                    <div class="form-control">
                        <label class="input-group">
                            <span>Name</span>
                            <input type="text" value={product.name} class="input input-bordered" />
                        </label>
                    </div>
                    <div class="form-control">
                        <label class="input-group">
                            <span>Price</span>
                            <input type="text" value={product.price} class="input input-bordered" />
                        </label>
                    </div>
                    <div class="form-control">
                        <label class="input-group">
                            <span>Category</span>
                            <input type="text" value={product.category} class="input input-bordered" />
                        </label>
                    </div>
                    <div class="form-control">
                        <label class="input-group">
                            <span>Email</span>
                            <input type="text" value={user.email} class="input input-bordered" />
                        </label>
                    </div>

                    <div className='card-body'>
                        <h4 className='text-xl font-bold'>User Information</h4>
                        <div class="form-control">
                            <label class="input-group">
                                <span>Name</span>
                                <input type="text" value={user.displayName} class="input input-bordered" />
                            </label>
                        </div>
                        <div class="form-control">
                            <label class="input-group">
                                <span>Email</span>
                                <input type="text" value={user.email} class="input input-bordered" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Purchase;