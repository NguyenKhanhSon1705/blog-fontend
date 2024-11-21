// eslint-disable-next-line no-unused-vars
import React from 'react';
import Title from '../Title/Title';
import Button from '../Button/Button';
import PostItem from './PostItem';

const Posts = () => {
    return (
        <div className='w-full max-w-[1200px] mx-auto my-10 px-3 lg:px-0'>
            <div className='flex justify-between items-center mb-6 p-3 xl:p-0'>
                <Title title={"Our Lateset Post"} />
                <Button title={"View All"}/>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 xl:p-0'>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
            </div>

        </div>
    );
};

export default Posts;