import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Intro = () => {
    return (
        <Container >
            <section id="intro" className="content">
                <div className="intro-container">
                    <h1 id='intro1'> Hello! My name is </h1>
                    <h2 id='intro2'> Christian Montero. </h2>
                    <h3 id='intro3'> I'm looking for challenging opportunities. </h3>

                    <Row>
                        <Col id='blurb' sm={12} md={9} lg={8}>
                            <div>
                                <p>
                                    I'm a software engineer based in the New York Metro Area interested
                                    in creating scalable and modifiable RESTful web applications!
                                    <br />
                                    <br />
                                    I love solving puzzles and approaching problems from different
                                    perspectives. From optimizing code to debugging issues, I approach every
                                    challenge with an open and curious mind.
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <br />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2} sm={2} md={2} lg={2}>
                            <a id="social" className="btn btn-social text-center rounded-circle" href="https://github.com/cmontero201" target="_blank" rel="noopener noreferrer" >
                                <i className="fa fa-fw fa-github"></i>
                            </a>
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2}>
                            <a id="social" className="btn btn-social text-center rounded-circle" href="https://www.linkedin.com/in/cmontero201/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-fw fa-linkedin"></i>
                            </a>
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2}>
                            <a id="social" className="btn btn-social text-center rounded-circle" href="mailto:cmontero@bu.edu">
                                <i className="fa fa-fw fa-envelope"></i>
                            </a>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6}> 
                        </Col>
                    </Row>

                </div>
            </section>
        </Container>

    );
};

export default Intro;