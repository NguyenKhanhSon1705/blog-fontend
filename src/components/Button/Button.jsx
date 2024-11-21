import React from 'react';

const Button = ({title}) => {
    return (
        <button className='bg-[#F36326] text-white px-4 py-2 rounded-sm cursor-pointer font-medium'>
            {title}
        </button>
    );
};

export default Button;