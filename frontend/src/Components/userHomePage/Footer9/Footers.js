import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../../Images/MedXpertsLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import fFb from "../../../Images/fFb.png";
import fIn from "../../../Images/fInsta.png";
import fLi from "../../../Images/fLinked.png";
import fTw from "../../../Images/fTwitt.png";
import "../../../styles/componentStyles/userHome/footer.css";

function Footers() {
  return (
    <footer >
      <Container>
        <Row>
          <Col md={3} sm={6}>
            <img src={logo} className="footImg"></img>
            <p>
              Skip the Waiting Room...<br></br> Get an Instant Appointment{" "}
              <br></br>
              Consult with Top Rated Doctors
            </p>

            <div className="footer-contact">
              <div className="footer-Icon mt-4">
                <br></br>
                <FontAwesomeIcon icon={faPhone} />
              </div>

              <div className="footer-text mt-4">
                <h5>Contact Us</h5>
                <h3>+012 123 45678</h3>
              </div>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#"> Health Blogs</a>
              </li>
              <li>
                <a href="#">Bookings</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </Col>

          <Col md={3} sm={6}>
            <h2>For Patients</h2>
            <ul>
              <li>
                <a href="#">Ask Free Health Questions</a>
              </li>
              <li>
                <a href="#">Search For Doctors</a>
              </li>
              <li>
                <a href="#">consult a Doctor</a>
              </li>
              <li>
                <a href="#">Read Health Blogs</a>
              </li>
              <li>
                <a href="#">Read About Medicines</a>
              </li>
              <li>
                <a href="#">Read Doctor Reviews</a>
              </li>
            </ul>
          </Col>

          <Col md={3} sm={6}>
            <h2>Subscribe</h2>

            <form>
              <input type={"email"} />
              <button type="submit">subscribe</button>
            </form>

            <ul className="social">
              <li>
                <a href="">
                  <img src={fFb} className="socialIcons"></img>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={fIn} className="socialIcons"></img>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={fLi} className="socialIcons"></img>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={fTw} className="socialIcons"></img>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footers;
