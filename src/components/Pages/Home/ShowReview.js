import React from 'react';

const ShowReview = ({ review }) => {
    return (
        <div className="carousel-item">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={review.photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{review.name}</h2>
                    <p>{review.review}</p>
                </div>
            </div>
        </div>
    );
};

export default ShowReview;