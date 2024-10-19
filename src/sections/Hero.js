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
  z-index: 10;

  svg {
    display: block;
    font: 10.5em 'Montserrat';
    width: 960px;
    height: 300px;
  }

  .text-copy {
    fill: none;
    stroke: white;
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
  background-image: linear-gradient(transparent 98%, rgba(255, 255, 255, 0.05) 2%), 
                  linear-gradient(90deg, transparent 98%, rgba(255, 255, 255, 0.05) 2%);
  background-size: 30px 30px;

  color: #e6e6e6;
  padding: 0 150px;
  position: relative;
  opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0)};
  transition: opacity 1s ease-in;

  h2 {
    font-size: clamp(40px, 8vw, 80px);
    margin-bottom: 10px;
    font-weight: 600;
    color: #fff;
    display: inline-block;
    opacity: 0; /* Start with invisible text */
    animation: ${({ isLoaded }) => (isLoaded ? textSlideIn : 'none')} 1s ease-out forwards; 
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
    padding: 10px 20px;
    animation: ${fadeIn} 1.5s ease-in;
    border-radius: 5px;
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
  }
`;

const SocialBox = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
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
`;

const Hero = ({ isLoaded }) => {
  return (
    <>
      <LoadingScreen isLoaded={isLoaded}>
        <svg viewBox="0 0 960 300">
          <symbol id="s-text">
            <text text-anchor="middle" x="50%" y="80%">A</text>
            <text text-anchor="middle" x="52%" y="80%">A</text>
          </symbol>
          <g className="g-ants">
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
          </g>
        </svg>
      </LoadingScreen>

      <HeroSection id='home' isLoaded={isLoaded}>
        <h2>hi! i'm akash</h2>
        <Link to="contact" smooth duration={500}>
          <button className="contact-btn">get in touch!</button>
        </Link>

        <SocialBox>
          <a href="https://www.linkedin.com/in/amohan7/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/akashm6" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://ivory-tamma-93.tiiny.site" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaFileLines />
          </a>
        </SocialBox>
      </HeroSection>
    </>
  );
};

export default Hero;
