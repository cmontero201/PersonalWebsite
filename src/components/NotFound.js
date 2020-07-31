import React from 'react';
import { Container, Row } from 'react-bootstrap';
import favicon from '../img/favicon.png'

const NotFound = () => {
    return (
        <Container>
            <Row className="notFound-brand">
                <a href="/">
                    <img
                        alt=""
                        src={favicon}
                        width="70"
                        height="70"
                        className="d-inline-block align-top"
                    />
                </a>
            </Row>
            <Row className="error-container">
                <Row>
                    <h1 id='error-code'> 404 </h1>
                </Row>
            </Row>
            <Row className="notFound-container">
                <Row className="notFound">
                    <div>
                        <h1 id='intro2'> Uh-oh! </h1>
                    </div>
                </Row>
                <Row className="notFound">
                    <div>
                        <h2 id='intro3'> Theres nothing to see here ... </h2>
                    </div>
                </Row>
                <Row className="notFound">
                    <div>
                        <h3> <a id="intro1return" href="/" > Return to Previous Page!</a> </h3>
                    </div>
                </Row>
            </Row>

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
    );
};

export default NotFound;