import React from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';

const Skills = () => {
    return (
        <Container>
            <section id="skills" className="content">
                <h3 className="section-head"> Skills:</h3>
                <Tab.Container id="skills-tab" defaultActiveKey="tech">
                    <Row>
                        <Col sm={4}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item >
                                    <Nav.Link eventKey="tech">Technologies I've Been Working With</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="courses">Courses I've Taken</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="tech">
                                    <Row>
                                        <Col xs={12} sm={12} md={6} lg={6}>
                                            <ul id="skills-list">
                                                <li> Javascript (ES6+)</li>
                                                <li> Python </li>
                                                <li> HTML / CSS </li>
                                                <li> Node.js </li>
                                                <li> Express </li>
                                                <li> React </li>
                                                <li> Redis </li>
                                            </ul>
                                        </Col>
                                        <Col>
                                            <ul>
                                                <li> jQuery </li>
                                                <li> Handlebars </li>
                                                <li> MongoDB </li>
                                                <li> PostgreSQL </li>
                                                <li> Git / Github</li>
                                                <li> Docker Compose </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="courses">
                                    <div>
                                        <ul id="skills-list">
                                            <li> Data Structures &amp; Algorithms </li>
                                            <li> Programming Languages </li>
                                            <li> Database Management Systems </li>
                                            <li> Web Programming </li>
                                            <li> Enterprise Software Architecture &amp; Design </li>
                                            <li> Agile Methods </li>
                                            <li> Software Testing, Quality Assurance, &amp; Maintenance</li>
                                        </ul>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </section>
        </Container >
    );
};

export default Skills;