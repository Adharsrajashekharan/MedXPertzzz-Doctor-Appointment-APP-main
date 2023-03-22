import React from "react";
import Navbars from "../../Components/Navbars";
import "../../styles/componentStyles/userapplyasdoctor.css"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cardz from "../../Components/users/applyForDoctor.js/Cardz";
import Container from "react-bootstrap/esm/Container";
import DoctorForm from "../../Components/users/applyForDoctor.js/DoctorForm";
import axiosConfig from "../../axiosConfig";
import Footers from "../../Components/userHomePage/Footer9/Footers";

function ApplyForDoctor() {

  
  return (
    <>
      <Navbars />
      <Cardz />

      <Container>
        <DoctorForm/>
      </Container>
      
      <Footers/>
    </>
  );
}

export default ApplyForDoctor;
