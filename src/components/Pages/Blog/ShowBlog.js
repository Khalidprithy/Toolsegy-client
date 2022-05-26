import React from 'react';

const ShowBlog = ({ blog }) => {
    return (
        <div>
            <div className="card card-side rounded-md border m-5">
                <div className="card-body">
                    <h2 className="card-title">{blog.question}</h2>
                    <p>{blog.answer}</p>
                    <p>Published on: {blog.date}</p>
                </div>
                <figure><img className='rounded sm:hidden lg:w-52' src={blog.photo} alt="Movie" /></figure>
            </div>
        </div>
    );
};

export default ShowBlog;