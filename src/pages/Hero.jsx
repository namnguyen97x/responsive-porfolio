import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import hero from "../assets/hero.png";
import { TypeAnimation } from 'react-type-animation';
const Hero = () => {
    return(
        <div className='my-7 md:my-0 max-w-[1300px] mx-auto md:h-[70vh] grid grid-cols-1 md:grid-cols-4 place-items-center gap-4 px-4'>
            <div className='max-width-[400px] flex flex-col md:flex-col'>
                <p className='md:text-5xl sm:text-3xl text-2xl tracking-tighter'>
                    Hello, I am <br />
                    <span className='font-bold italic'>
                        DORAEMON <br />
                    </span>
                    <TypeAnimation
                        sequence={["A future cat", 2000,
                            "Your friend", 2000,
                            "A Hero",2000
                        ]}
                        speed={50}
                        repeat={Infinity}
                    />
                </p>
                <button href="https://youtu.be/YEDj3lkVmsk?si=568BPOUBXy5z1Pnu" title='Hit me' className='bg-green-700 text-white px-4 py-2 rounded-md mt-6 block md:mt-6'>Hit me</button>
                
            </div>
            <div className='md:col-span-2 md:ml-28'>
                    <div>
                        <img src={hero} alt="Doraemon image" className='w-[300px] md:w-[500px] h-auto mx-auto md:mx-0' />
                    </div>
                </div>
                <div className='text-5xl flex flex-row md:flex-col gap-4'>
                    <a href='https://www.facebook.com/nguyen.nam.434094'><AiFillFacebook /></a>
                    <a href='https://github.com/namnguyen97x/'><AiFillGithub /></a>
                    <a href="https://youtu.be/dQw4w9WgXcQ?si=RyDmihCMVdrTK8nK"><AiFillGoogleCircle /></a>
                </div>
        </div>
    )
}

export default Hero;
