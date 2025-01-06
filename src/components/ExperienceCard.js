import React, { useState } from 'react';
import styled from 'styled-components';

const ExperienceCard = ({ company, position, timeframe, location, skills, details }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
    document.body.style.overflow = isPopupVisible ? 'auto' : 'hidden'; 
  };

  return (
    <StyledWrapper>
      <div className="card">
        <div className="front-content">
          <h2 className="role">{position}</h2>
          <h3 className="company">{company}</h3>
          <button className="expand-button" onClick={togglePopup}>Expand</button>
        </div>
      </div>

      {isPopupVisible && (
        <Popup>
          <div className="popup-overlay" onClick={togglePopup}></div>
          <div className="popup-content">
            <h2>{company}</h2>
            <h3>{position}</h3>
            <p><strong>Timeframe:</strong> {timeframe}</p>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Skills:</strong> {skills.join(', ')}</p>
            <ul>
              {details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <button className="close-button" onClick={togglePopup}>Close</button>
          </div>
        </Popup>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 320px; 
    height: 420px; 
    background: #0d0d0d;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 20px;
    padding: 1.5rem;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.8);

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

    @keyframes glowing-border {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0px 0px 20px rgba(138, 43, 226, 0.8), 0px 0px 40px rgba(138, 43, 226, 0.6);
    }

    .front-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      z-index: 2;
      height: 100%;
    }

    .role {
      font-size: 1.6em; 
      margin: 0;
      color: #8a2be2;
    }

    .company {
      font-size: 1.1em;
      margin: 0.5rem 0;
      color: white;
    }

    .expand-button {
      position: absolute;
      bottom: 50px; 
      background-color: transparent;
      border: 1px solid #8a2be2;
      padding: 12px 25px;
      color: #8a2be2;
      cursor: pointer;
      border-radius: 5px;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0.05em;
      text-decoration: none;
      transition: all 0.3s ease;
      box-shadow: 0 0 5px rgba(138, 43, 226, 0.2);
      transform: translateX(-50%);
      left: 50%;

      &:hover {
        background-color: #8a2be2;
        color: #0d0d0d;
        box-shadow: 0 0 10px 3px rgba(138, 43, 226, 0.5);
        transform: scale(1.05) translateX(-50%);
      }
    }
  }

  @media (max-width: 768px) {
    .card {
      width: 90%; 
      height: 380px; 
    }

    .role {
      font-size: 1.4em; 
    }

    .company {
      font-size: 1em; 
    }

    .expand-button {
      bottom: 30px; 
    }
  }
`;

const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(8px); 
  background: rgba(0, 0, 0, 0.7); 
  z-index: 1000;

  .popup-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent; 
    z-index: 1;
  }

  .popup-content {
    position: relative;
    background: #0d0d0d; 
    border-radius: 20px;
    padding: 2rem;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 0 15px rgba(138, 43, 226, 0.8), 0 0 25px rgba(138, 43, 226, 0.6);
    z-index: 2;
    overflow-y: auto;

    /* Glowing border */
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
      z-index: -1;
    }

    h2 {
      color: white;
      font-weight: 700;
      font-size: 2rem;
      margin-bottom: 1rem;
      text-align: center;
    }

    h3 {
      color: #8a2be2;
      font-weight: 700;
      margin-bottom: 1rem;
      text-align: center;
    }

    p {
      color: #b0b0b0;
      margin-bottom: 1rem;
      font-size: 1rem;
    }

    ul {
      margin: 1rem 0;
      padding-left: 1.5rem;
      list-style-type: disc; 

      li {
        margin-bottom: 0.5rem;
        color: #e6e6e6;
        font-size: 0.9rem;
      }
    }

    .close-button {
      margin-top: 1.5rem;
      background-color: transparent;
      border: 1px solid #8a2be2;
      padding: 10px 20px;
      color: #8a2be2;
      font-size: 16px;
      font-weight: 600;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      display: block;
      margin-left: auto;
      margin-right: auto;

      &:hover {
        background-color: #8a2be2;
        color: #0d0d0d;
        box-shadow: 0 0 10px rgba(138, 43, 226, 0.8), 0 0 20px rgba(138, 43, 226, 0.6);
      }
    }
  }

  @media (max-width: 768px) {
    .popup-content {
      padding: 1.5rem;
    }

    h2, h3 {
      font-size: 1.5rem;
    }

    p, ul li {
      font-size: 0.9rem;
    }

    .close-button {
      font-size: 14px;
      padding: 8px 16px;
    }
  }
`;

export default ExperienceCard;
