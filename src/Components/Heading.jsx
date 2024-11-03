import React from 'react';

const Heading = ({title, subTitle}) => {
    return (
        <div>
            <h1 className='text-2xl text-center mt-8'>{title}</h1>
            <p className='text-center text-gray-500 mt-3 mb-8'>{subTitle}</p>
        </div>
    );
};

export default Heading;