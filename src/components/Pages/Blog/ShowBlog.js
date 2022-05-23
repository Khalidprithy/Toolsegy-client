import React from 'react';

const ShowBlog = ({ blog }) => {
    return (
        <div>
            <div class="card card-side rounded-md border m-5">
                <div class="card-body">
                    <h2 class="card-title">{blog.question}</h2>
                    <p>{blog.answer}</p>
                    <p>Published on: {blog.date}</p>
                </div>
                <figure><img className='rounded sm:hidden lg:w-52' src={blog.photo} alt="Movie" /></figure>
            </div>
        </div>
    );
};

export default ShowBlog;