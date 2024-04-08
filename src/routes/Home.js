import React, { useState, useEffect } from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import MyStack from "../assets/MyStack.png";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHtml5, FaCss3Alt, FaReact, FaPython } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { db } from "../config/firebase";
import { collection, doc, getDoc } from "firebase/firestore";

const Home = () => {

  const [myStack, setMyStack] = useState({});

  const getMyStack = async() => {

  }

  return (
    <div>
      <NavBar />
        <Container fluid style={{backgroundColor: "black"}}>
            <Row>
                <Col sm={5} className='d-flex flex-column justify-content-center align-items-center'>
                    <Row className="my-2">
                        <h1>Hi, I'm Jocelyn Atwell, an</h1>
                    </Row>
                    <Row className="my-2">
                        <h1 style={{color: "magenta"}}>Applications Developer</h1>
                    </Row>
                    <Row className="my-2">
                        <p>I design web and mobile apps to turn your ideas into reality</p>
                    </Row>

                    <Button variant="pink" size="xxl">
                        Get In Touch
                    </Button>

                    <Row className='my-4'>
                      <h4 style={{color: "white", textAlign: "center"}}>My Tech Stack</h4>

                      <div className='my-2 d-flex justify-content-between align-items-center'>
                        <FaHtml5 size={30} style={{color: "white"}} />
                        <FaCss3Alt size={30} style={{color: "white"}} />
                        <IoLogoJavascript size={30} style={{color: "white"}} />
                        <FaReact size={30} style={{color: "white"}} />
                        <IoLogoFirebase size={30} style={{color: "white"}} />
                        <FaPython size={30} style={{color: "white"}} />
                      </div>
                    </Row>
                </Col>

                <Col sm={7} className='text-end'>
                    <Image src={MyStack} rounded className='stack-img' />
                </Col>
            </Row>
        </Container>
      <Footer />
    </div>
  )
}

export default Home