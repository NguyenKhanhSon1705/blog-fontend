import React from 'react';
import Navbar from '../components/Navbar';

const Header = () => {
    return (
        <div className='w-full px-5 bg-[#909090] border-b-2 md:w-full md:block'>
            <Navbar/>
        </div>
    );
};

export default Header;