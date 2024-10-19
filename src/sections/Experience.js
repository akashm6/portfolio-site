import React from 'react';
import styled from 'styled-components';
import yellow_cat_logo from '../622921553f7fb6bb98b2cdaba1eae58d.jpg';
import skills_logo from '../skills_for_chicagolands_future_logo.jpeg';

const ExperienceSection = styled.section`
  padding: 100px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #0d0d0d;
  color: #e6e6e6;
  scroll-margin-top: 100px;
  background-image: linear-gradient(transparent 98%, rgba(255, 255, 255, 0.05) 2%), 
                  linear-gradient(90deg, transparent 98%, rgba(255, 255, 255, 0.05) 2%);
  background-size: 30px 30px; 


  h2 {
    font-size: 45px;
    margin-bottom: 40px;
    color: #8a2be2;
    text-align: center;
    letter-spacing: 1px;
  }

  .experience-card {
    position: relative;
    background-color: #1a1a1a;
    padding: 30px;
    border-radius: 12px;
    margin-bottom: 30px;
    transition: all 0.3s ease-in-out;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid #2a2a2a;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateY(-3px);
      border-color: #8a2be2;
      box-shadow: 0 0 25px rgba(138, 43, 226, 0.4);
    }

    .logo {
      flex-shrink: 0;
      width: 60px;
      height: 60px;
      margin-right: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #222;

      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    }

    .content {
      flex: 1;
      display: flex;
      flex-direction: column;

      .company {
        font-size: 22px;
        font-weight: bold;
        color: #8a2be2;
        margin-bottom: 10px;
      }

      h3 {
        font-size: 16px;
        margin-bottom: 12px;
        color: #e6e6e6;
        font-weight: 500;
      }

      ul {
        margin-bottom: 15px;
        padding-left: 20px;
        list-style-type: disc;

        li {
          margin-bottom: 6px;
          line-height: 1.5;
          font-size: 15px;
        }
      }
    }

    .timeframe-location {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      font-size: 13px;
      color: #b0b0b0;

      .timeframe {
        margin-bottom: 5px;
      }
    }

    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 10px;

      .skill {
        background-color: #2a2a2a;
        color: #e6e6e6;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 12px;
        transition: all 0.3s ease-in-out;
        text-transform: uppercase;
        letter-spacing: 0.4px;

        &:hover {
          box-shadow: 0 0 10px rgba(138, 43, 226, 0.6);
          border-color: #8a2be2;
        }
      }
    }
  }
`;

const Experience = () => (
  <ExperienceSection id="experience">
    <h2>Experience</h2>
    <div className="experience-card">
      <div className="logo">
        <img src={yellow_cat_logo} alt="Caterpillar Logo" />
      </div>
      <div className="content">
        <div className="company">Caterpillar</div>
        <h3>Software/Data Engineer Intern</h3>
        <ul>
          <li>Served as a backend developer for a prototyped CAT full-stack rental app.</li>
          <ul>
            <li>Utilized React.js, Next.js, and Flask to build key components.</li>
            <li>Implemented user email functionality and integrated Google Maps API for real-time telematic information.</li>
          </ul>
          <li>Optimized automated Alteryx daily-refresh workflows, improving runtimes of dashboard updates by ~5%.</li>
          <li>Standardized daily-use client Tableau dashboards, maintaining crucial data-blending from Snowflake data sources.</li>
          <li>Currently working part-time remotely.</li>
        </ul>

        <div className="skills">
          <span className="skill">React.js</span>
          <span className="skill">Next.js</span>
          <span className="skill">Flask</span>
          <span className="skill">Python</span>
          <span className="skill">Tableau</span>
          <span className="skill">Alteryx</span>
          <span className="skill">SQL</span>
          <span className="skill">Snowflake</span>
        </div>
      </div>
      <div className="timeframe-location">
        <div className="timeframe">May 2024 - Present</div>
        <div className="location">Peoria, IL</div>
      </div>
    </div>
    <div className="experience-card">
      <div className="logo">
        <img src={skills_logo} alt="Skills for Chicagoland's Future Logo" />
      </div>
      <div className="content">
        <div className="company">Skills for Chicagoland's Future</div>
        <h3>Systems & Data Insights Intern</h3>
        <ul>
          <li>Created a Python-based Excel script that uses 3 APIs to take client address data, convert them to coordinates, and return commute distances with ~95% accuracy.</li>
          <ul>
            <li>Used the script to identify trends on Chicago unemployment retention rates.</li>
          </ul>
          <li>Facilitated client data tracking by creating backend scripts utilizing Yello and Tableau for data collection.</li>
          <li>Conducted research on unemployment and labor market trends in Chicago and greater cities of Illinois.</li>
        </ul>
        <div className="skills">
          <span className="skill">Python</span>
          <span className="skill">PyXLL</span>
          <span className="skill">Nominatim</span>
          <span className="skill">Tableau</span>
          <span className="skill">Yello</span>
        </div>
      </div>
      <div className="timeframe-location">
        <div className="timeframe">May 2023 - August 2023</div>
        <div className="location">Chicago, IL</div>
      </div>
    </div>

  </ExperienceSection>
);

export default Experience;
