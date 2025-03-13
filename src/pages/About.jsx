import React from 'react';
import about from "../assets/about.png";

const About = () => {
    return (
        <div className='max-w-[1300px] mx-auto md:h-[70vh] flex flex-col md:flex-row items-center justify-center gap-10 px-4 py-8 md:py-0'>
            <div className='flex flex-row gap-4'>
                <img src={about} alt="about" className='object-cover rounded-xl w-[100px] h-[300px] hidden md:block'/>
                <img src={about} alt="about" className='object-cover rounded-xl w-[100px] h-[200px] hidden md:block'/>
            </div>
           <div>
            <p className='tracking-tighter leading-loose max-w-[500px] text-2xl md:text-3xl text-center md:text-left'>
            Hello everyone! I'm Doraemon, a robotic cat from the 22nd century. I'm here to help my clumsy friend Nobita.
                </p>
                <div className='flex flex-col md:flex-row gap-4 max-w-[600px] mx-auto mt-4'>
                    <div className='bg-gradient-to-t from-[#ffecd2] to-[#fcb69f] rounded-xl p-4 text-center'>
                        <h2 className='md:text-4xl text-2xl font-semibold bg-text-primary-color'>11<span>+</span></h2>
                        <p className='text-gray-500'>Projects</p>
                    </div>
                    <div className='bg-gradient-to-t from-[#ffecd2] to-[#fcb69f] rounded-xl p-4 text-center'>
                        <h2 className='md:text-4xl text-2xl font-semibold bg-text-primary-color'>12<span>+</span></h2>
                        <p className='text-gray-500'>Year experience</p>
                    </div>
                    <div className='bg-gradient-to-t from-[#ffecd2] to-[#fcb69f] rounded-xl p-4 text-center'>
                        <h2 className='md:text-4xl text-2xl font-semibold bg-text-primary-color'>4,500<span>+</span></h2>
                        <p className='text-gray-500'>gadgets</p>
                    </div>
                    
                </div>
           </div>
        </div>
    );
};

export default About;
