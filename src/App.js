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
  background-image: linear-gradient(transparent 98%, rgba(255, 255, 255, 0.05) 2%), 
                    linear-gradient(90deg, transparent 98%, rgba(255, 255, 255, 0.05) 2%);
  background-size: 2rem 2rem; 
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
