
"use client";

import { useState } from "react";

const skillGroups = [
  {
    title: "DevOps & CI/CD",
    skills: ["Git", "GitHub Actions", "Jenkins", "CI/CD", "Backstage"],
  },
  {
    title: "Containers & Orchestration",
    skills: ["Docker", "Docker Compose", "Kubernetes", "K3s"],
  },
  {
    title: "Infrastructure & Automation",
    skills: ["Ansible", "Vagrant", "Linux", "Bash", "PowerShell"],
  },
  {
    title: "Development",
    skills: ["Java", "Spring Boot", "JavaScript", "TypeScript", "React", "Next.js"],
  },
];

const projects = [
  {
    number: "01",
    title: "Portfolio CI/CD Automation",
    category: "DevOps & Cloud",
    status: "Hands-on project",
    description:
      "An automated portfolio delivery workflow using Backstage, GitHub Actions, Docker, and a self-hosted Windows runner. The workflow builds and publishes versioned images, deploys locally with Docker Compose, and verifies application health.",
    technologies: ["Backstage", "GitHub Actions", "Docker", "Docker Hub", "Next.js"],
  },
  {
    number: "02",
    title: "Smart Campus Service Platform",
    category: "Full Stack Development",
    status: "Academic project",
    description:
      "A modular service platform designed to simplify interactions within a university campus, with a Spring Boot backend and a microservices-oriented architecture.",
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "Git"],
  },
  {
    number: "03",
    title: "Kubernetes Multi-Node Lab",
    category: "Container Orchestration",
    status: "Practical lab",
    description:
      "A hands-on Kubernetes environment for deploying containerized applications, managing workloads across multiple nodes, and exploring networking and service exposure.",
    technologies: ["Kubernetes", "K3s", "Docker", "Linux", "YAML"],
  },
  {
    number: "04",
    title: "Backstage Developer Portal",
    category: "Platform Engineering",
    status: "Hands-on project",
    description:
      "A Backstage-based developer portal with GitHub authentication, software catalog entities, and Software Templates that automate project creation and deployment workflows.",
    technologies: ["Backstage", "Docker Compose", "GitHub", "PostgreSQL", "YAML"],
  },
];

