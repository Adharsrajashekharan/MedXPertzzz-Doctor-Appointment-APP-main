import React from 'react'
import Container from "react-bootstrap/Container";
import Rows from "react-bootstrap/Row";
import Cols from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../../../styles/componentStyles/user/cardAplpyDoc.css";

function Cardz() {

  const whyJoinUs = [
    {
      icon: "fa-solid fa-clock",
      text: "FLEXIBLE SCHEDULE",
      description:
        "With our platform, you can own your schedule. You can increase your volume or fill in gaps. Our platform allows you to work from anywhere in world whenever it suits you.",
    },
    {
      icon: "fa-solid fa-anchor",
      text: "SECURE & PRIVATE",
      description:
        "All medical and personal information is always kept confidential and safe behind strict passcodes, which meet the government and college requirements.",
    },

    {
      icon: "fa-solid fa-handshake-angle",
      text: "SUPPORTIVE",
      description:
        "We are a team of highly trained professional administrators, IT technicians and doctors. We provide you with full administrative, billing, marketing/patients, and IT support, if required.",
    },

    {
      icon: "fa-solid fa-brain",
      text: "INNOVATIVE",
      description:
        "We are leaders in telemedicine and our goal is to leverage technology to enhance patient experience",
    },

    {
      icon: "fa-solid fa-heart",
      text: "CARING",
      description:
        " we take care of health of our team we will enchance their lifestyle",
    },

    {
      icon: "fa-solid fa-stethoscope",
      text: "COMPETITIVE OVERHEAD",
      description:
        "Virtual access keeps our costs low and we pass that on to you.",
    },
  ];



  return (

   <>
 <div className="bannerImage"></div>
      <div className="banner">
        <div className="bannerContent">
          <h1 className="text-center fw-bold fs-1">WHY JOIN US</h1>

          <Container>
            <Rows>
              {whyJoinUs.map((datas) => {
                return (
                  <Cols md={4} xs={12} className="mt-5 mb-5">
                    <Card className="whyJoinUs">
                      <Card.Title>
                        {" "}
                        <i class={datas.icon}></i>
                      </Card.Title>
                      <Card.Body>
                        <Card.Title>{datas.text}</Card.Title>
                        <Card.Text>{datas.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Cols>
                );
              })}
            </Rows>
          </Container>
        </div>

        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffff"
            fill-opacity="1"
            d="M0,224L48,218.7C96,213,192,203,288,181.3C384,160,480,128,576,149.3C672,171,768,245,864,272C960,299,1056,277,1152,229.3C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    

   
   </>


  )
}

export default Cardz