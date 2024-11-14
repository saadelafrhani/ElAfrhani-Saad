import React, { useEffect, useState } from "react";
import { db } from "../../firebase/connection"; // Adjusted path for both files
import { collection, getDocs } from "firebase/firestore"; // Import Firestore functions
import { HiOutlineArrowNarrowRight } from "react-icons/hi"; // Ensure you're importing the icon

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "projects"));
                const projectsData = querySnapshot.docs.map(doc => doc.data());
                setProjects(projectsData);
            } catch (error) {
                console.error("Error fetching projects: ", error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="max-w-6xl m-auto p-4 pt-8 sm:pt-20 px-2" id="projects">
            <h1 className="text-4xl text-teal-500 font-bold sm:text-5xl">#Latest Works</h1>
            <p className="text-sm text-teal-500 font-semibold mt-4 mb-8 leading-6">
                Digital Explorers is a knowledge exchange initiative
                between 2 buzzing ICT, offering.
            </p>
            <div className="grid grid-cols-1 gap-0 lg:grid-cols-3 sm:grid-cols-2 sm:gap-4">
                {projects.length > 0 ? (
                    projects.map((project, index) => (
                        <div
                            key={index}
                            title={`${project.title} - ${project.genre}`}
                            className="bg-cyan-900 rounded-lg p-4 max-w-4xl m-auto mb-4 w-full grid grid-cols-1 gap-0 ease-in-out duration-150 hover:bg-cyan-800 sm:mb-0"
                        >
                            <div className="w-45 flex justify-center items-center">
                                {project.imageUrl && (
                                    <img
                                        className="rounded-lg w-100"
                                        src={project.imageUrl}
                                        alt="Work-Image"
                                    />
                                )}
                            </div>
                            <div className="flex flex-col justify-center items-start w-55 pb-0">
                                <h2 className="text-2xl text-white font-bold my-5 mb-2">
                                    {project.title}
                                </h2>
                                <b className="text-teal-500 mb-2">⎯⎯ {project.genre}</b>
                                <p className="text-gray-300 text-sm leading-6 m-0">
                                    {project.description}
                                </p>
                                {project.link && (
                                    <button className="py-2 px-4 bg-white mt-4 text-black ease-in-out duration-150 border-2 border-white rounded-md hover:bg-gray-900 hover:border-gray-900 hover:text-white" style={{ width: "100%" }} title="Visit website">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex justify-between items-center gap-1 font-semibold text-md p-0 m-0"
                                        >
                                            <span>Visit website</span>
                                            <HiOutlineArrowNarrowRight />
                                        </a>
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No projects available yet.</p>
                )}
            </div>
        </div>
    );
};

export default Projects;
