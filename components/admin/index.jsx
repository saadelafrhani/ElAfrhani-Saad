import React, { useState, useEffect } from "react";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase/connection"; // Adjusted path for both files

const Admin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [projects, setProjects] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [showExperienceForm, setShowExperienceForm] = useState(false);
    const [projectData, setProjectData] = useState({
        title: "", genre: "", description: "", imageUrl: "", link: ""
    });
    const [experienceData, setExperienceData] = useState({
        jobTitle: "", company: "", year: "", description: ""
    });

    // Loadings
    const [addProjectLoading, setAddProjectLoading] = useState(false)
    const [deleteProject, setDeleteProject] = useState({
        projectId: null,
        loading: false,
    })
    const [addExperiencesLoading, setAddExperiencesLoading] = useState(false)
    const [deleteExperience, setDeleteExperience] = useState({
        experienceId: null,
        loading: false
    })

    // Fetch projects and experiences
    useEffect(() => {
        const fetchProjects = async () => {
            const querySnapshot = await getDocs(collection(db, "projects"));
            setProjects(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };

        const fetchExperiences = async () => {
            const querySnapshot = await getDocs(collection(db, "experiences"));
            setExperiences(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };

        if (isLoggedIn) {
            fetchProjects();
            fetchExperiences();
        }
    }, [isLoggedIn]);

    // Handle project and experience submissions
    const handleProjectSubmit = async (e) => {
        e.preventDefault();
        setAddProjectLoading(true)
        try {
            await addDoc(collection(db, "projects"), projectData);
            alert("Project added successfully!");
            setProjectData({ title: "", genre: "", description: "", imageUrl: "", link: "" });
            setAddProjectLoading(false)
            setShowProjectForm(false);
        } catch (error) {
            console.error("Error adding project: ", error);
            setAddProjectLoading(false)
        }
    };

    const handleExperienceSubmit = async (e) => {
        e.preventDefault();
        setAddExperiencesLoading(true);
        try {
            await addDoc(collection(db, "experiences"), experienceData);
            alert("Experience added successfully!");
        } catch (error) {
            console.error("Error adding experience:", error);
        } finally {
            setAddExperiencesLoading(false);
        }
    };

       // Handle login
    const handleLogin = (e) => {
        e.preventDefault();
        const adminUsername = "saad";
        const adminPassword = "zoubi";
        
        if (username === adminUsername && password === adminPassword) {
            setIsLoggedIn(true);
        } else {
            alert('Invalid credentials');
        }
    };

    // Handle delete project or experience
    const handleDeleteProject = async (id) => {
        setDeleteProject({ projectId: id, loading: true });
        try {
            await deleteDoc(doc(db, "projects", id));
            alert("Project deleted successfully!");
            setProjects(projects.filter(project => project.id !== id));
            setDeleteProject({ projectId: null, loading: false });
        } catch (error) {
            console.error("Error deleting project:", error);
            setDeleteProject({ projectId: null, loading: false });
        }
    };

    const handleDeleteExperience = async (id) => {
        setDeleteExperience({ experienceId: id, loading: true });
        try {
            await deleteDoc(doc(db, "experiences", id));
            alert("Experience deleted successfully!");
            setExperiences(experiences.filter(exp => exp.id !== id));
            setDeleteExperience({ experienceId: null, loading: false });
        } catch (error) {
            console.error("Error deleting experience:", error);
            setDeleteExperience({ experienceId: null, loading: false });
        }
    };

    // If not logged in, show login form
    if (!isLoggedIn) {
        return (
            <div className="max-w-full sm:max-w-4xl m-auto p-4 sm:p-8">
                <h1 className="text-2xl sm:text-3xl text-white font-bold pt-7">Admin Login</h1>
                <form onSubmit={handleLogin} className="mt-8 space-y-4 bg-gray-100 p-6 rounded">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    <button type="submit" className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600">
                        Login
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="max-w-full sm:max-w-4xl m-auto p-4 sm:p-8">
            {/* Buttons to toggle forms */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
                <h1 className="text-2xl sm:text-3xl text-white font-bold pt-7">Admin Panel</h1>
                <div className="flex gap-2 sm:gap-4">
                    <button
                        onClick={() => { setShowProjectForm(true); setShowExperienceForm(false); }}
                        className="px-4 py-2 m-2 bg-teal-500 text-white rounded hover:bg-teal-600 text-sm sm:text-base"
                    >
                        Add Project
                    </button>
                    <button
                        onClick={() => { setShowExperienceForm(true); setShowProjectForm(false); }}
                        className="px-4 py-2 m-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 text-sm sm:text-base"
                    >
                        Add Experience
                    </button>
                </div>
            </div>

            {/* Project Form */}
            {showProjectForm && (
                <form onSubmit={handleProjectSubmit} className="mt-8 space-y-4 bg-gray-100 p-6 rounded">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-4">Add New Project</h2>
                    <input
                        type="text"
                        placeholder="Title"
                        value={projectData.title}
                        onChange={(e) => setProjectData({ ...projectData, title: e.target.value })}
                        className="w-full p-2 border rounded"
                        disabled={addProjectLoading}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Genre"
                        value={projectData.genre}
                        onChange={(e) => setProjectData({ ...projectData, genre: e.target.value })}
                        className="w-full p-2 border rounded"
                        disabled={addProjectLoading}
                        required
                    />
                    <textarea
                        placeholder="Description"
                        value={projectData.description}
                        onChange={(e) => setProjectData({ ...projectData, description: e.target.value })}
                        className="w-full p-2 border rounded"
                        disabled={addProjectLoading}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Image URL"
                        value={projectData.imageUrl}
                        onChange={(e) => setProjectData({ ...projectData, imageUrl: e.target.value })}
                        className="w-full p-2 border rounded"
                        disabled={addProjectLoading}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Link"
                        value={projectData.link}
                        onChange={(e) => setProjectData({ ...projectData, link: e.target.value })}
                        className="w-full p-2 border rounded"
                        disabled={addProjectLoading}
                        required
                    />
                    <button type="submit" className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600" disabled={addProjectLoading}>
                        {addProjectLoading ? "Submitting..." : "Submit"}
                    </button>
                </form>
            )}

            {/* Experience Form */}
            {showExperienceForm && (
                <form onSubmit={handleExperienceSubmit} className="mt-8 space-y-4 bg-gray-100 p-6 rounded">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-4">Add New Experience</h2>
                    <input
                        type="text"
                        placeholder="Job Title"
                        value={experienceData.jobTitle}
                        onChange={(e) => setExperienceData({ ...experienceData, jobTitle: e.target.value })}
                        className="w-full p-2 border rounded"
                        disabled={addExperiencesLoading}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Company"
                        value={experienceData.company}
                        onChange={(e) => setExperienceData({ ...experienceData, company: e.target.value })}
                        className="w-full p-2 border rounded"
                        disabled={addExperiencesLoading}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Year"
                        value={experienceData.year}
                        onChange={(e) => setExperienceData({ ...experienceData, year: e.target.value })}
                        className="w-full p-2 border rounded"
                        disabled={addExperiencesLoading}
                        required
                    />
                    <textarea
                        placeholder="Description"
                        value={experienceData.description}
                        onChange={(e) => setExperienceData({ ...experienceData, description: e.target.value })}
                        className="w-full p-2 border rounded"
                        disabled={addExperiencesLoading}
                        required
                    />
                    <button type="submit" className="w-full bg-cyan-500 text-white py-2 rounded hover:bg-cyan-600" disabled={addExperiencesLoading}>
                        {addExperiencesLoading ? "Submitting..." : "Submit"}
                    </button>
                </form>
            )}

            {/* Projects List */}
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Projects</h2>
            <div className="space-y-4">
                {projects.map((project) => (
                    <div key={project.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
                        <div>
                            <h3 className="text-xl">{project.title}</h3>
                            <p>{project.genre}</p>
                            <p>{project.description}</p>
                        </div>
                        <button
                            onClick={() => handleDeleteProject(project.id)}
                            className="bg-red-500 text-white px-4 py-2 rounded"
                            disabled={deleteProject.projectId === project.id && deleteProject.loading}
                        >
                            {deleteProject.projectId === project.id && deleteProject.loading
                                ? "Deleting project..."
                                : "Delete"}
                        </button>
                    </div>
                ))}
            </div>

            {/* Experiences List */}
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 mt-8">Experiences</h2>
            <div className="space-y-4">
                {experiences.map((experience) => (
                    <div key={experience.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md  ">
                        <div>
                            <h3 className="text-xl font-bold">{experience.jobTitle}</h3>
                            <p>{experience.company}</p>
                            <p>{experience.year}</p>
                            <p>{experience.description}</p>
                        </div>

                        <button
                            onClick={() => handleDeleteExperience(experience.id)}
                            className="bg-red-500 text-white px-4 py-2 rounded"
                            disabled={deleteExperience.experienceId === experience.id && deleteExperience.loading}
                        >
                            {deleteExperience.experienceId === experience.id && deleteExperience.loading
                                ? "Deleting experience..."
                                : "Delete"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Admin;