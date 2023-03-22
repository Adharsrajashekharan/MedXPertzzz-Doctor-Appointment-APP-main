import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {  Form, Input,Button } from 'antd'
import axios from 'axios'
import toast from 'react-hot-toast'
import doctorReg from "../Images/registerPagePhoto.jpg";
import { useDispatch } from 'react-redux'
import {HideLoading,showLoading} from '../Redux/actions/generalActions'
import { authentication} from '../firebase';
import "../styles/componentStyles/registerPage.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import axiosConfig from '../axiosConfig'

import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";


function Register() {
  const countryCode = "+91"
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(countryCode)
  const [OTP, setOTP] = useState("")
  const [countdown, setCountdown] = useState(0);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    console.log(OTP);
  }, [OTP])

  
  useEffect(() => {
    if (countdown > 0) {
      setTimeout(() => setCountdown(countdown - 1), 1000);
    }
  }, [countdown]);

  const onFinish = async (values) => {
    try {

      console.log("1232 reached ")
      if (password !== confirmPassword) {
        toast("passwords do not match")
        console.log(confirmPassword);
        return
      }
      else {
        let confirmationResult = window.confirmationResult
        confirmationResult.confirm(OTP).then(async(result) => {
          const user = result.user
          dispatch(showLoading())
          const response = await axiosConfig.post("/api/users/register", values);
          console.log("first",response.data)
          dispatch(HideLoading())
          if (response.data.success) {
            toast.success(response.data.message)
            toast("Redirecting to login page")
            navigate("/login")
          } else {
            toast.error(response.data.message)
          }
        }).catch((error) => {
          toast("error in otp")
        })

      }
    }
    catch (error) {
      toast.error("something went wrong")
    }


  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
    console.log(confirmPassword);
    if (password !== value) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };

  const phonenumChange = (e) => {
    setPhoneNumber(e.target.value)
  }

  const generaterecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('re-container', {
      'size': 'invisible',
      'callback': (response) => {

      }
    }, authentication);
  }

  const requestOTP = (e) => {
    e.preventDefault()
    setCountdown(30);
    console.log("first",phoneNumber)
   
    if (phoneNumber.length >= 12) {

      generaterecaptcha()
      let appVerifier = window.recaptchaVerifier
      signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
        .then((confirmationResult) => {

          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          console.log(error.message);
        });
    }
  }



  return (


<div className="registerSPage">

     

<MDBContainer className="my-5">
  <MDBCard className="registerCard">
    <MDBRow className="g-0">
      <MDBCol md="5">
        <MDBCardImage
          src={doctorReg}
          alt="login form"
          className="rounded-start w-100"
        />
      </MDBCol>

      {/* <MDBCol md="1"></MDBCol> */}

      <MDBCol md="6 ">
        <MDBCardBody className="d-flex flex-column  ms-5 mt-4">
          <div className="d-flex flex-row mt-2 ms-5">
            <MDBIcon
              fas
              icon="fa-solid fa-user-doctor fa-3x me-3"
              style={{ color: "#ff6219" }}
            />
            <span className="h1 fw-bold mb-0 appText">MedXpert</span>
          </div>

          <h5
            className="fw-normal my-4 pb-3 mt-5 textz"
            style={{ letterSpacing: "1px" }}
          >
            Register into your account
          </h5>







    <div className='authentication'>

      <div className='authentication-form card p-2'>
       

        <Form layout='vertical' onFinish={onFinish} >

          <Form.Item label="Name" name="username">
            <Input className='login-input' placeholder='Name' />
          </Form.Item>
          <Form.Item label="Email" name="email">

            <Input className='login-input ' placeholder='Email' />
          </Form.Item>
          <Form.Item label="Password" name="password" >
            <Input className='login-input' placeholder='Password' value={password} onChange={handlePasswordChange} type='password' />
          </Form.Item>
          <Form.Item label="Confirm Password" name="cpassword">
            <Input className='login-input' placeholder='Confirm Password' value={confirmPassword} onChange={handleConfirmPasswordChange} type='password' />
            {error && <p style={{ color: "red" }}>{error}</p>}
          </Form.Item>
          <Form.Item label="Mobile Number" name="mobile" >


            <Input className='login-input ' placeholder='Enter Mobile Number' value={phoneNumber} onChange={phonenumChange} />

          </Form.Item>
          {countdown===0 ?
          (<Button className='otp-button mt-0 mb-4 warning'  onClick={requestOTP} size='middle'>Get OTP</Button>)
          :


          (<Button className='otp-button mt-2 '  disabled size='middle'>`Wait for {countdown} sec```</Button>)}
        
          <input type="text"  placeholder='Enter OTP' value={OTP} onChange={(e) => setOTP(e.target.value)} />

          <div id='re-container'></div>




          <Button className='primary-button mt-3 mb-3 pb-3 pt-1' htmlType='submit'>register</Button>
          <Link to='/login' style={{ marginLeft: '1rem' }} className='anchor'>Click here to Login</Link>
        </Form>
      </div>
    </div>


    
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </div>
  )
}

export default Register