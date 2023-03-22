import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import videoz from "../../../Videos/consult.099446892618434cc8a038d7844c4380.webm";
import "../../../styles/componentStyles/userHome/chat6Screen.css";
import Button from "react-bootstrap/esm/Button";
import "../../../styles/componentStyles/userHome/working.css";


function Chat6Screen() {
  return (
    <div>
      <div className="chatHomePage">
        <Row>
          <Col lg={6} sm={12} className="chatVideo mt-5">
            <Container>
              <video
                src={videoz}
                type="video/mp4"
                width="740"
                height="640"
                autoPlay
                muted
                playsInline
                style={{ pointerEvents: "none" }}
              />
            </Container>
          </Col>

          <Col lg={6} sm={12} className="chatDescription">
            <Container>
              <h3 className="mt-5 mb-5">Skip The Waiting Room</h3>
              <h1 className="mt-5 mb-5">Consult with a Doctor</h1>
              <h4 className="mt-5 mb-4">
                <span>
                  <i
                    class="fa-solid fa-check fs-1 ms-5 ps-5"
                    style={{ color: "green" }}
                  ></i>
                </span>{" "}
                Fees starting at ₹99
              </h4>
              <h4 className="mt-3 mb-3">
                <span>
                  <i
                    class="fa-solid fa-check fs-1 ms-5 ps-5"
                    style={{ color: "green" }}
                  ></i>
                </span>{" "}
                Verified doctors respond in 5 minutes
              </h4>
              <h4 className="mt-4 mb-3">
                <span>
                  <i
                    class="fa-solid fa-check fs-1 ms-5 ps-5"
                    style={{ color: "green" }}
                  ></i>
                </span>{" "}
                100% Private and confidential
              </h4>
              <span className="mt-5 mb-4" style={{ marginLeft: "140px" }}>
                <Button variant="warning" size="lg" className="mt-5 mb-4 ms-5 chatBtn">
                  Chat Now
                </Button>{" "}
                <span>
                  <h4 className="mt-2 mb-4" style={{ marginLeft: "180px" ,color:"white" }}>
                    {" "}
                    <i class="fa-solid fa-globe fs-2 pe-4" style={{ color: "blue" }}>
                      {" "}
                    </i>{" "}
                     5 doctors online
                  </h4>
                </span>
              </span>
            </Container>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Chat6Screen;
