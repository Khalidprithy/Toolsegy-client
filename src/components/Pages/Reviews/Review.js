import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card card-side border rounded-md p-4">
            <div>
                <div class="avatar">
                    <div class="w-28 rounded-md">
                        <img src={review.photo} alt='' />
                    </div>
                </div>
                <h2 class="font-bold">{review.name}</h2>
            </div>
            <div class="card-body">
                <p>Reviewed on: {review.date}</p>
                <p>{review.review}</p>
                <div class="card-actions justify-end">
                    <div class="rating">
                        <input type="radio" name="rating-1" class="mask mask-star" />
                        <input type="radio" name="rating-1" class="mask mask-star" checked />
                        <input type="radio" name="rating-1" class="mask mask-star" />
                        <input type="radio" name="rating-1" class="mask mask-star" />
                        <input type="radio" name="rating-1" class="mask mask-star" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;