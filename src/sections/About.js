import React, { useState } from 'react';
import styled from 'styled-components';
import linkedinpfp from '../linkedinpfp.jpeg';

const AboutSection = styled.section`
  min-height: 110vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10rem; 
  color: #e6e6e6;
  background-image: linear-gradient(transparent 98%, rgba(255, 255, 255, 0.05) 2%), 
                    linear-gradient(90deg, transparent 98%, rgba(255, 255, 255, 0.05) 2%);
  background-size: 2rem 2rem; 

  @media (min-width: 768px) {
    margin-top: -2rem; /* Push up the content slightly on larger screens */
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem; 
    min-height: 110vh;
  }

  h2 {
    font-size: 50px;
    margin-bottom: 20px;
    color: #8a2be2;
    @media (max-width: 768px) {
      margin-top: 0rem;
    }
  }

  .about-image {
    width: 40%;
    @media (max-width: 768px) {
      width: 30vh;
    }
    img {
      border-radius: 0.625rem;
      width: 100%;
      height: auto;

      @media (max-width: 768px) {
        margin-top: -1rem;
      }
    }
  }

  .about-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 3.125rem;
    
    @media (max-width: 768px) {
      flex-direction: column; 
    }
  }

  .about-accordion {
    width: 50%;

    @media (max-width: 768px) {
      width: 100%; 
    }
  }
`;

const AccordionItem = styled.div`
  background-color: #111;
  margin-bottom: 10px;
  border: 1px solid rgba(138, 43, 226, 0.3); 
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #8a2be2;
    box-shadow: 0 0 10px rgba(138, 43, 226, 0.5); 
  }

  .question {
    padding: 15px;
    font-size: 18px;
    color: #e6e6e6;
    transition: all 0.3s ease;

    &:hover {
      color: #8a2be2; 
    }
  }

  .answer {
    max-height: ${({ isOpen }) => (isOpen ? '1000px' : '0')};
    overflow: hidden;
    padding: ${({ isOpen }) => (isOpen ? '10px' : '0 15px')};
    font-size: 16px;
    color: #b0b0b0;
    transition: max-height 0.6s ease-in-out, padding 0.6s ease-in-out;

    @media (max-width: 768px) {
      font-size: 14px;
    }
    ul {
      padding-left: 20px;
      list-style: disc;
    }

    li {
      margin-bottom: 8px; 
    }
  }
`;

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AboutSection id="about">
      <h2>about</h2>
      <div className="about-content">
      
        <div className="about-image">
          <img src={linkedinpfp} alt="Your Name" />
        </div>
        <div className="about-accordion">

          <AccordionItem isOpen={openIndex === 1} onClick={() => toggleAccordion(1)}>
            <div className="question">me</div>
            <div className="answer">
              <ul>
                <li>I'm a third-year undergraduate at the University of Wisconsin-Madison majoring in Computer Science & Data Science.</li>
                <li>I'm fascinated by the synergy of software and data, and how we can further push their interactions to craft new solutions.</li>
                <li>Originally from Naperville, IL!</li>
              </ul>
            </div>
          </AccordionItem>
          <AccordionItem isOpen={openIndex === 2} onClick={() => toggleAccordion(2)}>
            <div className="question">my &lt;intellectual&gt; passions</div>
            <div className="answer">
              <ul>
                <li>everything about full-stack development</li>
                <li>cloud architecture and scalability (notably AWS)</li>
                <li>applications of supervised learning</li>
                <li>data visualization tools (tableau, power BI, d3.js)</li>
                <li>trying out different databases, both SQL and NoSQL</li>
              </ul>
            </div>
          </AccordionItem>
          <AccordionItem isOpen={openIndex === 3} onClick={() => toggleAccordion(3)}>
            <div className="question">what i'm currently fixated on</div>
            <div className="answer">
              <ul>
                <li>creating a job recommendation system powered by Spring, Apache Spark (ALS supervised model), and Postgres</li>
                <li>learning new applications of AWS services</li>
                <li>learning Go and C++</li>
                <li>creating small scripts to optimize my google calendar</li>
              </ul>
            </div>
          </AccordionItem>
          <AccordionItem isOpen={openIndex === 4} onClick={() => toggleAccordion(4)}>
            <div className="question">my &lt;other&gt; passions</div>
            <div className="answer">
              <ul>
                <li>music! (i play the piano and drums, both jazz and classically)</li>
                <li>basketball</li>
                <li>volleyball</li>
                <li>video editing and cinematography</li>
              </ul>
            </div>
          </AccordionItem>
        </div>
      </div>
    </AboutSection>
  );
};

export default About;
