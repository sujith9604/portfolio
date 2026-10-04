import React from "react";
import { projects, asset } from "../data/site";
import "./Projects.css";

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <div className="project-image">
      <div className="image-placeholder">
        <img src={asset(project.image)} alt={`Animated preview of ${project.title}`} loading="lazy" />
        {(project.github || project.live) && (
          <div className="project-overlay">
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  GitHub
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
    <div className="project-content">
      <div className="project-title-row">
        <h3 className="project-title">{project.title}</h3>
        <span className={`project-status ${project.tone}`}>{project.status}</span>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-tech">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => (
  <div className="projects">
    <div className="projects-container">
      <section className="projects-hero">
        <h1 className="projects-title">Projects</h1>
      </section>

      <section className="all-projects-section">
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default Projects;
