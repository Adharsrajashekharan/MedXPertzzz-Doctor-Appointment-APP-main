import { Button, Col, DatePicker, Form, Input, Row, TimePicker } from "antd";
import React, { useEffect, useState } from "react";
import axiosConfig from "../../axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading,showLoading} from "../../Redux/actions/generalActions"
import { toast } from "react-hot-toast";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import Navbars from "../Navbars";
import  '../../styles/componentStyles/user/bookDoctorAppointmentS.css'
import Container from "react-bootstrap/esm/Container";
import StripeCheckout from "react-stripe-checkout";





function BookDoctorAppointment() {
  const [isAvailable, setIsAvailable] = useState(false);
  const navigate = useNavigate();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
    const userInfo = useSelector((state) => state.userlogin?.userInfo);
  const [doctor, setDoctor] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();


  const getDoctorData = async () => {
    try {
      dispatch(showLoading());
      const response = await axiosConfig.post(
        "/api/doctors/get-doctor-info-by-id",
        {
          doctorId: params.doctorId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("doctorAppToken")}`,
          },
        }
      );

      dispatch(HideLoading());
      if (response.data.success) {
        setDoctor(response.data.data);
      }
    } catch (error) {
      console.log(error);
      dispatch(HideLoading());
    }
  };
  const checkAvailability = async () => {
    try {

console.log("444",date,time);

      dispatch(showLoading());
      const response = await axiosConfig.post(
        "/api/users/check-booking-avilability",
        {
          doctorId: params.doctorId,
          date: date,
          time: time,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("doctorAppToken")}`,
          },
        }
      );
      dispatch(HideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        setIsAvailable(true);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error booking appointment");
      dispatch(HideLoading());
    }
  };
  const bookNow = async () => {
    setIsAvailable(false);
    try {
      dispatch(showLoading());
      const response = await axiosConfig.post(
        "/api/users/book-appointment",
        {
          doctorId: params.doctorId,
          userId: userInfo._id,
          doctorInfo: doctor,
          userInfo: userInfo,
          date: date,
          time: time,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("doctorAppToken")}`,
          },
        }
      );

      dispatch(HideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/view-appointments");
      }
    } catch (error) {
      toast.error("Error booking appointment");
      dispatch(HideLoading());
    }
  };


  const onlinebookNow=async (token) => {

console.log("444shefeeq",token)



    setIsAvailable(false);
    try {
      dispatch(showLoading());
      const response = await axiosConfig.post(
        "/api/users/onlinebook-appointment",
        {
          token,
          doctorId: params.doctorId,
          userId: userInfo._id,
          doctorInfo: doctor,
          userInfo: userInfo,
          date: date,
          time: time,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("doctorAppToken")}`,
          },
        }
      );

      dispatch(HideLoading());
      console.log("ith token",token)
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/view-appointments");
      }
    } catch (error) {
      toast.error("Error booking appointment");
      dispatch(HideLoading());
    }
  };







  useEffect(() => {
    getDoctorData();
  }, []);
  return (

   
    <>

  

    <Navbars/>


    

    <div className="bannerImagezz"></div>
      <div className="bannerzz">
        <div className="bannerContentz">
        <h1 className="text-center fw-bold fs-1">Book Appointment Now</h1>



          <Container>
   
   
        <div>
          <h1 className="page-title text-white" style={{marginTop:'100px', marginBottom:'100px'}}>
            Dr: {doctor?.firstName} {doctor?.lastName}
          </h1>
          <hr />
          <Row gutter={50} className="mt-5" align="middle">
            <Col span={8} sm={24} xs={24} lg={8}>


           



              <img
                src="https://thumbs.dreamstime.com/b/finger-press-book-now-button-booking-reservation-icon-online-149789867.jpg"
                alt=""
                width="100%"
                height="400"
              />
            </Col>

            <Col lg={4}></Col>


            <Col span={8} sm={24} xs={24} lg={10}>
              <h1 className="normal-text mt-3 mb-3">
                <b>Timings :</b> {doctor?.timings[0]} - {doctor?.timings[1]}
              </h1>
              <p>
                <b>Phone Number : </b>
                {doctor?.phoneNumber}
              </p>
              <p>
                <b>Address : </b>
                {doctor?.address}
              </p>
              <p>
                <b>Fee per Visit : </b>
                {doctor?.feePerCunsultation}
              </p>
              <p>
                <b>Website : </b>
                {doctor?.website}
              </p>
              <div className="d-flex flex-column pt-2 mt-2">
                <DatePicker
                  format="DD-MM-YYYY"
                  onChange={(value) => {
                    setDate(moment(value).format("DD-MM-YYYY"));
                    setIsAvailable(false);
                  }}
                />
                <TimePicker
                  format="HH:mm"
                  className="mt-3"
                  onChange={(value) => {
                    console.log("333",(value.format("HH:mm")))
                    setIsAvailable(false)
                    setTime(value.format("HH:mm"));
                  }}
                />
                {!isAvailable && (
                  <Button
                    className="primary-button mt-3 full-width-button"
                    onClick={checkAvailability}
                  >
                    Check Availability
                  </Button>
                 )}

                {isAvailable && (
                  <Button
                    className="primary-button mt-3 full-width-button"
                    onClick={bookNow}
                  >
                    Book Now and Pay on visit
                  </Button>
                )}


           {isAvailable && (
                  <Button
                    className="primary-button mt-3 full-width-button"
                    
                  >
                  

                    <StripeCheckout
                    shippingAddress
                    token={onlinebookNow}
                    amount={doctor?.feePerCunsultation * 100}
                    stripeKey="pk_test_51MecxESI2ynGCKECkwE6v1yAnK7Kpg47SvO2KIkNoslBDn09QKUMnMC3i8wASJH8Ob0Rb1di1ejeym0o2QTEcvpM00aLc6BcaX"
                  >
                    <button>Book Now</button>
                  </StripeCheckout>   



                  </Button>
                )}



              </div>
            </Col>
          </Row>
        </div>

       
     </Container>

    
            </div>
          </div>
        </>
   

  )
}

export default BookDoctorAppointment;
