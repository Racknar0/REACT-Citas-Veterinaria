import React from 'react';

const Error = ({children}) => {
    return (
        <div className="bg-red-800 text-white uppercase text-center p-3 font-bold mb-3 rounded-lg">
            <>{children}</>
        </div>
    );
};

export default Error;
