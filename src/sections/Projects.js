import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 3rem 6rem;
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
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    gap: 2.5rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .project-card {
    background: #0d0d0d;
    padding: 1.5rem;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.8);

    /* Content container for layering */
    .content {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }

    /* Glowing border effect */
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 20px;
      padding: 2px;
      background: linear-gradient(180deg, rgba(138, 43, 226, 0.6), rgba(18, 35, 195, 0.6));
      -webkit-mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
      z-index: 1;
    }

    &:hover::before {
      background: linear-gradient(180deg, rgba(37, 12, 176, 0.8), rgba(138, 43, 226, 0.8));
      animation: glowing-border 2s infinite;
    }

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 0 20px rgba(138, 43, 226, 0.8), 0 0 40px rgba(138, 43, 226, 0.6);
    }

    @keyframes glowing-border {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
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
        }
      }
    }

    a {
      color: #8a2be2;
      text-decoration: none;
      margin-top: 1rem;
      font-weight: 600;
      font-size: 1rem;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: #e6e6e6;
        text-shadow: 0 0 0.5rem #8a2be2;
      }
    }
  }

  @media (max-width: 1200px) {
    padding: 2rem 3rem;
  }

  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    h2 {
      font-size: 2.4rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem;

    h2 {
      font-size: 2rem;
    }

    .project-card {
      padding: 1.2rem;
    }
  }
`;

const Projects = () => (
  <ProjectsSection id="projects">
    <h2>Projects</h2>
    <div className="projects-grid">
      <div className="project-card">
        <div className="content">
          <h3>swipebyte</h3>
          <p>Tinder for restaurants! Currently under development.</p>
          <div className="tools">
            <span className="tool">Spring Boot</span>
            <span className="tool">Spring Security</span>
            <span className="tool">Next.js</span>
            <span className="tool">MySQL</span>
            <span className="tool">scikit</span>
            <span className="tool">JavaScript</span>
            <span className="tool">Java</span>
            <span className="tool">Python</span>
            <span className="tool">Flask</span>
            <span className="tool">Hibernate JPA</span>
            <span className="tool">Yelp API</span>
          </div>
          <a href="https://github.com/akashm6/swipebyte" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </div>

      <div className="project-card">
        <div className="content">
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
          <a href="https://github.com/akashm6/riffr" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </div>

      <div className="project-card">
        <div className="content">
          <h3>Automated Highlight Generation</h3>
          <p>Automates the process of highlight clip generation for Twitch streams based on chat activity and sentiment analysis.</p>
          <div className="tools">
            <span className="tool">Python</span>
            <span className="tool">Selenium</span>
            <span className="tool">NLTK</span>
            <span className="tool">NumPy</span>
            <span className="tool">Matplotlib</span>
          </div>
          <a href="https://github.com/akashm6/highlight-generation" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </div>

      <div className="project-card">
        <div className="content">
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
          <a href="https://github.com/akashm6/studio-sift" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </div>

      <div className="project-card">
        <div className="content">
          <h3>Web Scraping Coordinate-Input Weather Report</h3>
          <p>Terminal Java script that takes user-inputted coordinates, and returns detailed weather reports on the location via web-scraped elements of <a href='https://www.wunderground.com/'>wunderground.com</a>.</p>
          <div className="tools">
            <span className="tool">Java</span>
            <span className="tool">HTMLUnit</span>
          </div>
          <a href="https://github.com/akashm6/weather-app" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </div>

      <div className="project-card">
        <div className="content">
          <h3>Custom Heap Allocator</h3>
          <p>Custom best-fit strategy heap allocator complete with freeing with immediate adjacent coalescing.</p>
          <div className="tools">
            <span className="tool">C</span>
            <span className="tool">Posix</span>
          </div>
          <a href="https://github.com/akashm6/heap-allocator" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </div>
    </div>
  </ProjectsSection>
);

export default Projects;
