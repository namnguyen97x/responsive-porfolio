import React, {useState} from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import banner from "../assets/banner.png";
import { Link } from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
    return(
        <div className="text-black flex justify-between items-center max-w-[1300px] mx-auto p-4">
            <a className="ml-4"><img src={banner} alt="logo" width="200px" /></a>
            <ul className="hidden md:flex font-semibold space-x-6">
            <li className="py-2 text-[#0370c3]" style={{ fontSize: '24px' }}><Link to="/work" smooth={true} duration={500} offset={-100} onClick={handleNav} className="cursor-pointer">Work</Link></li>
                    <li className="py-2 text-[#0370c3]" style={{ fontSize: '24px' }}><Link to="/experience" smooth={true} duration={500} offset={-100} onClick={handleNav} className="cursor-pointer">Experience</Link></li>
                    <li className="py-2 text-[#0370c3]" style={{ fontSize: '24px' }}><Link to="/contact" smooth={true} duration={500} offset={-100} onClick={handleNav} className="cursor-pointer">Contact</Link></li>
                    <li className="py-2 text-[#0370c3]" style={{ fontSize: '24px' }}><Link to="/about" smooth={true} duration={500} offset={-100} onClick={handleNav} className="cursor-pointer">About</Link></li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">{nav ? <AiOutlineClose size={30} color="#0370c3" /> : <AiOutlineMenu size={30} color="#0370c3" />}</div>
            <div className={nav ? 'z-10 text-white text-xl fixed h-full left-0 top-0 w-[70%] bg-[#ffffff] border-r border-r-gray-400 ease-in-out duration-500' : 'fixed left-[-100%]' }>
                <div className="flex justify-center mt-4">
                    <img src={banner} alt="logo" width="200px" />
                </div>
                <ul className="flex flex-col p-4 ml-5">
                    <li className="py-2 text-[#0370c3]" style={{ fontSize: '24px' }}><Link to="/work" smooth={true} duration={500} offset={-100} onClick={handleNav} className="cursor-pointer">Work</Link></li>
                    <li className="py-2 text-[#0370c3]" style={{ fontSize: '24px' }}><Link to="/experience" smooth={true} duration={500} offset={-100} onClick={handleNav} className="cursor-pointer">Experience</Link></li>
                    <li className="py-2 text-[#0370c3]" style={{ fontSize: '24px' }}><Link to="/contact" smooth={true} duration={500} offset={-100} onClick={handleNav} className="cursor-pointer">Contact</Link></li>
                    <li className="py-2 text-[#0370c3]" style={{ fontSize: '24px' }}><Link to="/about" smooth={true} duration={500} offset={-100} onClick={handleNav} className="cursor-pointer">About</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;
