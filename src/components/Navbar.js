import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
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

const NavItems = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
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
  }
`;

const Navbar = ({ isLoaded }) => {
  return (
    <NavBar isLoaded={isLoaded}>
      <NavItems>
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
      </NavItems>
    </NavBar>
  );
};

export default Navbar;
