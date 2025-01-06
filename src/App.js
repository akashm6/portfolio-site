import React, { useState, useEffect } from 'react';
import Hero from './sections/Hero';
import Navbar from './components/Navbar';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import styled from 'styled-components';


const AppContainer = styled.div`
  background-color: #0d0d0d; 
  width: 100%;
  min-height: 100vh; 
  display: flex;
  flex-direction: column;

  /* Gradient overlay */
  background-image: 
    linear-gradient(145deg, rgba(31, 10, 165, 0.8), rgba(77, 7, 158, 0.8)), 
    linear-gradient(transparent 98%, rgba(255, 255, 255, 0.05) 2%), 
    linear-gradient(90deg, transparent 98%, rgba(255, 255, 255, 0.05) 2%);
  background-size: cover, 2rem 2rem, 2rem 2rem;
  background-blend-mode: overlay, normal, normal;
`;


function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true); 
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    
    <AppContainer>
      <Navbar isLoaded={isLoaded} />
      <Hero isLoaded={isLoaded} />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </AppContainer>
  );
}

export default App;
