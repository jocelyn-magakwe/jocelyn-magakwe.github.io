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

const Projects = () => {
  return (
    <div>
        <NavBar />

        <Container fluid style={{backgroundColor: "black", paddingTop: "2rem", paddingBottom: "2rem", overflowY: "auto", maxHeight: "100%"}}>
        <div>
                <Row style={{marginBottom: "3rem"}}>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                    <h3>My</h3>
                    <h3 style={{color: "magenta", marginLeft: "0.5rem"}}>Projects</h3>
                </div>
                </Row>
                
                <Stack>
                <Col sm={4}>
                    
                </Col>

                <Col sm={8}>
                    
                </Col>
                </Stack>
                
            </div>
        </Container>

        <Footer />
    </div>
  )
}

export default Projects;