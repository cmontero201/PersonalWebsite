import React from 'react';
import Container from 'react-bootstrap/Container';

const Projects = () => {
    return (
        <Container>
            <section id="current-project" className="content">
                <div className="projects-container">
                    <h3 className="section-head"> What I'm Currently Working On: </h3>

                </div>
            </section>

            <section id="projects" className="content">
                <div className="projects-container">
                    <h3 className="section-head"> Things I've Worked On </h3>
                </div>
            </section>
        </Container>
    );
};

export default Projects;