import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillGoogleCircle, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className='bg-gradient-to-t from-gray-900 to-black text-gray-300 max-w-[1300px] mx-auto px-4 py-12 rounded-xl mt-10'>
            <div className='max-w-[1300px] mx-auto px-4 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                    {/* About Section */}
                    <div className='space-y-4'>
                        <h3 className='text-2xl font-bold text-white'>Doraemon</h3>
                        <p className='text-gray-400'>A robotic cat from the 22nd century, helping to make dreams come true.</p>
                        <div className='flex space-x-4'>
                            <a href="#" className='text-gray-400 hover:text-white transition-colors'>
                                <AiFillFacebook size={24} />
                            </a>
                            <a href="#" className='text-gray-400 hover:text-white transition-colors'>
                                <AiFillGithub size={24} />
                            </a>
                            <a href="#" className='text-gray-400 hover:text-white transition-colors'>
                                <AiFillGoogleCircle size={24} />
                            </a>
                            <a href="#" className='text-gray-400 hover:text-white transition-colors'>
                                <AiFillLinkedin size={24} />
                            </a>
                            <a href="#" className='text-gray-400 hover:text-white transition-colors'>
                                <AiFillTwitterCircle size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className='text-xl font-semibold text-white mb-4'>Quick Links</h3>
                        <ul className='space-y-2'>
                            <li>
                                <Link to="home" smooth={true} duration={500} className='hover:text-white cursor-pointer transition-colors'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="about" smooth={true} duration={500} className='hover:text-white cursor-pointer transition-colors'>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="portfolio" smooth={true} duration={500} className='hover:text-white cursor-pointer transition-colors'>
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link to="experience" smooth={true} duration={500} className='hover:text-white cursor-pointer transition-colors'>
                                    Experience
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className='text-xl font-semibold text-white mb-4'>Services</h3>
                        <ul className='space-y-2'>
                            <li className='hover:text-white cursor-pointer transition-colors'>Web Development</li>
                            <li className='hover:text-white cursor-pointer transition-colors'>Mobile Apps</li>
                            <li className='hover:text-white cursor-pointer transition-colors'>UI/UX Design</li>
                            <li className='hover:text-white cursor-pointer transition-colors'>Consulting</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className='text-xl font-semibold text-white mb-4'>Contact</h3>
                        <ul className='space-y-2'>
                            <li className='flex items-center space-x-2'>
                                <span className='text-gray-400'>Email:</span>
                                <span className='hover:text-white cursor-pointer transition-colors'>doraemon@example.com</span>
                            </li>
                            <li className='flex items-center space-x-2'>
                                <span className='text-gray-400'>Phone:</span>
                                <span className='hover:text-white cursor-pointer transition-colors'>+1234567890</span>
                            </li>
                            <li className='flex items-center space-x-2'>
                                <span className='text-gray-400'>Location:</span>
                                <span className='hover:text-white cursor-pointer transition-colors'>Tokyo, Japan</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='border-t border-gray-800 mt-12 pt-8 text-center'>
                    <p className='text-gray-400'>
                        © {new Date().getFullYear()} Doraemon. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 