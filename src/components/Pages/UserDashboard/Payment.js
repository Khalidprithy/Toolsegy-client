import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/purchase/${id}`;
    console.log(url)
    const { data: payment, isLoading } = useQuery(['purchase', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div className="card w-50 max-w-md bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">Make payment for {payment.name}</h2>
                    <p>Thank for shopping</p>
                    <div className="card-actions justify-end">
                        <button className="btn">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">

                </div>
            </div>
        </div>
    );
};

export default Payment;