// eslint-disable-next-line no-unused-vars
import React from 'react';
import PopularPostItem from './PopularPostItem';

const PopularPost = () => {
    return (
        <div className='flex flex-col gap-3'>
            <PopularPostItem/>
            <PopularPostItem/>
            <PopularPostItem/>
            <PopularPostItem/>
            <PopularPostItem/>
        </div>
    );
};

export default PopularPost;