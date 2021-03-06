import React from 'react';
import useReviews from '../../../hooks/useReviews';
import ShowReview from './ShowReview';
import { MdRateReview } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Reviews = () => {
    const [reviews] = useReviews();
    const navigate = useNavigate();

    const handleAllReviewBtn = () => {
        navigate('/review')
    }


    return (
        <div className='m-2'>
            <h1 className='text-2xl font-bold text-center m-2'>Customer Reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                {
                    reviews.map(review => <ShowReview
                        key={review._id}
                        review={review}
                    ></ShowReview>)
                }
            </div>
            <div className='text-center m-3'>
                <button
                    onClick={handleAllReviewBtn}
                    className='btn btn-sm rounded-md text-white'>All
                    Reviews<MdRateReview className='ml-2 mt-1 text-xl'></MdRateReview></button>
            </div>
        </div>
    );
};

export default Reviews;