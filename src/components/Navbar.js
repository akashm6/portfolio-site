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
  right: 5px;
  display: flex;
  justify-content: flex-end;
  background-color: #0d0d0d;
  padding: 20px;
  z-index: 10;
  opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0)};
  transition: opacity 1s ease-in;
`;

const MenuIcon = styled.div`
  font-size: 24px;
  color: #ccd6f6;
  cursor: pointer;
  position: fixed;
  left: 15px;
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
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')}; 
    width: 220px;
    padding: 20px;
    background: rgba(13, 13, 13, 0.95);
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(5px);
    transition: left 0.4s cubic-bezier(0.77,0.2,0.05,1.0);

    & > div {
      animation: ${({ isOpen }) => (isOpen ? slideIn : 'none')} 0.5s ease forwards;
      opacity: 0;
    }
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

const CloseButton = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: inline-block; /* Ensure it doesn't span the full width */
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;
    border: 1px solid rgba(138, 43, 226, 0.3); 
    border-radius: 5px;
    color: #ccd6f6; 
    background: none;
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


const Navbar = ({ isLoaded }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavBar isLoaded={isLoaded}>
      <MenuIcon onClick={() => setOpen(!isOpen)}>
        <FaBars />
      </MenuIcon>
      <MenuItems isOpen={isOpen}>
        <NavItem>
          <Link to="home" smooth duration={500}>home</Link>
        </NavItem>
        <NavItem>
          <Link to="about" smooth duration={500}>about</Link>
        </NavItem>
        <NavItem>
          <Link to="experience" smooth duration={500}>experience</Link>
        </NavItem>
        <NavItem>
          <Link to="projects" smooth duration={500}>projects</Link>
        </NavItem>
        <NavItem>
          <Link to="contact" smooth duration={500}>contact</Link>
        </NavItem>
        <NavItem>
        <CloseButton onClick={() => setOpen(!isOpen)}>Close</CloseButton>
        </NavItem>
      </MenuItems>
    </NavBar>
  );
};

export default Navbar;
