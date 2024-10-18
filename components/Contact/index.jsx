import React from "react";

// React Icons
import { 
        FaLinkedinIn, 
        FaCodepen,
        FaGithub,
        FaTwitter
    } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="py-8 pb-0 px-2 max-w-6xl m-auto sm:py-20" id="contact">
            <h1 className="text-3xl text-teal-500 font-bold sm:text-5xl">
                Feel free, <br /> Say hi;
            </h1>
            <div className="my-10 grid grid-cols-2 gap-0 lg:grid-cols-5 sm:grid-cols-3 sm:gap-4">
                <ul>
                    <li className="mb-4 text-gray-300 text-md w-max" title="LinkedIn">
                        <a href="www.linkedin.com/in/saad-el-afrhani-759a26295" className="flex gap-2 justify-start items-center w-max ease-in-out duration-150 hover:text-teal-500">
                            <FaLinkedinIn />
                            <span className="text-sm font-initial">Saad El afrhani</span>
                        </a>
                    </li>
                    <li className="mb-4 text-gray-300 text-md w-max" title="Codepen">
                        <a href="https://codepen.io/saadelafrhani" className="flex gap-2 justify-start items-center w-max ease-in-out duration-150 hover:text-teal-500">
                            <FaCodepen />
                            <span className="text-sm font-initial">Saad Elafrhani</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li className="mb-4 text-gray-300 text-md w-max" title="GitHub">
                        <a href="https://github.com/saadelafrhani" className="flex gap-2 justify-start items-center w-max ease-in-out duration-150 hover:text-teal-500">
                            <FaGithub />
                            <span className="text-sm font-initial">Saad Elafrhani</span>
                        </a>
                    </li>
                    <li className="mb-4 text-gray-300 text-md w-max" title="Twitter">
                        <a href="https://x.com/saadelafrhani" className="flex gap-2 justify-start items-center w-max ease-in-out duration-150 hover:text-teal-500">
                            <FaTwitter />
                            <span className="text-sm font-initial">/Saadelafrhani</span>
                        </a>
                    </li>
                </ul>
                <div className="mt-10 sm:mt-0">
                    <h2 className="text-2xl text-teal-500 font-bold mb-2 sm:text-3xl">Start project?</h2>
                    <h3 className="text-md text-gray-400 sm:text-xl hover:text-teal-500">  <a href="mailto:Saaad.elafrhani@gmail.com">Saaad.elafrhani@gmail.com</a></h3>
                </div>
            </div>
        </div>
    );
}

export default Contact;
