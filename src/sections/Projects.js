import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 50px 100px;
  background-color: #0d0d0d;
  background-image: linear-gradient(transparent 98%, rgba(255, 255, 255, 0.05) 2%), 
                  linear-gradient(90deg, transparent 98%, rgba(255, 255, 255, 0.05) 2%);
  background-size: 30px 30px; /* Make the grid smaller */

  color: #e6e6e6;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 45px;
    margin-bottom: 40px;
    color: #8a2be2;
    text-align: center;
    letter-spacing: 1px;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px; 
  }

  .project-card {
    background-color: #111;
    padding: 20px;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 300px; 
    position: relative;

    &:hover {
      transform: translateY(-5px);
      border-color: #8a2be2;
      box-shadow: 0 0 20px rgba(138, 43, 226, 0.6);
    }

    h3 {
      font-size: 24px;
      color: #e6e6e6;
      margin-bottom: 10px;
    }

    p {
      color: #b0b0b0;
      margin-bottom: 15px;
    }

    .tools {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 15px;

      .tool {
        background-color: #1e1e1e;
        color: #e6e6e6;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        transition: all 0.3s ease-in-out;

        &:hover {
          box-shadow: 0 0 10px rgba(138, 43, 226, 0.6);
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
        text-shadow: 0 0 8px #8a2be2;
      }
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
          <span className="tool">React.js</span>
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
