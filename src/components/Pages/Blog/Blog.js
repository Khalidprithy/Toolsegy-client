import React from 'react';
import useBlogs from '../../../hooks/useBlog';
import ShowBlog from './ShowBlog';

const Blog = () => {
    const [blogs] = useBlogs();
    return (
        <div>
            <h1>Blogs</h1>
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