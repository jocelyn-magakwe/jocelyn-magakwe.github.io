import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

const Resume = () => {
  return (
    <div>
        <NavBar />
        
        <Container fluid style={{backgroundColor: "black", paddingTop: "2rem", paddingBottom: "2rem", overflowY: "auto", maxHeight: "100%"}}>
            <div>
                <Row style={{marginBottom: "3rem"}}>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                    <h3>My</h3>
                    <h3 style={{color: "magenta", marginLeft: "0.5rem"}}>Resume'</h3>
                </div>
                </Row>
                
                <Row>
                <Col sm={6}>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                        <h4 style={{color: "magenta"}}>Academic</h4>
                        <h4 style={{marginLeft: "0.5rem"}}>Qualification</h4>
                    </div>
                </Col>

                <Col sm={6}>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                        <h4 style={{color: "magenta"}}>Job</h4>
                        <h4 style={{marginLeft: "0.5rem"}}>Experience</h4>
                    </div>
                </Col>
                </Row>
                
            </div>

            <div>
            <Row>
                <Col sm={6}>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                    <div style={{color: "white", width: "3rem", height: "3rem"}} />
                    </div>
                </Col>

                <Col sm={6}>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                    <div style={{color: "white", width: "3rem", height: "3rem"}} />
                    </div>
                </Col>
                </Row>
            </div>
        </Container>

        <Footer />
    </div>
  )
}

export default Resume