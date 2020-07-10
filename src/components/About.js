import React from 'react';
import { Container, Row, Col } from 'react-bootstrap/';

import self from '../img/self.png'
import resume from '../resume/resume2020.pdf'

const About = () => {
    return (
        <Container>
            <section id='about' className="content">
                <div className="about-container">
                    <h3 className="section-head"> About Me </h3>
                    <Row>
                        <Col xs={12} sm={12} md={8} lg={8}>
                            <p>
                                I'm a hard-working, self-motivated, and enthusiastic professional with experience in
                                full-stack
                                software engineering using the MERN stack (MongoDB, Express, React, Node.js).
                            </p>
                            <p>
                                Since graduating with a Bachelor of Science in Biomedical Engineering from <u><a className="link"
                                    href="https://www.bu.edu/eng/about/" target="_blank" rel="nofollow noopener noreferrer">
                                    Boston University, </a></u>
                            I have been working as a Biomedical Equipment Specialist at <u><a className="link" href="https://www.mskcc.org/"
                                    target="_blank" rel="nofollow noopener noreferrer"> Memorial Sloan Kettering, </a></u>
                            where I maintained, troubleshot, and repaired a wide range of medical devices used in the
                            operating
                            room. While working full-time, I attended <u><a className="link" href="https://www.stevens.edu/" target="_blank"
                                    rel="nofollow noopener noreferrer"> Stevens Institute of Technology </a></u>
                            to earn a Master of Science in Computer Science.
                            </p>
                            <p>
                                My graduate studies resulted in the development of a command-line program used to analyze
                                genealogical data,
                                a recipe sharing social media web application, and a COVID-19 information hub where users
                                can find up-to-date infection statistics and schedule testing at nearby locations! As I begin
                                my search
                                for new opportunities, I am in the early stages of creating a simple personal budgeting web
                                application
                                using the tried and proven 50-30-20 budgeting rule (feel free to ask me about it!).
                            </p>
                            <p>
                                All these experiences have helped me to become a more effective communicator within and
                                across teams and pushed me to be able to pick up new skills quickly in fast-paced environments.
                            </p>

                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} className="image-container text-center">
                            <img
                                id='about-image'
                                alt="self"
                                src={self}
                                width="275"
                                height="275"
                            />
                            <div className="circle" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} id="resume-link-container" sm={12} md={8} lg={8}>
                            <a id="resume-link" className="link"  href={resume} target = "_blank" rel="noopener noreferrer"> Resume </a>
                        </Col>
                    </Row>
                </div>

            </section>
        </Container>
    );
};

export default About;