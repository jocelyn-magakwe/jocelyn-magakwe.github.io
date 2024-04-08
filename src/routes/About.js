import React, {useState, useEffect} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import MyBio from "../assets/MyBio.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from "../config/firebase";
import { collection, doc, getDoc } from "firebase/firestore";

const About = () => {

  const [readMore, setReadMore] = useState(false);
  const [testimonial1, setTestimonial1] = useState({});

  const getTestimonial1 = async() => {
    try {
      const testimonialDocRef = doc(collection(db, "images"), "testimonialletter");

      // Use the `getDoc` function to retrieve the document
      const testimonialSnap = await getDoc(testimonialDocRef);
      const testimonialImage = testimonialSnap.data().testimonial;
      setTestimonial1(testimonialImage);
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getTestimonial1();
  }, [])

  const handleReadMoreClick = () => {
    if (readMore === true) {
      setReadMore(false);
    } else {
      setReadMore(true);
    }
  }

  return (
    <div>
      <NavBar />

      <Container fluid style={{backgroundColor: "black", paddingTop: "2rem", paddingBottom: "2rem", overflowY: "auto", maxHeight: "100%"}}>
        <Row>
          <Col sm={4} style={{justifyContent: "center", alignItems: "center"}}>
            <Image src={MyBio} rounded className='stack-img' />
          </Col>

          <Col sm={8} style={{textAlign: "left"}}>
              <div style={{marginRight: "5rem", marginTop: "2rem"}}>
                <h3 style={{textAlign: "center"}}>About Me</h3>

                <div style={{marginTop: "3rem", marginBottom: "3rem"}}>
                    <h5 style={{color: "magenta"}}>Name: Jocelyn Atwell</h5>
                    <h5>Occupation: Application Developer</h5>
                    <h5 style={{color: "magenta"}}>Location: Kimberley, Northern Cape, South Africa</h5>
                    <h5>Age: 24</h5>

                    <h5 style={{color: "magenta", marginBottom: "1rem", marginTop: "3rem"}}>Background</h5>

                  <p style={{ marginBottom: "3rem"}}>
                    I graduated from Sol Plaatje University in 2021 with a Bachelors Degree in Data Science. 
                    Additionally, I hold an IITPSA certification in React development. Throughout my academic journey, 
                    I've been passionate about leveraging technology to solve real-world problems and create innovative solutions.
                  </p>
                </div>

                {readMore === true && (
                  <div>
                  <h5 style={{color: "magenta", marginBottom: "1rem"}}>Skills and Expertise</h5>

                  <p style={{ marginBottom: "3rem"}}>
                    I have a diverse skill set that includes proficiency in languages such as C++, Python, SQL, Microsoft Power Platform and 
                    HTML/CSS/Javascript. My studies have also exposed me to various fields such as database management, machine learning, and
                    data visualisation.
                  </p>

                  <h5 style={{color: "magenta", marginBottom: "1rem"}}>Passions and Interests</h5>

                  <p style={{ marginBottom: "3rem"}}>
                    I am deeply passionate about creating innovative solutions from scratch. I love exercising my artistic abilities in 
                    designing user-friendly and aesthetically pleasing applications. My interests extend beyond technology, as I've actively 
                    participated in art exhibitions and environmental intiatives, such as leading a clean-up campaign to raise awareness about 
                    environmental issues.
                  </p>

                  <h5 style={{color: "magenta", marginBottom: "1rem"}}>Work Philosophy</h5>

                  <p style={{ marginBottom: "3rem"}}>
                    My approach to work is systematic and problem-solving oriented. I believe in maintaining consistency and delivering work at a 
                    high standard. Discipline and attention to detail are values that I prioritise in my professional endeavors.
                  </p>
                </div>
                )}

                <Button variant='transparent' size="xxl" onClick={handleReadMoreClick}>
                  {readMore === true ? "Read Less": "Read More"}
                </Button>
              </div>
          </Col>
        </Row>

        <Stack style={{marginTop: "2rem"}}>
        <h3 style={{textAlign: "center", color: "magenta", marginBottom: "3rem"}}>Testimonials</h3>

        <Container>
          <Col sm={6}>
            <Image src={testimonial1} rounded style={{width: "35rem"}} />
          </Col>

          <Col sm={6}>
            <Image />
          </Col>
        </Container>
        </Stack>

        <Stack style={{marginTop: "2rem"}}>
          <div style={{display: "flex", flexDirection: "row", textAlign: "center", justifyContent: "center", marginBottom: "3rem"}}>
              <h3 style={{color: "white"}}>Hobbies & </h3>
              <h3 style={{color: "magenta", marginLeft: "0.5rem"}}>Extracurriculars</h3>
          </div>

        <div style={{display: "flex", flexDirection: "row"}}>
        <Col sm={5} className='justify-content-right align-items-right'>
            <h5 style={{textAlign:"center"}}>Reading</h5>

            <div style={{marginLeft: "1rem", textAlign: "right"}}>
              <p style={{color: "magenta"}}>Brother Chronicles Series 1 to 4</p>
              <p>Bible</p>
              <p style={{color: "magenta"}}>Pilgrims Progress</p>
            </div>

            <h5 style={{textAlign:"center"}}>Arts and Crafts</h5>

            <div style={{marginLeft: "1rem", textAlign: "right"}}>
              <p style={{color: "magenta"}}>Painting</p>
              <p>Sketching</p>
              <p style={{color: "magenta"}}>Making assessories</p>
            </div>

            <h5 style={{textAlign:"center"}}>Others</h5>

            <div style={{marginLeft: "1rem", textAlign: "right"}}>
              <p style={{color: "magenta"}}>Playing Keyboard</p>
              <p>Playing Recorder</p>
              <p style={{color: "magenta"}}>Dancing</p>
            </div>
            
          </Col>

          <div className='divider' />

          <Col sm={5} className='justify-content-left align-items-left'>
            <h6 style={{color: "magenta"}}>2019</h6>
            <p>Leading a clean-up campaign at Sol Plaatje University</p>

            <h6 style={{color: "magenta"}}>2022</h6>
            <p>Serving in a dance ministry</p>
          </Col>
        </div>
          
        </Stack>
            
        </Container>

        <Footer />
    </div>
  )
}

export default About