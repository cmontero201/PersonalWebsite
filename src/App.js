import React from 'react';
import Container from 'react-bootstrap/Container';

import Navigation from './components/Navigation';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <Container className="App" fluid>

      <main>
        <Navigation />
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      

      <div className="page-footer">
        <a href="https://github.com/cmontero201/" target="_blank" rel="nofollow noopener noreferrer"
          id="footer" className="styled-link">
          <div> Built by Christian Montero </div>
        </a>
        <a href="https://github.com/bchiang7/v4" target="_blank" rel="nofollow noopener noreferrer"
          id="footer" className="styled-link">
          <div> Design Inspired by bchiang7 </div>
        </a>
    
    <div> Inspired by &amp; 
      </div>

    </Container>
  );
}

export default App;
