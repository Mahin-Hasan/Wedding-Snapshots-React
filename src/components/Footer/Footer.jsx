import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-[#efe9dc] text-stone-800 mt-28">
            <aside>
                <img className='w-32' src={logo} alt="" />
                <p className="font-bold font-serif text-xl">
                    Wedding | SnapShots
                </p>
                <p className='font-mono italic font-semibold text-lg'>Making Your Wedding Memorable</p>
                <p className='font-medium'>©2023, All rights reserved | Mahin Hasan</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-3 text-3xl">
                    <Link className='text-blue-700' target='blank' to='https://www.facebook.com/mahin.hasan.750'><FaFacebook /></Link>
                    <Link className='text-teal-950' target='blank' to='https://github.com/Mahin-Hasan'><FaGithub /></Link>
                    <Link className='text-sky-600' target='blank' to='https://www.linkedin.com/in/mahin-hasan-/'><FaLinkedin /></Link>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;