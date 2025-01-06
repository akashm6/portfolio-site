import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';

const slideIn = keyframes`
  0% {
    transform: translateX(-20px) scale(0.95);
    opacity: 0;
  }
  100% {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
`;

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(13, 13, 13, 0.95); 
  padding: 15px 40px;
  border-bottom: 2px solid rgba(138, 43, 226, 0.3); 
  box-shadow: 0 4px 10px rgba(138, 43, 226, 0.2);
  z-index: 10;
  opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0)};
  transition: opacity 1s ease-in, background-color 0.3s ease;

  @media (max-width: 768px) {
    padding: 15px 20px;
    border-bottom: 1px solid rgba(138, 43, 226, 0.3); 
  }
`;

const MenuIcon = styled.div`
  font-size: 24px;
  color: #ccd6f6;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuItems = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: fixed;
    top: 65px;
    left: 0;
    width: 100%;
    padding: 20px;
    background: rgba(13, 13, 13, 0.98);
    border-top: 2px solid rgba(138, 43, 226, 0.3); 
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(8px);
    transition: transform 0.4s cubic-bezier(0.77, 0.2, 0.05, 1.0);
  }
`;

const NavItem = styled.div`
  a {
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    border: 1px solid rgba(138, 43, 226, 0.3); 
    border-radius: 5px;
    color: #ccd6f6;
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
      padding: 8px 16px;
      font-size: 14px;
    }
  }
`;

const Navbar = ({ isLoaded }) => {
  const [isOpen, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false); 
  };

  return (
    <NavBar isLoaded={isLoaded}>
      <MenuIcon onClick={() => setOpen(!isOpen)}>
        <FaBars />
      </MenuIcon>
      <MenuItems isOpen={isOpen}>
        <NavItem>
          <Link to="home" smooth duration={500} onClick={handleLinkClick}>
            home
          </Link>
        </NavItem>
        <NavItem>
          <Link to="about" smooth duration={500} onClick={handleLinkClick}>
            about
          </Link>
        </NavItem>
        <NavItem>
          <Link to="experience" smooth duration={500} onClick={handleLinkClick}>
            experience
          </Link>
        </NavItem>
        <NavItem>
          <Link to="projects" smooth duration={500} onClick={handleLinkClick}>
            projects
          </Link>
        </NavItem>
        <NavItem>
          <Link to="contact" smooth duration={500} onClick={handleLinkClick}>
            contact
          </Link>
        </NavItem>
      </MenuItems>
    </NavBar>
  );
};

export default Navbar;
