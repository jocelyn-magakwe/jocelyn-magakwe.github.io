import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';
import { Link, useLocation } from "react-router-dom";
import { db } from "../config/firebase";
import { collection, doc, getDoc } from "firebase/firestore";

import NavBarStyles from "./NavBarStyles.css";

import pdfFile from "../assets/Jocelyn Atwell CV Junior Full Stack Dev 2024.pdf";

const NavBar = () => {

  const { pathname } = useLocation();
  const [curriculumVitae, setCurriculumVitae] = useState({});

  const getCurriculumVitae = async() => {
    //Get a reference to the firestore document
    const cvDocRef = doc(collection(db, "documents"), "curriculumvitae");

    //Use the getDoc function to retrieve the document
    const cvDocSnap = await getDoc(cvDocRef);

    //If the document exists, retrieve the link to the CV from the document data
    if (cvDocSnap.exists()) {
      const cvLink = cvDocSnap.data().cv;

      //Use the link to retrieve the CV document from Firebase Storage
      const cvBlob = await (await fetch(cvLink)).blob();

      //Create a URL object from the Blob and set the state with the CV data
      const cvUrl = URL.createObjectURL(cvBlob);
      setCurriculumVitae({cvUrl});
    } else {
      console.error("No such document exists in firebase");
    }
  }

  const handleDownload = async() => {
    // Get a reference to the Firestore document
  const cvDocRef = doc(collection(db, "documents"), "curriculumvitae");

  // Use the `getDoc` function to retrieve the document
  const cvDocSnap = await getDoc(cvDocRef);

// If the document exists, retrieve the link to the CV from the document data
if (cvDocSnap.exists()) {
  const cvLink = cvDocSnap.data().cv;

  // Use the link to retrieve the CV document from Firebase Storage
  try {
    const cvBlob = await (await fetch(cvLink)).blob();
    const cvUrl = URL.createObjectURL(cvBlob);
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Jocelyn Atwell CV Junior Full Stack Dev 2024.pdf.pdf";
    link.click();
    URL.revokeObjectURL(cvUrl);
  } catch (error) {
    console.error("Error fetching CV document:", error);
  }
} else {
  console.log("No such document!");
}
  }

  return (
    <Navbar expand="lg" bg="black" variant="light" style={{borderBottomStyle: "solid", borderBottomColor: "magenta", borderWidth: "0.1rem"}}>
    <Container fluid>
      <Navbar.Brand href="/" style={{display:"flex"}}><p style={{color: "white", fontSize:"1.7rem", textDecorationLine: "underline", textDecorationColor: "magenta", textDecorationThickness: "0.2rem"}}>Portfolio</p> <h1 style={{color: "magenta", fontSize: "5rem", marginTop: "-3rem"}}>.</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: "white" }} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto" style={{textAlign: "center"}}>
          <Nav.Link as={Link} to="/" className={pathname === "/" ? "selected-tab" : "unselected-tab"} style={{fontSize: "1.2rem"}}>Home</Nav.Link>
          <Nav.Link as={Link} to="/about" className={pathname === "/about" ? "selected-tab" : "unselected-tab"} style={{fontSize: "1.2rem"}}>About Me</Nav.Link>
          <Nav.Link as={Link} to="/projects" className={pathname === "/projects" ? "selected-tab" : "unselected-tab"} style={{fontSize: "1.2rem"}}>Projects</Nav.Link>
          <Nav.Link as={Link} to="/resume" className={pathname === "/resume" ? "selected-tab" : "unselected-tab"} style={{fontSize: "1.2rem"}}>Resume'</Nav.Link>
                <Button variant='pink' onClick={handleDownload}>Download CV</Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar;