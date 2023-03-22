import React from 'react'
import "../../../styles/componentStyles/userHome/working.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/esm/Button';

function Working() {


  return (
    <div className="working">
      <h3 className="tracking-in-expand">HOW WE WORKS ?</h3>

      <Row className="cardsWork">
        <Col lg={3}>
          <Card className="workCards">
            <Card.Body>
              <Card.Title>
                <i class="fa-solid fa-1 numbers"></i>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted  workSub">
                Book Appointment
              </Card.Subtitle>
              <Card.Text className="workpara">
                instant appointment with Doctor guaranteed
              </Card.Text>
              <Button variant="warning" size="lg">
                Book Appointments
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={1}>
          <i class="fa-solid fa-arrow-right arrows"></i>
        </Col>

        <Col lg={3}>
          <Card className="workCards c2ards">
            <Card.Body>
              <Card.Title>
                {" "}
                <i class="fa-regular fa-2 numbers"></i>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted workSub">
                Take Treatment
              </Card.Subtitle>
              <Card.Text className="workpara">
                skip the waiting room quee . View your past appointments
              </Card.Text>

              <Button variant="outline-warning" size="lg">
                See Previous Visits
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={1}>
          <i class="fa-solid fa-arrow-right arrows"></i>
        </Col>

        <Col lg={3}>
          <Card className="workCards c3Cards">
            <Card.Body>
              <Card.Title>
                {" "}
                <i class="fa-regular fa-3 numbers"></i>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted  workSub">
                Long Live
              </Card.Subtitle>
              <Card.Text className="workpara">
                Read Health Blogs written by our Top Doctors and lead a healthy
                life
              </Card.Text>
              <Button variant="warning" size="lg">
                Read Health Blogs
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Working