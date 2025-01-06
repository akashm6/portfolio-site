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

  @media (min-width: 768px) {
    margin-top: -2rem; 
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
    width: 35%;
    max-height: 500px; 
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 20px;
      padding: 2px;
      background: linear-gradient(180deg, rgba(138, 43, 226, 0.6), rgba(18, 35, 195, 0.6));
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
      z-index: 1;
    }

    &:hover::before {
      background: linear-gradient(180deg, rgba(37, 12, 176, 0.8), rgba(138, 43, 226, 0.8));
      animation: glowing-border 2s infinite;
    }

    @keyframes glowing-border {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    img {
      border-radius: 20px;
      width: 100%;
      height: 100%;
      object-fit: cover; 
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
  position: relative;
  margin-bottom: 10px;
  border-radius: 20px;
  cursor: pointer;
  background: #111;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(180deg, rgba(138, 43, 226, 0.4), rgba(18, 35, 195, 0.4));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    z-index: 1;
  }

  &:hover::before {
    background: linear-gradient(180deg, rgba(37, 12, 176, 0.7), rgba(138, 43, 226, 0.7));
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 0px 12px rgba(138, 43, 226, 0.5);
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
              </ul>
            </div>
          </AccordionItem>
          <AccordionItem isOpen={openIndex === 3} onClick={() => toggleAccordion(3)}>
            <div className="question">what i'm currently fixated on</div>
            <div className="answer">
              <ul>
                <li>Current developing SwipeByte, an AI-powered Tinder for restaurants! Powered by Spring Boot + Spring Security, Next.js, MySQL, and scikit.</li>
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
