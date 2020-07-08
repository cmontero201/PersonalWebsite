import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Intro = () => {
    return (
        <Container >
            <section id="intro" className="content">
                <div className="intro-container">
                    <h1 id='intro1'> Hi, my name is </h1>
                    <h2 id='intro2'> Christian Montero. </h2>
                    <h3 id='intro3'> I build applications for the web. </h3>

                    <Row>
                        <Col id='blurb' sm={12} md={9} lg={8}>
                            <div>
                                <p>
                                    I'm a software engineer based in the New York Metro Area interested
                                    in creating modern, user-oriented, and accessible web applications!
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
                        <Col id="resume-link-container" sm={12} md={8} lg={8}>
                            <a id="resume-link" className="link" href="mailto:cmontero@bu.edu" target="_blank" rel="nofollow noopener noreferrer"> Contact Me </a>
                        </Col>
                    </Row>

                </div>
            </section>
        </Container>

    );
};

export default Intro;