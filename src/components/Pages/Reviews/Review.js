import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card card-side border rounded-md p-4">
            <div>
                <div className="avatar">
                    <div className="w-28 rounded-md">
                        <img src={review.photo} alt='' />
                    </div>
                </div>
                <h2 className="font-bold">{review.name}</h2>
            </div>
            <div className="card-body">
                <p>Reviewed on: {review.date}</p>
                <p>{review.review}</p>
                <div className="card-actions justify-end">
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;