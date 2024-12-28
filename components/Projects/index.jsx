import React, { useEffect, useState } from "react";
import { db } from "../../firebase/connection";
import { collection, getDocs } from "firebase/firestore"; // Removed unused imports
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                console.log("Fetching projects from Firestore...");
                const querySnapshot = await getDocs(collection(db, "projects"));
                const projectsData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                console.log("Projects fetched successfully:", projectsData);
                setProjects(projectsData);
            } catch (error) {
                console.error("Error fetching projects:", error.message);
                setError("Failed to fetch projects. Please check your internet connection and try again.");
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
            {error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 sm:grid-cols-2">
                    {projects.length > 0 ? (
                        projects.map((project) => (
                            <div
                                key={project.id}
                                title={`${project.title} - ${project.genre}`}
                                className="bg-cyan-900 rounded-lg p-4 m-auto w-full grid gap-4 transition-colors duration-150 hover:bg-cyan-800"
                            >
                                {project.imageUrl && (
                                    <div className="flex justify-center items-center">
                                        <img
                                            className="rounded-lg w-full object-cover"
                                            src={project.imageUrl}
                                            alt={`${project.title} image`}
                                        />
                                    </div>
                                )}
                                <div className="flex flex-col items-start">
                                    <h2 className="text-2xl text-white font-bold mb-2">{project.title}</h2>
                                    <b className="text-teal-500 mb-2">⎯⎯ {project.genre}</b>
                                    <p className="text-gray-300 text-sm leading-6">{project.description}</p>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="py-2 px-4 mt-4 bg-white text-black font-semibold text-md border-2 border-white rounded-md flex items-center justify-between gap-2 transition-all duration-150 hover:bg-gray-900 hover:border-gray-900 hover:text-white"
                                            style={{ width: "100%" }}
                                            title="Visit website"
                                        >
                                            <span>Visit website</span>
                                            <HiOutlineArrowNarrowRight />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No projects available yet.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Projects;
