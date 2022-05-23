import React from 'react';

const ShowReview = ({ review }) => {
    return (
        <div class="card card-compact lg:max-w-lg border rounded-lg bg-base-100">
            <div class="avatar mx-auto">
                <div class="w-16 rounded-full mt-4">
                    <img src={review.photo} alt='' />
                </div>
            </div>
            <div class="card-body">
                <h2 class="card-title">{review.name}</h2>
                <h4>Reviewed on: {review.date}</h4>
                <p>{review.review.slice(0, 200)}..</p>
                <div class="card-actions justify-start">
                    <div class="rating">
                        <input type="radio" name="rating-1" class="mask mask-star" />
                        <input type="radio" name="rating-1" class="mask mask-star" />
                        <input type="radio" name="rating-1" class="mask mask-star" checked />
                        <input type="radio" name="rating-1" class="mask mask-star" />
                        <input type="radio" name="rating-1" class="mask mask-star" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowReview;