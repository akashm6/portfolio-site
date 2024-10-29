import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope } from 'react-icons/fa6'; 

const ContactSection = styled.section`
  height: 100vh;
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #0d0d0d;
  color: #e6e6e6;
  background-image: linear-gradient(transparent 98%, rgba(255, 255, 255, 0.05) 2%), 
                    linear-gradient(90deg, transparent 98%, rgba(255, 255, 255, 0.05) 2%);
  background-size: 2rem 2rem;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem;
    }
  }

  .contact-left {
    flex: 1;
    h2 {
      font-size: 3rem;
      margin-bottom: 1.25rem;
      color: #8a2be2;
      text-align: left;
    }

    p {
      font-size: 1.125rem;
      color: #b0b0b0;
      margin-bottom: 1.25rem;
      text-align: left;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 0.625rem;
      margin-top: 1.25rem;

      .info-item {
        display: flex;
        align-items: center;
        font-size: 1.125rem;
        color: #e6e6e6;

        svg {
          margin-right: 0.625rem;
          color: #8a2be2;
        }

        a {
          color: #e6e6e6;
          text-decoration: none;
          transition: color 0.3s ease-in-out;

          &:hover {
            color: #8a2be2;
          }
        }
      }
    }
  }

  .contact-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    input,
    textarea {
      font-family: monospace;
      width: 100%;
      padding: 1rem;
      background-color: #1e1e1e;
      border: 1px solid #8a2be2;
      border-radius: 5px;
      color: #e6e6e6;
      font-size: 1rem;
      outline: none;

      &::placeholder {
        color: #b0b0b0;
      }
    }

    textarea {
      height: 9.375rem;
    }

    .contact-btn {
      background-color: transparent;
      padding: 0.625rem 1.25rem;
      border: 1px solid rgba(138, 43, 226, 0.3);
      border-radius: 5px;
      color: #ccd6f6;
      font-size: 1rem;
      font-family: monospace;
      transition: all 0.3s ease;
      box-shadow: 0 0 5px rgba(138, 43, 226, 0.2);

      &:hover {
        background-color: #8a2be2;
        color: #0d0d0d;
      }
    }
  }
`;

const Contact = () => {
  const [emailData, setEmailData] = useState({
    senderEmail: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setEmailData({
      ...emailData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const mailtoLink = `mailto:akmohan0303@gmail.com?subject=${emailData.subject}&body=${emailData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <ContactSection id="contact">
      <div className="content">
        <div className="contact-left">
          <h2>Contact Me</h2>
          <p>I'm always open to discussing new opportunities <br />or collaborations. Feel free to contact me!</p>
          <div className="contact-info">
            <div className="info-item">
              <FaEnvelope />
              <a href="mailto:akmohan0303@gmail.com">akmohan0303@gmail.com</a>
            </div>
            <div className="info-item">
              <FaPhone />
              <span>(630) 605-1391</span>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={emailData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={emailData.message}
            onChange={handleChange}
          />
          <button className="contact-btn" onClick={handleSubmit}>
            Send Message
          </button>
        </div>
      </div>
    </ContactSection>
  );
};

export default Contact;
