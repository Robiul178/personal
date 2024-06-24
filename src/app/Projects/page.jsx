import Image from 'next/image';
import React from 'react';
import img1 from '../../../public/asset/meal.png';
import img2 from '../../../public/asset/wood.png';
import img3 from '../../../public/asset/inboxx.png';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const page = () => {
    return (
        <div className='px-4'>
            <div className='flex gap-2'>
                <div className="w-16 h-[2px] bg-cyan-800 mt-3"></div>
                <h2 className='text-3xl font-semibold font-mono'>Project</h2>
            </div>

            <div className="mt-4">

                <div className='flex gap-4 my-6  p-2 hover:shadow-custom'>
                    <div >
                        <Image
                            src={img3}
                            width={150}
                            height={30}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='flex-1'>
                        <h2 className="text-lg font-bold text-cyan-600 flex"> InboxDoller – A online earning Platform (Full Stack) </h2><br />
                        <p className="text-cyan-800">
                            Secure user login and registration with JWT (JSON Web Tokens).
                            Role-based access control to manage permissions for different user types (e.g., admin, user).
                            A mobile-friendly layout that ensures an optimal viewing experience across various devices.
                            Full implementation of Create, Read, Update, and Delete functionalities 5.A well-structured API built with
                            Express.js to handle client-server communication.
                        </p>
                        <p className='text-cyan-900'>
                            <span className='font-bold text-cyan-800'>Technology:</span> HTML,Tailwind CSS, JavaScript, React, Firebase, Node Js, Express Js, MongoDB
                        </p>
                    </div>
                </div>

                <div className='flex gap-4 my-6 p-2 hover:shadow-custom '>
                    <div >
                        <Image
                            src={img1}
                            width={150}
                            height={30}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='flex-1'>
                        <h2 className="text-lg font-bold text-cyan-600"> Meal For Heal – A Food Sharing Platform(MERN)</h2><br />
                        <p className="text-cyan-800">
                            Food Sharing and Surplus Reduction Platform aims to create a sustainable solution for food waste by connecting
                            individuals and organizations with surplus food to those in need.
                        </p>
                        <p className='text-cyan-900'>
                            <span className='font-bold text-cyan-800'>Technology:</span> HTML,Tailwind CSS, JavaScript, React, Firebase, Node Js, Express Js, MongoDB
                        </p>
                    </div>
                </div>



                <div className='flex gap-4 my-6  p-2  hover:shadow-custom '>
                    <div >
                        <Image
                            src={img2}
                            width={150}
                            height={30}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='flex-1'>
                        <h2 className="text-lg font-bold text-cyan-600"> Wood Wonders – Art & Craft Store Website (MERN)</h2><br />
                        <p className="text-cyan-800">
                            Provides conditional rendering of authentication buttons based on user state, and
                            protects private routes to ensure only authenticated users can access these features
                            A robust backend built with Node.js to handle requests, manage user authentication.
                        </p>
                        <p className='text-cyan-900'>
                            <span className='font-bold text-cyan-800'>Technology:</span> HTML,Tailwind CSS, JavaScript, React, Firebase, Node Js, Express Js, MongoDB
                        </p>
                    </div>
                </div>

            </div>

        </div >
    );
};

export default page;