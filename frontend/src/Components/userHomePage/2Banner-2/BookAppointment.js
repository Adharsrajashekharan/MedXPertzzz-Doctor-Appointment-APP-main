
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import doctor1 from "../../../Images/doctorHead1.png";
import plusHead1 from "../../../Images/plusHead1.png";
import  "../../../styles/componentStyles/userHome/bookAppointment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


function BookAppointment() {
  return (
    <div>
      <header className="pt-3">
        <Row className="pt-5 pb-5">
          <Col md={1} lg={1}></Col>
          <Col md={3} lg={3}>
            <div className="header-box">
              <img src={doctor1} />
            </div>
          </Col>
          <Col md={1} lg={1}></Col>
          <Col md={6} lg={6} className="text-center pt-4 pb-5">
            <h5>We Provide All Health Care Solutions</h5>
            <h2>
              Instant Appointment With<br></br> Doctor Guaranteed
            </h2>
            <Link to='/viewourdoctors'><button>Book Appointment</button></Link>{" "}
            <img src={plusHead1} className="plus" />
          </Col>
          <Col md={1} lg={1}></Col>
        </Row>
      </header>
    </div>
  );
}

export default BookAppointment