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
          <div> Designed &amp; Built by Christian Montero </div>
        </a>
      </div>

    </Container>
  );
}

export default App;
