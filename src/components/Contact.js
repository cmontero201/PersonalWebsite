import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container>
            <section id="contact" className="content">
                <div className="contact-container">
                    <h3 id="contact-head" className="section-head"> Lets Connect! </h3>
                    <Row id="contact-body">
                        <p>
                            I'm actively looking for new and exciting full-time opportunities! Please, feel free
                            to reach out to me about any positions that I may be able to contribute to while
                            further developing my skills and abilities!
                        </p>
                    </Row>
                    <Row className="footer-social justify-content-md-center">
                        <Row >
                            <Col>
                                <a id="social" className="btn btn-social text-center rounded-circle" href="https://github.com/cmontero201" target="_blank" rel="noopener noreferrer" >
                                    <i className="fa fa-fw fa-github"></i>
                                </a>
                            </Col>
                            <Col>
                                <a id="social" className="btn btn-social text-center rounded-circle" href="https://www.linkedin.com/in/cmontero201/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-fw fa-linkedin"></i>
                                </a>
                            </Col>
                        </Row>
                    </Row>
                    <Row className="footer-social">
                        <Col id="resume-link-container2" sm={12} md={8} lg={8}>
                            <a id="resume-link" className="link" href="mailto:cmontero@bu.edu" target="_blank" rel="nofollow noopener noreferrer"> Contact Me </a>
                        </Col>
                    </Row>
                </div>
            </section>
        </Container>
    );
};

export default Contact;