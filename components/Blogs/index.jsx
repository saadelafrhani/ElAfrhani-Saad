import React from "react";
// blogs Data
import BlogsData from "./data/data.js";

// React Icons
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Blogs = () => {
    return (
        <div className="max-w-6xl m-auto p-4 pt-8 px-2 sm:pt-20" id="projects">
            <h1 className="text-4xl text-teal-500 font-bold sm:text-5xl">#blogs coming soon....</h1>
            <p className="text-sm text-teal-500 font-semibold mt-4 mb-8 leading-6">
                Digital Explorers is a knowledge exchange initiative
                between 2 buzzing ICT, offering.
            </p>
            <div className="grid grid-cols-1 gap-4">
                {
                    BlogsData && BlogsData.length > 0 ?
                        BlogsData.map((blog, index) => (
                            <div key={index} title={`${blog.blog_title} - ${blog.genre}`} 
                                className="flex flex-col sm:flex-row bg-cyan-900 rounded-lg p-4 max-w-5xl m-auto mb-4 w-full ease-in-out duration-150 hover:bg-cyan-800 sm:mb-0">
                                
                                {/* Image Section */}
                                <div className="w-full sm:w-1/4 flex-shrink-0">
                                    <img 
                                        className="rounded-lg w-full h-auto sm:h-64 object-cover" 
                                        src={blog.image_url} 
                                        alt="blog-Image" />
                                </div>

                                {/* Blog Content */}
                                <div className="flex flex-col justify-center items-start w-full sm:w-3/4 pl-0 sm:pl-6 pt-4 sm:pt-0">
                                    <h2 className="text-2xl text-white font-bold mb-2">{blog.blog_title}</h2>
                                    <b className="text-teal-500 mb-2">⎯⎯ {blog.genre}</b>
                                    <p className="text-gray-300 text-sm leading-6 mb-4">{blog.description}</p>
                                    <button className="py-2 px-4 bg-white text-black ease-in-out duration-150 border-2 border-white rounded-md hover:bg-gray-900 hover:border-gray-900 hover:text-white" style={{width: "100%"}} title="Visit website">
                                        <a href={blog.lien} className="flex justify-between items-center gap-1 font-semibold text-md">
                                            <span>Visit website</span>
                                            <HiOutlineArrowNarrowRight />
                                        </a>
                                    </button>
                                </div>
                            </div>
                        ))
                    : <p className="text-white">No blogs available.</p>
                }
            </div>
        </div>
    );
}

export default Blogs;
