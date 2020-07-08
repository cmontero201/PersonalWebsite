import React from 'react';
import { Container, Row } from 'react-bootstrap';

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
                        <a href="mailto:cmontero@bu.edu" target="_blank" rel="nofollow noopener noreferrer"> Contact </a>
                    </Row>
                </div>
            </section>
        </Container>
    );
};

export default Contact;