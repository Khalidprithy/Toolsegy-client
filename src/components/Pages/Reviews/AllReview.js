import React from 'react';
import useReviews from '../../../hooks/useReviews';
import Review from './Review';

const AllReview = () => {
    const [reviews] = useReviews();
    return (
        <div className='m-2'>
            <h1 className='text-2xl font-bold text-center m-4'>All Customer Reviews</h1>
            <div className='grid grid-cols-1 gap-4'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>

        </div>
    );
};

export default AllReview;