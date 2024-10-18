import Link from "next/link";
import React from "react";

// React Icons
import { 
    FaLinkedinIn, 
    FaCodepen,
    FaGithub,
    FaTwitter
} from "react-icons/fa";

const Footer = () => {
    



    return (
        <div className="px-2">
            <div className="py-4 border-b border-b-gray-800 flex justify-between items-center max-w-6xl m-auto">
                <h2 className="text-md text-white font-semibold">
                    <Link href="">EL Afrhani Saad</Link>
                </h2>
                <ul className="flex justify-center items-center gap-3">
                    <li className="text-white text-sm" title="LinkedIn">
                        <Link href="www.linkedin.com/in/saad-el-afrhani-759a26295" className="ease-in-out duration-150 hover:text-teal-500">
                            <FaLinkedinIn />
                        </Link>
                    </li>
                    <li className="text-white text-sm" title="Codepen">
                        <Link href="https://codepen.io/saadelafrhani" className="ease-in-out duration-150 hover:text-teal-500">
                            <FaCodepen />
                        </Link>
                    </li>
                    <li className="text-white text-sm" title="GitHub">
                        <Link href="https://github.com/saadelafrhani" className="ease-in-out duration-150 hover:text-teal-500">
                            <FaGithub />
                        </Link>
                    </li>
                    <li className="text-white text-sm" title="Twitter">
                        <Link href="https://x.com/saadelafrhani" className="ease-in-out duration-150 hover:text-teal-500">
                            <FaTwitter />
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="py-8 flex flex-col gap-4 justify-between items-center max-w-6xl m-auto sm:flex-row sm:gap-0">
                <ul className="flex justify-center items-center gap-4">
                    <li className="text-gray-400 text-sm" title="Experiences">
                        {/* */}
                        <Link href="/career" className="font-bold ease-in-out duration-150 hover:text-white">
                            Career
                        </Link>
                    </li>
                    <li className="text-gray-400 text-sm" title="Projects">
                        <Link href="/blog" className="font-bold ease-in-out duration-150 hover:text-white">
                            Blog    
                        </Link>
                    </li>
                    <li className="text-gray-400 text-sm" title="Contact">
                        <Link href="/contact" className="font-bold ease-in-out duration-150 hover:text-white">
                            Contact
                        </Link>
                    </li>
                </ul>
                <h5 className="text-white font-initial text-sm">&copy; 2022 - EL Afrhani Saad. All Rights Reserved.</h5>
            </div>
        </div>
    );
}

export default Footer;