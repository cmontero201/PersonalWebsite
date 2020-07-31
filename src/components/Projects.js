import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import covid from '../img/covid-screenshot.png';
import recipe from '../img/recipe-screenshot.png';
import gedcom from '../img/gedcom-screenshot.png';

const Projects = () => {
    return (
        <Container>
            <section id="projects" className="content">
                <div className="projects-container">
                    <h3 className="section-head"> Things I've Worked On </h3>
                </div>
                <div id="project1" className="project-contain">
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <div>
                                <img
                                    id='project1-image'
                                    alt="covid19 project"
                                    src={covid}
                                    width="100%"
                                    height="auto"
                                />
                            </div>

                        </Col>

                        <Col>
                            <div id="p1title" className='project-title'>
                                <h3>
                                    COVID-19 Info Hub
                                </h3>
                            </div>
                            <div>
                                <p> React.js • Node.js • Express.js • MongoDB • Docker Compose • Bootstrap </p>
                            </div>
                            <br/>
                            <div id="p1desc">
                                <p>
                                    A web app that keeps you updated on the latest state case and death counts
                                    along with general information about the disease. 
                                    The app also helps users seeking testing to find and 
                                    set-up appointments at testting locations in their area! (Try searching 
                                    'Hoboken, NJ' in the app for an example)
                                </p>
                            </div>
                      
                            <div className="proj-link-container">
                                <a className="proj-link" href="https://covid-testing-hub.herokuapp.com/">
                                    See it in Action!
                                </a>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div id="project2" className="project-contain">
                    <Row>
                        <Col >
                            <div id="p2title" className='project-title'>
                                <h3> 
                                    RecipeShare 
                                </h3>
                            </div>
                            <div id="p2subtitle">
                                <p> Node.js • Express.js • MongoDB • Handlebars • jQuery </p>
                            </div>
                            <br/>
                            <div id="p2desc">
                                <p>
                                    A simple web app that allows users to upload and share their favorite
                                    recipes with the community! Users can upload text, image, or video posts
                                    to their profile which is added to the community dashboard for all to see.
                                </p>
                            </div>
                            <div className="proj-link-container">
                                <a className="proj-link" href="https://github.com/cmontero201/Recipe-Sharing-WebApp">
                                    Source Code
                                </a>
                            </div>

                        </Col>
                        <Col className="project-image" xs={12} sm={12} md={6} lg={6}>
                            <img
                                id='project2-image'
                                alt="recipe sharing project"
                                src={recipe}
                                width="115%"
                                height="auto"
                            />
                        </Col>

                    </Row>
                </div>

                <div id="project3" className="project-contain">
                    <Row>
                        <Col className="project-image" xs={12} sm={12} md={6} lg={6}>
                            <img
                                id='project3-image'
                                alt="gedcom project"
                                src={gedcom}
                                width="100%"
                                height="auto"
                            />
                        </Col>
                        <Col>
                            <div id="p3title" className='project-title'>
                                <h3> 
                                    GEDCOM Parser 
                                </h3>
                            </div>
                            <div>
                                <p> Python • TravisCI • MongoDB  </p>
                            </div>
                            <br/>
                            <div id="p1desc">
                                <p>
                                    A command line tool used to find discrepencies and anomalies in
                                    any GEDCOM (.ged) geneaology file!
                                </p>
                            </div>
                            <div className="proj-link-container">
                                <a className="proj-link" href="https://github.com/cmontero201/CS555---GEDCOM-Project">
                                    Source Code
                                </a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </Container>
    );
};

export default Projects;