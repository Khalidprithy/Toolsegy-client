import React from 'react';

const ShowReview = ({ review }) => {
    return (
        <div className="card card-compact lg:max-w-lg border rounded-lg bg-base-100">
            <div className="avatar mx-auto">
                <div className="w-16 rounded-full mt-4">
                    <img src={review.photo} alt='' />
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{review.name}</h2>
                <h4>Reviewed on: {review.date}</h4>
                <p>{review.review.slice(0, 200)}..</p>
                <div className="card-actions justify-start">
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

export default ShowReview;