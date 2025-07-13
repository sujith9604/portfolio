import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Unix-like File System",
      description:
        "Built a simplified Unix-based file system with file creation, deletion, and memory management. Virtual memory and paging implemented in C/C++.",
      image: "images/unix-like-file-system.svg",
      category: "backend",
      technologies: ["C++", "C", "Memory Management", "Paging"],
      github: "",
      live: "",
      featured: true,
    },
    {
      id: 2,
      title: "USB Malware Simulation",
      description:
        "Created a C++ USB malware demonstrating file infection, autorun setup, and replication. Detected and analyzed with Snort (NIDS) in Linux.",
      image: "images/usb-malware-svg.svg",
      category: "backend",
      technologies: ["C++", "Snort", "Linux"],
      github: "https://github.com/sujith9604/malwareSoftware",
      live: "",
      featured: true,
    },
    {
      id: 3,
      title: "Java Client-Server Communication",
      description:
        "Developed a command-line based network node communication system in Java. Simulated protocols and analyzed performance using NetSim.",
      image: "images/java-client-server-svg.svg",
      category: "fullstack",
      technologies: ["Java", "NetSim", "Socket Programming"],
      github: "",
      live: "",
      featured: false,
    },
    {
      id: 4,
      title: "Real Estate Desktop App",
      description:
        "Built a desktop-based real estate management system using Java Swing and MySQL with user-friendly search, property listing, and ER diagram design.",
      image: "images/real-estate-app-svg.svg",
      category: "fullstack",
      technologies: ["Java", "Swing", "MySQL"],
      github: "https://github.com/sujith9604/vaasthunirmaan",
      live: "",
      featured: true,
    },
    {
      id: 5,
      title: "Personal Portfolio Website",
      description:
        "Responsive portfolio with smooth animations and background image. Built using React, Tailwind CSS, and Framer Motion.",
      image: "images/portfolio-website-svg.svg",
      category: "frontend",
      technologies: ["React"],
      github: "https://github.com/sujith9604/portfolio",
      live: "https://sujith9604.github.io/portfolio/",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "fullstack", name: "Full Stack" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="projects">
      <div className="projects-container">
        <section className="projects-hero">
          <h1 className="projects-title">My Projects</h1>
          <p className="projects-subtitle">
            These projects reflect my skills in backend systems, security, data
            communication, and UI development—shaped through academic work and
            personal passion.
          </p>
        </section>

        <section className="featured-section">
          <h2 className="section-title">Featured Projects</h2>
          <div className="featured-grid">
            {featuredProjects.map((project) => (
              <div key={project.id} className="featured-card">
                <div className="project-image">
                  <div className="image-placeholder">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-links">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            GitHub
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="all-projects-section">
          <h2 className="section-title">All Projects</h2>

          <div className="filter-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${
                  filter === category.id ? "active" : ""
                }`}
                onClick={() => setFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <div className="image-placeholder">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-links">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            GitHub
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
