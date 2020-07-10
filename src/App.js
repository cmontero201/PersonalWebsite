import React from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NotFound from "./components/NotFound"

import './App.css';

const Page = () => {
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
          id="footer2" className="styled-link">
          <div> Design Inspired by bchiang7 </div>
        </a>
      </div>

    </Container>
  )
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Page} />
        <Route path='*' component={NotFound} status={404} />
      </Switch>
    </Router>
  );
}

export default App;
