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
                    <h2>My</h2>
                    <h2 style={{color: "magenta", marginLeft: "0.5rem"}}>Resume'</h2>
                </div>
                </Row>
                
                <Row>
                <Col sm={6}>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginBottom: "2rem"}}>
                        <h4 style={{color: "magenta"}}>Academic</h4>
                        <h4 style={{marginLeft: "0.5rem"}}>Qualification</h4>
                    </div>
                </Col>

                <Col sm={6}>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "left", marginBottom: "2rem"}}>
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
                        <div style={{ backgroundColor: "white", width: "3rem", height: "3rem", borderRadius: "50%", position: "relative", marginRight: "1rem" }}>
                            <div style={{ position: "absolute", width: "1px", height: "calc(100% + 1rem)", backgroundColor: "magenta", left: "1.5rem", top: "3rem" }} />
                        </div>

                        <div style={{display: "flex", flexDirection: "column"}}>
                            <p style={{color: "magenta", marginBottom: "-0.3rem"}}>Bachelor of Science in Data Science</p>
                            <p>Sol Plaatje University (2018 - 2021)</p>
                        </div>
                    </div>

                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginLeft: "7rem", marginTop: "2rem"}}>
                        <div style={{ backgroundColor: "white", width: "3rem", height: "3rem", borderRadius: "50%", position: "relative", marginRight: "1rem" }}>
                            <div style={{ position: "absolute", width: "1px", height: "calc(100% + 1rem)" }} />
                        </div>

                        <div style={{display: "flex", flexDirection: "column"}}>
                            <p style={{color: "magenta", marginBottom: "-0.3rem"}}>IITPSA React Application Development Certification</p>
                            <p>MLab CodeTribe Bootcamp (2024)</p>
                        </div>
                    </div>
                </Col>

                <Col sm={6}>
                    <div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "left"}}>
                        <div style={{ backgroundColor: "white", width: "3rem", height: "3rem", borderRadius: "50%", position: "relative", marginRight: "1rem" }}>
                            <div style={{ position: "absolute", width: "1px", height: "calc(100% + 1rem)", backgroundColor: "magenta", left: "1.5rem", top: "3rem" }} />
                        </div>

                        <div style={{display: "flex", flexDirection: "column"}}>
                            <p style={{color: "magenta", marginBottom: "-0.3rem"}}>Developer Internship</p>
                            <p>Capption (2022 - 2023)</p>
                        </div>
                    </div>

                    <div style={{display: "flex", flexDirection: "row", justifyContent: "left", marginTop: "2rem"}}>
                        <div style={{ backgroundColor: "white", width: "3rem", height: "3rem", borderRadius: "50%", position: "relative", marginRight: "1rem" }}>
                            <div style={{ position: "absolute", width: "1px", height: "calc(100% + 1rem)" }} />
                        </div>

                        <div style={{display: "flex", flexDirection: "column"}}>
                            <p style={{color: "magenta", marginBottom: "-0.3rem"}}>Web And Mobile Application Development Learnership</p>
                            <p>MLab CodeTribe Bootcamp (2023 - 2024)</p>
                        </div>
                    </div>
                </div>
                </Col>
                </Row>
            </div>

            <hr style={{width: "30%", borderWidth: "0.1rem", marginLeft: "33rem", marginTop: "1rem", marginBottom: "1rem"}} />

            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginBottom: "2rem"}}>
                <h4 style={{color: "magenta"}}>Skills & </h4>
                <h4 style={{marginLeft: "0.5rem"}}>Development</h4>
            </div>

            <Row>
                <Col sm={6}>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "right"}}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <p style={{color: "magenta", marginBottom: "-0.3rem", textAlign: "right"}}>JavaScript</p>
                            <p style={{textAlign: "right"}}>JS</p>
                        </div>
                    </div>

                    <div style={{display: "flex", flexDirection: "row", justifyContent: "right", marginTop: "2rem"}}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <p style={{color: "magenta", marginBottom: "-0.3rem",textAlign: "right"}}>HyperText Markup Language</p>
                            <p style={{textAlign: "right"}}>HTML</p>
                        </div>
                    </div>

                    <div style={{display: "flex", flexDirection: "row", justifyContent: "right", marginTop: "2rem"}}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <p style={{color: "magenta", marginBottom: "-0.3rem",textAlign: "right"}}>React Native</p>
                            <p style={{textAlign: "right"}}>React Native (mobile applications)</p>
                        </div>
                    </div>

                    <div style={{display: "flex", flexDirection: "row", justifyContent: "right", marginTop: "2rem"}}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <p style={{color: "magenta", marginBottom: "-0.3rem",textAlign: "right"}}>Microsoft Excel</p>
                            <p style={{textAlign: "right"}}>Reporting, Statistics</p>
                        </div>
                    </div>
                </Col>

                <Col sm={6}>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "left"}}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <p style={{color: "magenta", marginBottom: "-0.3rem"}}>Cascading StyleSheet</p>
                            <p>CSS</p>
                        </div>
                    </div>

                    <div style={{display: "flex", flexDirection: "row", justifyContent: "left", marginTop: "2rem"}}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <p style={{color: "magenta", marginBottom: "-0.3rem"}}>React JavaScript</p>
                            <p>React JS (web applications)</p>
                        </div>
                    </div>

                    <div style={{display: "flex", flexDirection: "row", justifyContent: "left", marginTop: "2rem"}}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <p style={{color: "magenta", marginBottom: "-0.3rem"}}>Python</p>
                            <p>Python (programming language)</p>
                        </div>
                    </div>

                    <div style={{display: "flex", flexDirection: "row", justifyContent: "left", marginTop: "2rem"}}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <p style={{color: "magenta", marginBottom: "-0.3rem"}}>Microsoft Access</p>
                            <p>Database Management</p>
                        </div>
                    </div>
                
                </Col>
                </Row>
        </Container>

        <Footer />
    </div>
  )
}

export default Resume