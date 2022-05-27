import React from 'react';
import Blog from '../components/Blog';

const Blogs = () => {
    return (
        <div className=' p-5 lg:p-10 bg-base-300'>
            <Blog/>
            <Blog/>
        </div>
    );
};

export default Blogs;