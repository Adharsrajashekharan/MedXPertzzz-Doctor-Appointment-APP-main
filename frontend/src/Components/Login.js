

import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import  '../styles/componentStyles/loginPage.css'
import {showLoading,HideLoading} from '../Redux/actions/generalActions'
import axios from "axios";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import loginPageDoctor from '../Images/loginPageDoctor.jpg'
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Loading";
import { loginAction } from "../Redux/actions/UserAction";
import axiosConfig from '../axiosConfig'


function Login() {

const loading=useSelector((state)=>state.general.loading)
const userlogin=useSelector((state)=>state.userlogin)
const Adminzzz = useSelector((state) => state.userlogin?.userInfo?.isAdmin);

console.log("6777",loading)

const {userInfo}=userlogin

console.log("0987654", Adminzzz);
console.log("444USERlogin",userlogin) 
console.log("333344443",userInfo)
console.log("userinfoisadmin111", userInfo?.isAdmin);

const navigate=useNavigate()
const dispatch=useDispatch()


  const onFinish = (values) => {
    console.log("Success:", values);

 
    loginApiRequest(values)


  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  const  loginApiRequest= async(values)=>{

    try{


      dispatch(showLoading())
    


    const {data}=await axiosConfig.post('/api/users/login',values)
     console.log("9322", data);
     dispatch(loginAction(data.User));

    console.log("9322",data);

    dispatch(HideLoading())

    if(data.success){
        console.log("ookkkkkk");
        // console.log("userinfoisadmin", userInfo.isAdmin);
      console.log("2222 datasuccess");
     
    
     
        await toast.success(data.message)
           toast("redirecting to home page...");

         localStorage.setItem("doctorAppToken",data.token)
         localStorage.setItem("userData",JSON.stringify(data.User));
 console.log("2222 datafinished");


         
         
         userInfo?.isAdmin ? navigate("/adminHome") : navigate("/");


    }

    else{
 
        console.log("errorrred");
         toast.error(data.message);   
         dispatch(HideLoading());
    }

    }


    catch(err){

          toast.error(err)
          dispatch(HideLoading());
    }

  }



 

  return (
    <div className="loginPageDoctor">
      <MDBContainer className="my-5">
        <MDBCard className="loginCards">
          <MDBRow className="g-0">
            <MDBCol md="5" sm="12" xs='12' className="loginPageDoctorImage">
              <MDBCardImage
                src={loginPageDoctor}
                alt="login form"
                className="rounded-start w-100"
              />
            </MDBCol>

            <MDBCol md="1"></MDBCol>

            <MDBCol md="6" sm="12" xs='12'>
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
                  Sign into your account
                </h5>

                <div>{loading && <Loader />}</div>

                <div className="loginForm">
                  <Form
                    className="fs-1 formtext"
                    layout="vertical"
                    name="basic"
                    labelCol={{
                      span: 8,
                    }}
                    wrapperCol={{
                      span: 16,
                    }}
                    style={{
                      maxWidth: 600,
                    }}
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      label=" Email Address"
                      name="email"
                      className="formItems fs-1 inputK"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input size="large" />
                    </Form.Item>

                    <Form.Item
                      label="Password"
                      name="password"
                      className="formItems passwordz "
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input.Password size="large" />
                    </Form.Item>

                    <Form.Item
                      name="remember"
                      valuePropName="checked"
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    ></Form.Item>

                    <Form.Item
                      className="btnz"
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Button
                        type="primary"
                        className="lgnbtnz me-4"
                        htmlType="submit"
                        size="large"
                      >
                        Submit
                      </Button>{" "}
                      <br></br>
                      <h6 style={{ marginLeft: "-130px" }}>
                        {" "}
                        Create a new account ?{" "}
                        <Link to="/register"> Register</Link>
                      </h6>
                    </Form.Item>
                  </Form>
                </div>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Login;