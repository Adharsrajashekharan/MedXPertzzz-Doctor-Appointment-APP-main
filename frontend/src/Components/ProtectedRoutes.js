import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { loginAction, getUserinfoAction } from "../Redux/actions/UserAction";
import { useDispatch } from "react-redux";
import { showLoading, HideLoading } from "../Redux/actions/generalActions";
import axiosConfig from '../axiosConfig'

function ProtectedRoutes(props) {
  const dispatch = useDispatch();

  const userlogin = useSelector((state) => state.userlogin);
  console.log("4333",userlogin)

  dispatch(showLoading());

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
      console.log("api called");
      getDetailsAPI();
    } else {
      console.log("length >0");
    }
  }, [userlogin, getDetailsAPI]);

  if (localStorage.getItem("doctorAppToken")) {
    return props.children;
  } else {
    return <Navigate to={"/login"} />;
  }
}

export default ProtectedRoutes;
