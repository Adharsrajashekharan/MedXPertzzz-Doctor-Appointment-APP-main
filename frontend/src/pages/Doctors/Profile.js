import { Button, Col, Form, Input, Row, TimePicker } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showLoading,HideLoading} from "../../Redux/actions/generalActions";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import axiosConfig from "../../axiosConfig";
import DoctorForm from "../../Components/users/applyForDoctor.js/DoctorForm";
import Layout from "../../Components/Layouts/Layout";


function Profile() {
  const userInfo = useSelector((state) => state.userlogin?.userInfo);
  const params = useParams();
  const [doctor, setDoctor] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axiosConfig.patch(
        "/api/doctors/update-doctor-profile",
        {
          ...values,
          userId: userInfo._id,
          timings: [
            moment(values.timings[0]).format("HH:mm"),
            moment(values.timings[1]).format("HH:mm"),
          ],
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
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      toast.error("Something went wrong");
    }
  };

  const getDoctorData = async () => {
    try {
      dispatch(showLoading());
      const response = await axiosConfig.post(
        "/api/doctors/get-doctor-info-by-user-id",
        {
          userId: params.userId,
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

  useEffect(() => {
    getDoctorData();
  }, []);
  return (
    <Layout>
      <h1 className="page-title">Doctor Profile</h1>
      <hr />
      {doctor && <DoctorForm onFinish={onFinish} initivalValues={doctor} />}
    </Layout>
  );
}

export default Profile;
