
import React, { useEffect }  from 'react'
import { Navigate, Outlet } from "react-router-dom";
import axiosConfig from '../axiosConfig'
import { useDispatch,useSelector } from 'react-redux';
import {showLoading,HideLoading} from '../Redux/actions/generalActions';
import {loginAction} from '../Redux/actions/UserAction'

const Doctortokenzz = JSON.parse(localStorage.getItem("userData"))?.isDoctor



function DoctorProtectedRoutes(props) {

  const dispatch=useDispatch()

  console.log("4444",Doctortokenzz)

  const userlogin=useSelector((state)=>state.userlogin)


const getDetailsAPI = async () => {
    try {
      console.log("reached...");
    

   
      const { data } = await axiosConfig.post(
        "/api/users/getUserInfoById",

        { token: localStorage.getItem("doctorAppToken") },
     
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("doctorAppToken")}`,
          },
        }
      );

      console.log("mannn",data)
      console.log("king",data.data)

      if (data.data) {
        dispatch(loginAction(data.data));
      } else {
      }

      dispatch(HideLoading());
    } catch (err) {
      console.log("err", err);
      dispatch(HideLoading());
    }
  };




  useEffect(() => {
    if (Object.keys(userlogin).length === 0) {
      console.log("34444",Object.keys(userlogin).length)
      console.log("api called");
      getDetailsAPI();
    } else {
      console.log("length >0");
    }
  }, [userlogin, getDetailsAPI]);




  if (Doctortokenzz) {
    console.log("222,okkkkkkk",Doctortokenzz)
    return props.children;
  } else {
    return <Navigate to={"/login"} />;
  }

  return (
  
    <>
    
    </> 
    
  )
  

}

export default DoctorProtectedRoutes