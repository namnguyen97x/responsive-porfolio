import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillGoogleCircle } from 'react-icons/ai';
const Contact = () => {
    return (
        <div className='bg-gradient-to-t from-gray-800 via-gray-900 to-black py-8 mx-auto max-w-[1300px] mt-10 rounded-xl px-8'>
            <h1 className='tracking-tight text-gray-100 text-center text-4xl font-bold mb-10'>Let's Talk</h1>
            <p className='text-center text-gray-200 mb-10'>Start amazing projects with me</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 justify-between items-start max-w-6xl mx-auto'>
                <div className='flex flex-col items-start space-y-8 w-full'>
                    <div className='flex items-center w-full bg-gray-800/50 p-6 rounded-lg'>
                        <AiFillFacebook className='text-8xl text-gray-200 min-w-[40px]' />      
                        <div className='flex flex-col ml-5 w-full'>
                            <p className='text-gray-200 text-[20px] text-semi-bold'>Contacts</p>
                            <p className='text-gray-200'>Facebook: xx</p>
                            <p className='text-gray-200'>Messenger: xx</p>
                            <p className='text-gray-200'>Mobile: xx</p>
                        </div>
                    </div>
                    <div className='flex items-center w-full bg-gray-800/50 p-6 rounded-lg'>
                        <AiFillGithub className='text-8xl text-gray-200 min-w-[40px]' />
                        <div className='flex flex-col ml-5 w-full'>
                            <p className='text-gray-200 text-[20px] text-semi-bold'>Working hours:</p>
                            <p className='text-gray-200'>Mon-Fri: 8 am - 5 pm</p>
                            <p className='text-gray-200'>Messenger: xx</p>
                            <p className='text-gray-200'>&nbsp;</p>
                        </div>
                    </div>
                    <div className='flex items-center w-full bg-gray-800/50 p-6 rounded-lg'>
                        <AiFillGoogleCircle className='text-8xl text-gray-200 min-w-[40px]' />
                        <div className='flex flex-col ml-5 w-full'>
                            <p className='text-gray-200 text-[20px] text-semi-bold'>Google</p>
                            <p className='text-gray-200'>Contact: xx</p>
                            <p className='text-gray-200'>Messenger: xx</p>
                            <p className='text-gray-200'>&nbsp;</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-lg shadow-xl p-8 w-full' id='form'>
                    <form action="endpointTODO" method='post'>
                        <div>
                            <input type="text" placeholder='Your Name ...' className='w-full p-3 border border-gray-300 rounded-lg mb-4' />
                            <input type="email" placeholder='Your Email ...' className='w-full p-3 border border-gray-300 rounded-lg mb-4' />
                            <textarea placeholder='Your Message ...' className='w-full p-3 border border-gray-300 rounded-lg mb-4 h-40' />
                            <button type='submit' className='w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-lg hover:opacity-90 transition duration-300'>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;
