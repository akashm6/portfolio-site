import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; 
import { FaFileLines } from 'react-icons/fa6';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const strokeOffset = keyframes`
  100% { stroke-dashoffset: -35%; }
`;

const textSlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const LoadingScreen = styled.div`
  display: ${({ isLoaded }) => (isLoaded ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0d0d0d;
  background-image: 
    linear-gradient(145deg, rgba(31, 10, 165, 0.8), rgba(77, 7, 158, 0.8)), /* Deep blue and purple gradient */
    linear-gradient(transparent 98%, rgba(255, 255, 255, 0.05) 2%), /* Subtle grid pattern */
    linear-gradient(90deg, transparent 98%, rgba(255, 255, 255, 0.05) 2%);
  background-size: cover, 2rem 2rem, 2rem 2rem;
  background-blend-mode: overlay, normal, normal;
  z-index: 10;

  svg {
    display: block;
    font: 10.5em 'Montserrat';
    width: 960px;
    height: 300px;
  }

  .text-copy {
    fill: none;
    stroke-dasharray: 6% 29%;
    stroke-width: 5px;
    stroke-dashoffset: 0%;
    animation: ${strokeOffset} 5.5s infinite linear;
  }

  .text-copy:nth-child(1) {
    stroke: #4d2c91;
    animation-delay: -1s;
  }

  .text-copy:nth-child(2) {
    stroke: #6a3bbd;
    animation-delay: -2s;
  }

  .text-copy:nth-child(3) {
    stroke: #7f4acc;
    animation-delay: -3s;
  }

  .text-copy:nth-child(4) {
    stroke: #9159d1;
    animation-delay: -4s;
  }

  .text-copy:nth-child(5) {
    stroke: #b676f0;
    animation-delay: -5s;
  }
`;

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  color: #e6e6e6;
  padding: 0 10%;
  position: relative;
  opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0)};
  transition: opacity 1s ease-in;

  @media (max-width: 768px) {
    padding: 0 5%;
    align-items: center;
    text-align: center;
  }

  h2 {
    font-size: clamp(40px, 8vw, 80px);
    margin-bottom: 10px;
    font-weight: 600;
    color: #fff;
    display: inline-block;
    animation: ${({ isLoaded }) => (isLoaded ? textSlideIn : 'none')} 1s ease-out forwards;

    @media (max-width: 768px) {
      font-size: clamp(30px, 7vw, 60px);
    }
  }

  .contact-btn {
    background-color: transparent;
    border: 1px solid #8a2be2;
    padding: 12px 25px;
    color: #8a2be2;
    cursor: pointer;
    border-radius: 4px;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-decoration: none;
    font-size: 16px;
    transition: all 0.3s ease;
    box-shadow: 0 0 5px rgba(138, 43, 226, 0.2);

    &:hover {
      background-color: #8a2be2;
      color: #0d0d0d;
      box-shadow: 0 0 10px 3px rgba(138, 43, 226, 0.5);
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
    }
  }
`;

const SocialBox = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 25px;
  align-items: center;

  a {
    color: #e6e6e6;
    font-size: 32px;
    transition: transform 0.3s ease, color 0.3s ease;
    &:hover {
      color: #8a2be2;
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    gap: 15px;

    a {
      font-size: 28px;
    }
  }
`;


const Hero = ({ isLoaded }) => {
  return (
    <>
      <LoadingScreen isLoaded={isLoaded}>
        <svg viewBox="0 0 960 300">
          <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="50%" dy=".35em">A</text>
          </symbol>
          <g>
            <use className="text-copy" href="#s-text" />
            <use className="text-copy" href="#s-text" />
            <use className="text-copy" href="#s-text" />
            <use className="text-copy" href="#s-text" />
            <use className="text-copy" href="#s-text" />
          </g>
        </svg>
      </LoadingScreen>

      <HeroSection id="home" isLoaded={isLoaded}>
        <h2>hi! i'm akash</h2>
        <Link to="contact" smooth duration={500}>
          <button className="contact-btn">get in touch!</button>
        </Link>

        <SocialBox>
          <a href="https://www.linkedin.com/in/amohan7/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/akashm6" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://violet-ruthe-91.tiiny.site" target="_blank" rel="noopener noreferrer">
            <FaFileLines />
          </a>
        </SocialBox>
      </HeroSection>
    </>
  );
};

export default Hero;
