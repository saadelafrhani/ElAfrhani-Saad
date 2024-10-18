import React from 'react';

// React Icons
import { SiHey } from "react-icons/si";
import { RiProfileLine, RiContactsBookLine } from "react-icons/ri";
import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="px-2 max-w-[1400px] w-full m-auto grid grid-cols-1 lg:grid-cols-2 place-items-center gap-6">

      <div className='w-full flex flex-col justify-center lg:items-start items-center gap-2 order-2'>
        <h2 className="flex lg:justify-start justify-center items-center gap-2 text-xl font-bold text-teal-500 mb-4 sm:text-2xl">
          <span>Hello there</span><SiHey /><span>I am</span>
        </h2>
        <h1 className="text-6xl font-bold text-white sm:text-7xl lg:text-left text-center">
          EL Afrhani Saad
        </h1>
        <p className="text-md text-gray-400 my-4 sm:text-lg sm:leading-8 lg:text-left text-center">
          Full-stack Development Student with 2 years of focused learning in both front-end and 
          back-end technologies. Passionate about creating responsive web applications using HTML5,
           CSS3, JavaScript, React.js. Gaining skills in back-end technologies such as PHP, Python,
            and MySQL through academic projects and personal learning.
        </p>
        <div className="my-7 flex justify-start items-center gap-4 flex-wrap">
          <button className="bg-teal-500 py-2 px-4 font-bold text-white border-2 border-teal-500 rounded-md ease-in-out duration-150 hover:text-white hover:bg-transparent hover:border-white" title="View Resume">
            <a href="/ElAfrhganiSaad.pdf" className="flex justify-start items-center gap-1">
              <span>View Resume</span>
              <RiProfileLine />
            </a>
          </button>
          <button className="bg-white py-2 px-4 font-bold text-teal-500 border-2 border-white rounded-md ease-in-out duration-150 hover:text-white hover:bg-transparent hover:border-white" title="Get in touch">
            {/*contact page*/}
            <a href="" className="flex justify-start items-center gap-1">
              <span>Get in touch</span>
              <RiContactsBookLine />
            </a>
          </button>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h4 className="text-xl text-white font-bold">Find me on :</h4>
          <ul className="flex lg:justify-start justify-center items-center flex-wrap gap-4 w-full">
            <li title="Twitter">
              <a href="https://x.com/saadelafrhani" className="text-teal-500 text-md ease-in-out duration-150 hover:text-white">
                <FiTwitter />
              </a>
            </li>
            <li title="GitHub">
              <a href="https://github.com/saadelafrhani" className="text-teal-500 text-md ease-in-out duration-150 hover:text-white">
                <FiGithub />
              </a>
            </li>
            <li title="LinkedIn">
              <a href="www.linkedin.com/in/saad-el-afrhani-759a26295" className="text-teal-500 text-md ease-in-out duration-150 hover:text-white">
                <FiLinkedin />
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className='order-1'>
        <img src='/imgpersonnel-sq.jpeg' className='max-w-[400px] w-full rounded-full' alt='My-Photo' />
      </div>

    </div>
  )
}

export default Hero;