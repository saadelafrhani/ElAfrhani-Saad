import React, { useEffect, useState } from "react";
import { db } from "../../firebase/connection"; // Adjusted path for both files
import { collection, getDocs } from "firebase/firestore"; // Import Firestore functions

const Career = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "experiences")); // Make sure this is the "experiences" collection
                const experiencesData = querySnapshot.docs.map(doc => doc.data());
                setExperiences(experiencesData);
            } catch (error) {
                console.error("Error fetching experiences: ", error);
            }
        };

        fetchExperiences();
    }, []);

    return (
        <div className="max-w-6xl m-auto p-4 pt-8 sm:pt-20 px-2" id="experiences">
            <h1 className="text-4xl text-teal-500 font-bold sm:text-5xl">#1 Professional Experience</h1>
            <p className="text-sm text-teal-500 font-semibold mt-4 mb-8 leading-6">
                Below are my professional experiences working in various roles, contributing to projects and growth.
            </p>
            <div className="grid grid-cols-1 gap-0 lg:grid-cols-3 sm:grid-cols-2 sm:gap-4">
                {experiences.length > 0 ? (
                    experiences.map((experience, index) => (
                        <div
                            key={index}
                            className="bg-cyan-900 p-4 rounded-lg hover:bg-cyan-800 relative mb-4 sm:mb-0"
                            title={`${experience.jobTitle} @${experience.company}`}
                        >
                            <b className="text-teal-500 text-sm bg-white py-1 px-2 rounded absolute top-2 left-4">
                                {experience.company}
                            </b>
                            <h2 className="text-white text-xl font-bold mt-4 mb-2">
                                {experience.jobTitle}
                            </h2>
                            <p className="text-teal-500 text-sm mb-2">{experience.year}</p>
                            <p className="text-white text-sm leading-6">{experience.description}</p>
                        </div>
                    ))
                ) : (
                    <p>No experiences available yet.</p>
                )}
            </div>
        </div>
    );
};

export default Career;