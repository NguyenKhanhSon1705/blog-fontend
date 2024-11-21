// eslint-disable-next-line no-unused-vars
import React from 'react';
import Hero from '../components/Hero';
import Posts from '../components/Post/Posts';
import SliderPost from '../components/Slider/SliderPost';

const Home = () => {
    return (
        <>
            <Hero/>
            <Posts/>
            <SliderPost/>

        </>
    );
};

export default Home;