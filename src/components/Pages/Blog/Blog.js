import React from 'react';
import useBlogs from '../../../hooks/useBlog';
import ShowBlog from './ShowBlog';

const Blog = () => {
    const [blogs] = useBlogs();
    return (
        <div>
            <h1 className='text-xl md:text-2xl font-bold text-center m-5'>Here are some of my blogs about React</h1>
            <div>
                {
                    blogs.map(blog => <ShowBlog
                        key={blog._id}
                        blog={blog}
                    ></ShowBlog>)
                }
            </div>

        </div>
    );
};

export default Blog;