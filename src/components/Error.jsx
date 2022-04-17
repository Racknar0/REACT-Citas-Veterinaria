import React from 'react';

const Error = ({mensaje}) => {
    return (
        <div className="bg-red-800 text-white uppercase text-center p-3 font-bold mb-3 rounded-lg">
            <p>{mensaje}</p>
        </div>
    );
};

export default Error;
