import React from 'react';

const Loader = () => {
    const loaders = Array.from({ length: 8 }); 
    return (
        <div className='h-auto pt-20 w-full flex flex-wrap p-8 content-evenly justify-center gap-x-5 gap-y-5'>
            {loaders.map((_, index) => (
                <div key={index} className="max-w-xs w-full p-6 max-h-full bg-white rounded-3xl shadow"> 
                    <div className="rounded-3xl w-full h-48 bg-gray-300 animate-pulse"></div> 
                    <div className="p-5">
                        <div className="h-8 bg-gray-300 rounded mb-2 animate-pulse"></div> 
                        <div className="h-6 bg-gray-300 rounded mb-3 animate-pulse"></div> 
                        <div className="h-10 bg-gray-300 rounded animate-pulse"></div> 
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Loader;
