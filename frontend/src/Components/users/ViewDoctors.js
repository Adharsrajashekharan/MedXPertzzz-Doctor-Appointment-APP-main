import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import "../../styles/componentStyles/user/viewourdoctors.css";
import { useDispatch } from "react-redux";
import { ViewAllApprovedDoctors } from "../../Redux/actions/UserAction";
import { useSelector } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import { Card,Row, Button } from 'react-bootstrap';
import { fadeInUp } from 'react-animations';
import styled, { keyframes } from 'styled-components';
const fadeInUpAnimation = keyframes`${fadeInUp}`;


const DoctorCard = styled(Card)`
  animation: 1s ${fadeInUpAnimation};
  margin: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    transform: translateY(-5px);
    transition: all 0.2s ease-in-out;
  }
`;

const DoctorImg = styled(Card.Img)`
  object-fit: cover;
  height: 200px;
`;

const DoctorCardTitle = styled(Card.Title)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const DoctorCardBody = styled(Card.Body)`
  padding: 20px;
`;

const DoctorFee = styled(Card.Text)`
  font-size: 18px;
`;

const DoctorExperience = styled(Card.Text)`
  font-size: 16px;
  color: #777;
`;

const DoctorTimings = styled(Card.Text)`
  font-size: 16px;
  color: #777;
  margin-top: 10px;
`;

const BookNowButton = styled(Button)`
  margin-top: 20px;
  width: 100%;
`;


function ViewDoctors({doctor}) {

  const [viewAllDoctors, setViewAllDoctors] = useState([]);

  const [showDetails, setShowDetails] = useState(false);

  const handleViewMore = () => {
    setShowDetails(!showDetails);
  };

  const Doctors = useSelector(
    (state) => state.viewAllDoctors?.Doctors
  );
  

  const getApprovedDoctors = Doctors?.getApprovedDoctors;

  console.log("45555",getApprovedDoctors)

  const dispatch = useDispatch();

  useEffect(() => {
    getAllApprovedDoctor();
  }, []);

  const getAllApprovedDoctor = () => {
    dispatch(ViewAllApprovedDoctors());
  };

  console.log("22444", getApprovedDoctors);










  return (
    <>
      <div className="bannerImagez"></div>
      <div className="bannerz">
        <div className="bannerContentz">
          <h1 className="text-center fw-bold fs-1">SEE OUR TOP QUALITY DOCTOR TEAM</h1>



<Container>
      <Row>
        {

getApprovedDoctors?.map((doctor)=>{
    return (
      <Card className="m-3 shadow rounded" style={{ maxWidth: "300px", border:'4px solid black' }}>
      <div className="card-img-top">
        <Card.Img variant="top" src={doctor.URLS} alt={doctor.firstName} className='p-4' />
      </div>
      <Card.Body>
        <Card.Title className="text-center">
          {showDetails ? `${doctor.firstName} ${doctor.lastName}` : doctor.firstName}
        </Card.Title>
        <Card.Text className="text-center">
              <small>{doctor.specialization}</small>
            </Card.Text>
        {showDetails && (
          <>
           
            <hr />
            <Card.Text className="text-center">
              Fee: Rs. {doctor.feePerCunsultation}
            </Card.Text>
            <hr />
            <Card.Text className="text-center">
              Experience: {doctor.experience} years
            </Card.Text>
            <hr />
            <Card.Text className="text-center">
              Timings: {doctor.timings[0]} - {doctor.timings[1]}
            </Card.Text>
          </>
        )}
        <div className="text-center">
          <Button variant="primary" className="mt-4" onClick={handleViewMore}>
            {showDetails ? "View Less" : "View More"}
          </Button>
        </div>
      </Card.Body>
    </Card>

  );

})



   
     
      
   

        
     
}
      </Row>
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
  );
}

export default ViewDoctors;
