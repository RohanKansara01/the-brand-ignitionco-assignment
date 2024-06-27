import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import './Projects.css'; // Import your CSS file

const ProjectsCard = ({ title, des, src, githublink, livelink }) => {
    return (
        <div className="projects-card">
            <div className="image-container">
                <img
                    src={src}
                    alt="Project Image"
                />
            </div>
            <div className="card-content">
                <div className="card-title">
                    {title}
                </div>
                <div className="card-icons">
                    {/* <span className="card-icon">
                        <BsGithub />
                    </span> */}
                    <a className="card-icon" href={githublink} target="_blank" rel="noopener noreferrer">
                      <BsGithub />
                    </a>
                    {/* <span className="card-icon">
                        <FaGlobe />
                    </span> */}
                    <a className="card-icon" href={livelink} target="_blank" rel="noopener noreferrer">
                      <FaGlobe />
                    </a>
                </div>
                <p className="card-description">
                    {des}
                </p>
            </div>
        </div>
    );
}

export default ProjectsCard;
