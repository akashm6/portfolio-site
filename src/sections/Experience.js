import React from 'react';
import styled from 'styled-components';
import ExperienceCard from '../components/ExperienceCard';
import yellow_cat_logo from '../622921553f7fb6bb98b2cdaba1eae58d.jpg';
import skills_logo from '../skills_for_chicagolands_future_logo.jpeg';

const ExperienceSection = styled.section`
  padding: 6.25rem 6.25rem; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #e6e6e6;
  scroll-margin-top: 6.25rem;

  h2 {
    font-size: 2.8125rem; 
    margin-bottom: 2.5rem; 
    color: #8a2be2;
    text-align: center;
    letter-spacing: 0.0625rem; 
  }

  .experience-card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }

  .experience-card {
    width: 500px;
    height: 300px;
    background-color: #1a1a1a;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(138, 43, 226, 0.4);
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: translateY(-0.5rem);
      box-shadow: 0 0 2rem rgba(138, 43, 226, 0.6);
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem; 

    h2 {
      font-size: 2rem; 
      margin-top: 2rem;
    }

    .experience-card-container {
      flex-direction: column;
      align-items: center;
    }

    .experience-card {
      width: 100%;
      height: 200px;
    }
  }
`;

const Experience = () => (
  <ExperienceSection id="experience">
    <h2>Experience</h2>
    <div className="experience-card-container">
      <ExperienceCard
        logo={yellow_cat_logo}
        company="Caterpillar"
        position="Software/Data Engineer Intern"
        timeframe="May 2024 - Dec 2024"
        location="Peoria, IL"
        skills={['React.js', 'Next.js', 'Flask', 'Python', 'Tableau', 'Alteryx', 'SQL', 'AWS', 'Snowflake', 'TabPy']}
        details={[
          'Constructed a full-stack rental app prototype.',
          'Utilized React.js, Next.js, and Flask to build key components.',
          'Integrated Google Maps API for real-time telematics.',
          'Built email notifications supporting up to 1,000 simultaneous users using AWS SES.',
          'Optimized automated Alteryx daily-refresh workflows, improving runtimes of dashboard updates by ~5%.',
          'Standardized client Tableau dashboards for 800+ daily users, leveraging TabPy for automation scripting.',
        ]}
      />
      <ExperienceCard
        logo={skills_logo}
        company="Skills for Chicagoland's Future"
        position="Systems & Data Insights Intern"
        timeframe="May 2023 - August 2023"
        location="Chicago, IL"
        skills={['Python', 'PyXLL', 'Nominatim', 'Tableau', 'Yello']}
        details={[
          'Created a Python-based Excel script that utilizes PyXLL and Nominatim to transfer client address data into coordinates and return commute distances with ~95% accuracy.',
          'Used the script to identify trends on Chicago unemployment retention rates.',
          'Facilitated client data tracking by creating backend scripts utilizing Yello and Tableau for data collection.',
          'Conducted research on unemployment and labor market trends in Chicago and greater cities of Illinois.',
        ]}
      />
    </div>
  </ExperienceSection>
);

export default Experience;
