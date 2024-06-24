import React from 'react';

const educationpage = () => {
    return (
        <div>
            <div className='flex gap-2'>
                <div className="w-16 h-[2px] bg-cyan-800 mt-4"></div>
                <h2 className='text-3xl font-semibold font-mono'>Education</h2>
            </div>
            <div className='mt-10'>
                <ul>
                    <li className='border-l-2 p-2 border-cyan-800 animate-slidein'>
                        <h2 className='text-2xl font-bold text-cyan-700'>Bangladesh University of Business & Technology</h2>
                        <p className='text-cyan-800'>B.Sc in Computer Science Engineering</p>
                        <p className='text-cyan-800'>2020 - running</p>
                    </li>
                    <li className='border-l-2 mt-4 p-2 border-cyan-800'>
                        <h2 className='text-2xl font-bold text-cyan-700'>Rajshahi Govt. City, College</h2>
                        <p className='text-cyan-800'> Science </p>
                        <p className='text-cyan-800'>2017 - 2019</p>
                    </li>

                    <li className='border-l-2 mt-4 p-2 border-cyan-800 animate-slidein'>
                        <h2 className='text-2xl font-bold text-cyan-700'>Programming Hero</h2>
                        <p className='text-cyan-800'> Complete Web Development </p>
                        <p className='text-cyan-800'>30 December, 2023 - 24 June 2024</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default educationpage;