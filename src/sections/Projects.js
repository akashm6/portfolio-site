import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 3rem 6rem; /* Use rem for padding */
  background-color: #0d0d0d;
  background-image: linear-gradient(transparent 98%, rgba(255, 255, 255, 0.05) 2%), 
                  linear-gradient(90deg, transparent 98%, rgba(255, 255, 255, 0.05) 2%);
  background-size: 2rem 2rem; 
  color: #e6e6e6;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 2.8rem;
    margin-bottom: 2.5rem;
    color: #8a2be2;
    text-align: center;
    letter-spacing: 0.1rem;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr)); /* Responsive grid */
    gap: 2.5rem;
    max-width: 1200px; /* Set max width for better control */
    margin: 0 auto; /* Center the grid */
  }

  .project-card {
    background-color: #111;
    padding: 1.25rem;
    border-radius: 0.625rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 18.75rem;
    position: relative;

    &:hover {
      transform: translateY(-0.3125rem);
      border-color: #8a2be2;
      box-shadow: 0 0 1.25rem rgba(138, 43, 226, 0.6);
    }

    h3 {
      font-size: 1.5rem;
      color: #e6e6e6;
      margin-bottom: 0.625rem;
    }

    p {
      color: #b0b0b0;
      margin-bottom: 1rem;
    }

    .tools {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;

      .tool {
        background-color: #1e1e1e;
        color: #e6e6e6;
        padding: 0.25rem 0.75rem;
        border-radius: 1.25rem;
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.03rem;
        transition: all 0.3s ease-in-out;

        &:hover {
          box-shadow: 0 0 0.625rem rgba(138, 43, 226, 0.6);
          border-color: #8a2be2;
        }
      }
    }

    a {
      color: #8a2be2;
      text-decoration: none;
      margin-top: auto;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: #e6e6e6;
        text-shadow: 0 0 0.5rem #8a2be2;
      }
    }
  }

  /* Media queries to adjust layout on smaller screens */
  @media (max-width: 1200px) {
    padding: 3rem; /* Reduce padding on smaller screens */
  }

  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: 1fr; /* One column layout on smaller screens */
      padding: 0;
    }

    h2 {
      font-size: 2.4rem; /* Adjust heading size for smaller screens */
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    
    h2 {
      font-size: 2rem; /* Further adjust heading size */
    }

    .project-card {
      padding: 1rem; /* Smaller padding on project cards */
    }
  }
`;

const Projects = () => (
  <ProjectsSection id="projects">
    <h2>Projects</h2>
    <div className="projects-grid">
      <div className="project-card">
        <h3>riffr</h3>
        <p>Full-stack web app that takes a user's top Spotify artists and centralizes upcoming concert information.</p>
        <div className="tools">
          <span className="tool">Python</span>
          <span className="tool">Postgres</span>
          <span className="tool">React.js</span>
          <span className="tool">Flask</span>
          <span className="tool">JavaScript</span>
          <span className="tool">Google Maps API</span>
          <span className="tool">SpotiPy</span>
        </div>
        <a href="https://github.com/akashm6/riffr" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>

      <div className="project-card">
        <h3>Automated Highlight Generation</h3>
        <p>Automates the process of highlight clip generation for Twitch streams based on chat activity and sentiment analysis.</p>
        <div className="tools">
          <span className="tool">Python</span>
          <span className="tool">Selenium</span>
          <span className="tool">NLTK</span>
          <span className="tool">NumPy</span>
          <span className="tool">Matplotlib</span>
        </div>
        <a href="https://github.com/akashm6/highlight-generation" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>

      <div className="project-card">
        <h3>StudioSift</h3>
        <p>Full-stack web app that details information on popular video game studios, including dynamic and user-interactive searching and up-to-date news.</p>
        <div className="tools">
          <span className="tool">MongoDB</span>
          <span className="tool">JavaScript</span>
          <span className="tool">Python</span>
          <span className="tool">Flask</span>
          <span className="tool">React.js</span>
          <span className="tool">News API</span>
          <span className="tool">RAWG API</span>
        </div>
        <a href="https://github.com/akashm6/studio-sift" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>

      <div className="project-card">
        <h3>Web Scraping Coordinate-Input Weather Report</h3>
        <p>Terminal Java script that takes user-inputted coordinates, and returns detailed weather reports on the location via web-scraped elements of <a href = 'https://www.wunderground.com/'>wunderground.com.</a></p>
        <div className="tools">
          <span className="tool">Java</span>
          <span className="tool">HTMLUnit</span>
        </div>
        <a href="https://github.com/akashm6/weather-app" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>

      <div className="project-card">
         <h3>Custom Heap Allocator</h3>
        <p>Custom best-fit strategy heap allocator complete with freeing with immediate adjacent coalescing.</p>
        <div className="tools">
          <span className="tool">C</span>
          <span className="tool">Posix</span>
        </div>
        <a href="https://github.com/akashm6/heap-allocator" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    </div>
  </ProjectsSection>
);

export default Projects;