const learningAreas = [
  {
    title: "DevOps & CI/CD",
    description:
      "Learning pipeline design, automated builds, release workflows, and deployment practices.",
  },
  {
    title: "Cloud & Platform Engineering",
    description:
      "Exploring cloud-native architectures, internal developer platforms, and Kubernetes.",
  },
  {
    title: "Infrastructure Automation",
    description:
      "Developing practical skills in Ansible, infrastructure provisioning, and configuration management.",
  },
  {
    title: "DevSecOps",
    description:
      "Exploring security integration into delivery pipelines, vulnerability scanning, and container security.",
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <main className={darkMode ? "site dark" : "site light"}>
      <header className="navbar">
        <a href="#home" className="logo" aria-label="Fatma Dhouib home">
          FD<span>.</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#learning">Learning</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="theme-button"
          onClick={() => setDarkMode((current) => !current)}
          aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
          aria-pressed={darkMode}
        >
          {darkMode ? "Light mode" : "Dark mode"}
        </button>
      </header>

      <section id="home" className="hero section-container">
        <div className="hero-content">
          <p className="eyebrow">DEVOPS & CLOUD ENGINEERING PORTFOLIO</p>

          <p className="hero-greeting">Hello, I&apos;m Fatma Dhouib.</p>

          <h1>
            Building reliable
            <br />
            systems through
            <br />
            <span>automation.</span>
          </h1>

          <p className="hero-role">
            Junior DevOps &amp; Cloud Engineer | Software Developer
          </p>

          <p className="hero-description">
            Computer Science and Networks graduate pursuing a path in DevOps
            and Cloud Engineering. I enjoy building applications, automating
            workflows, and exploring cloud-native technologies.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              Explore my projects
            </a>
            <a href="#contact" className="secondary-button">
              Get in touch
            </a>
          </div>

          <a
            href="https://github.com/FatmaDhouib"
            target="_blank"
            rel="noreferrer"
            className="github-profile-link"
          >
            GitHub profile ↗
          </a>
        </div>

        <div className="hero-card">
          <div className="card-decoration">{"</>"}</div>
          <p className="card-label">CURRENT FOCUS</p>
          <h2>DevOps &amp; Cloud Engineering</h2>

          <div className="focus-item">01 / CI/CD Automation</div>
          <div className="focus-item">02 / Containers &amp; Kubernetes</div>
          <div className="focus-item">03 / Infrastructure Automation</div>
          <div className="focus-item">04 / Platform Engineering</div>

          <div className="availability">
            <span className="availability-dot" />
            Focused on continuous learning
          </div>
        </div>
      </section>

      <section id="about" className="section-container content-section">
        <p className="eyebrow">01 / ABOUT ME</p>
        <h2 className="section-title">From software development to DevOps.</h2>

        <div className="about-grid">
          <p className="about-lead">
            I am interested in the intersection of software engineering,
            infrastructure, automation, and cloud technologies.
          </p>

          <div className="about-details">
            <p>
              With an academic background in Computer Science and Networks,
              I am continuing my studies in DevOps and Cloud Engineering.
              I enjoy understanding how applications are developed, packaged,
              deployed, monitored, and maintained.
            </p>

            <p>
              Through academic projects and hands-on labs, I am developing
              practical experience with containers, orchestration,
              configuration management, CI/CD pipelines, and developer
              platforms.
            </p>

            <p>
              My goal is to build reliable, maintainable, and secure
              application delivery workflows while continuing to develop
              my technical skills.
            </p>
          </div>
        </div>

        <div className="profile-details">
          <div className="profile-detail">
            <span>EDUCATION</span>
            <strong>Computer Science &amp; Networks</strong>
          </div>
          <div className="profile-detail">
            <span>CURRENT STUDIES</span>
            <strong>Master&apos;s in DevOps &amp; Cloud</strong>
          </div>
          <div className="profile-detail">
            <span>PROFESSIONAL INTEREST</span>
            <strong>DevOps, Cloud &amp; Automation</strong>
          </div>
        </div>
      </section>

      <section id="skills" className="section-container content-section">
        <p className="eyebrow">02 / TECHNICAL SKILLS</p>
        <h2 className="section-title">Technologies I work with.</h2>

        <div className="skill-groups">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skills-grid">
                {group.skills.map((skill) => (
                  <div className="skill-item" key={skill}>
                    <span className="skill-marker">+</span>
                    {skill}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section-container content-section">
        <p className="eyebrow">03 / SELECTED WORK</p>
        <h2 className="section-title">Projects and practical experience.</h2>

        <p className="section-intro">
          A selection of academic projects and hands-on technical work
          demonstrating my interest in software delivery, infrastructure,
          and automation.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span>{project.number}</span>
                <span>{project.category}</span>
              </div>

              <span className="project-status">{project.status}</span>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="technology-list">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <a
                href="https://github.com/FatmaDhouib"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Explore GitHub profile ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="learning" className="section-container content-section">
        <p className="eyebrow">04 / CERTIFICATIONS &amp; LEARNING</p>
        <h2 className="section-title">Learning is an ongoing process.</h2>

        <div className="learning-intro">
          <p>
            I have not obtained formal professional certifications yet.
            I am currently strengthening my knowledge through academic
            studies, practical labs, and independent technical projects.
          </p>
        </div>

        <div className="learning-grid">
          {learningAreas.map((area, index) => (
            <article className="learning-card" key={area.title}>
              <span className="learning-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <span className="learning-status">Learning in progress</span>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section-container contact-section">
        <p className="eyebrow">05 / GET IN TOUCH</p>
        <h2>Let&apos;s connect.</h2>
        <p>
          Interested in DevOps, Cloud Engineering, automation, or software
          development? I am open to technical discussions, collaboration,
          and professional opportunities.
        </p>

        <div className="contact-actions">
          <a
            href="mailto:dhouib1995fatma@gmail.com"
            className="primary-button"
          >
            Send me an email
          </a>
          <a
            href="https://github.com/FatmaDhouib"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            Visit GitHub
          </a>
        </div>

        <a
          href="mailto:dhouib1995fatma@gmail.com"
          className="contact-email"
        >
          dhouib1995fatma@gmail.com
        </a>
      </section>

      <footer className="footer">
        <span>Fatma Dhouib © {new Date().getFullYear()}</span>
        <span>Built with Next.js, React &amp; TypeScript</span>
      </footer>
    </main>
  );
}
