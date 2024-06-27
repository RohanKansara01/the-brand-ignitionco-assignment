import React from 'react';
// import Title from '../layouts/Title';
// import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import './Projects.css'; // Import your CSS file

const Projects = () => {
    return (
        <section id="projects" className="projects-container">
            {/* <div className="projects-title">
                <Title
                    title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                    des="My Projects"
                />
            </div> */}
            <h2>My Projects</h2>
            <div className="projects-grid">
                <ProjectsCard
                    title="SOCIAL MEDIA CLONE"
                    des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src=""
                    githublink=""
                    livelink=""
                />
                <ProjectsCard
                    title="E-commerce Website"
                    des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src=""
                    githublink=""
                    livelink=""
                />
                <ProjectsCard
                    title="Chatting App"
                    des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src=""
                    githublink=""
                    livelink=""
                />
                <ProjectsCard
                    title="SOCIAL MEDIA CLONE"
                    des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src=""
                    githublink=""
                    livelink=""
                />
                <ProjectsCard
                    title="E-commerce Website"
                    des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src=""
                    githublink=""
                    livelink=""
                />
                <ProjectsCard
                    title="Chatting App"
                    des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                    src=""
                    githublink=""
                    livelink=""
                />
            </div>
        </section>
    );
}

export default Projects;
