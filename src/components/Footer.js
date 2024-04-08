import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaLinkedin, FaEnvelope, FaGithub, FaPhone } from "react-icons/fa";
import FooterStyles from "./FooterStyles.css";

const Footer = () => {
  return (
    <div className='bg-black text-white py-3' style={{borderTopStyle: "solid", borderTopColor: "magenta", borderWidth: "0.1rem"}}>
        <Container fluid >
            <Row className='align-items-center justify-content-center'>
                <Col md="6" className="text-center">
                    <div className='d-flex align-items-center'>
                        <span className='me-3' style={{color: "white"}}>Let's connect! - </span>
                        <a href="mailto:jjatwell99@gmail.com" className='text-white me-3'>
                            <FaEnvelope style={{color: "white"}} />
                        </a>
                        <a href="https://linkedin.com/in/jocelyn-atwell" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                            <FaLinkedin style={{color: "white"}} />
                        </a>
                        <a href="https://github.com/JAtwell-b3fly" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                            <FaGithub style={{color: "white"}} />
                        </a>
                        <a href="tel:+27843709469" className="text-white">
                            <FaPhone style={{color: "white"}} />
                        </a>
                    </div>
                </Col>

                <Col md="6" className='text-center'>
                    <span style={{color: "white"}}>Portfolio Website Version 1.0 | 2024</span>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer