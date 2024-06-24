import React from 'react';
import { FaCss3, FaHtml5, FaNodeJs, FaReact, } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiNextdotjs, SiExpress, SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";




const skills = () => {


    return (

        <div>
            <div className='flex gap-2 mb-8 '>
                <div className="w-16 h-[2px] bg-cyan-800 mt-3"></div>
                <h2 className='text-3xl font-semibold font-mono'>Slills</h2>
            </div>
            {/* <div className='w-full h-[500px] relative bg-circularLight'></div> */}
            <div className='grid grid-cols-5 gap-4 mt-4'>
                <div className='p-4  border  border-cyan-700 inline-block hover:shadow-lg hover:shadow-cyan-600 hover:-translate-y-6'>
                    <FaHtml5 className='text-2xl text-cyan-800 ' />
                </div>
                <div className='p-4 border border-cyan-700  hover:shadow-lg hover:shadow-cyan-600 hover:-translate-y-6'>
                    <FaCss3 className='text-2xl text-cyan-800' />
                </div>
                <div className='p-4 border border-cyan-700 inline-block hover:shadow-lg hover:shadow-cyan-600 hover:-translate-y-6'>
                    <RiTailwindCssFill className='text-2xl text-cyan-800' />
                </div>
                <div className='p-4 border border-cyan-700 inline-block hover:shadow-lg hover:shadow-cyan-600 hover:-translate-y-6'>
                    <SiJavascript className='text-2xl text-cyan-800' />
                </div>
                <div className='p-4 border border-cyan-700 inline-block hover:shadow-lg hover:shadow-cyan-600 hover:-translate-y-6'>
                    <FaReact className='text-2xl text-cyan-800' />
                </div>
                <div className='p-4 border border-cyan-700 inline-block hover:shadow-lg hover:shadow-cyan-600 hover:translate-y-6'>
                    <IoLogoFirebase className='text-2xl text-cyan-800' />
                </div>
                <div className='p-4 border border-cyan-700 inline-block hover:shadow-lg hover:shadow-cyan-600 hover:translate-y-6'>
                    <SiNextdotjs className='text-2xl text-cyan-800' />
                </div>
                <div className='p-4 border border-cyan-700 inline-block hover:shadow-lg hover:shadow-cyan-600 hover:translate-y-6'>
                    <FaNodeJs className='text-2xl text-cyan-800' />
                </div>
                <div className='p-4 border border-cyan-700 inline-block hover:shadow-lg hover:shadow-cyan-600 hover:translate-y-6'>
                    <SiExpress className='text-2xl text-cyan-800' />
                </div>
                <div className='p-4 border border-cyan-700 inline-block hover:shadow-lg hover:shadow-cyan-600 hover:translate-y-6'>
                    <SiMongodb className='text-2xl text-cyan-800' />
                </div>
            </div>
        </div>
    );
};

export default skills;