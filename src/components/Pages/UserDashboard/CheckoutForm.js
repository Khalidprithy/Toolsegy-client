import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ payment }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState('');

    const { _id, price, user, email } = payment;

    useEffect(() => {
        fetch(`https://radiant-depths-23183.herokuapp.com/create-payment-intent`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }

            })
    }, [price])

    const handleSubmit = async event => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || '')
        setSuccess('');
        setProcessing(true)

        // Confirm payment

        const { paymentIntent, intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user,
                        email: email,
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError.message);
            setProcessing(false);
        }
        else {
            console.log(paymentIntent)
            setTransactionId(paymentIntent.id)
            setCardError('')
            setSuccess('Your payment is completed')

            // Update purchase
            const payment = {
                productId: _id,
                transactionId: paymentIntent.id
            }
            fetch(`https://radiant-depths-23183.herokuapp.com/purchase/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            }).then(res => res.json())
                .then(data => {
                    setProcessing(false)
                    console.log(data)
                })
        }

    }


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-xs mt-4 bg-teal-700' type="submit" disabled={!stripe || !clientSecret}>
                Pay Now
            </button>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-green-500'>
                    <p>{success} </p>
                    <p>Your transaction ID: <span className='text-orange-500 font-bold'>{transactionId}</span></p>
                </div>
            }
        </form>
    );
};

export default CheckoutForm;