import { Tabs } from "antd";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../pages/Admin/LayoutAdmin";
import {HideLoading,showLoading} from "../Redux/actions/generalActions";
import {loginAction } from "../Redux/actions/UserAction";
import axiosConfig from "../axiosConfig";
import Button from "react-bootstrap/esm/Button";
import  { LinkContainer } from "react-router-bootstrap";
import '../styles/componentStyles/user/userNotifications.css'


function Notifications() {




  const userlogin = useSelector((state) => state.userlogin);
  const { userInfo } = userlogin;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const markAllAsSeen = async () => {
    try {
      dispatch(showLoading());
      const response = await axiosConfig.post(
        "/api/users/mark-all-notifications-as-seen",
        { userId: userInfo.id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("doctorAppToken")}`,
          },
        }
      );
      dispatch(HideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        dispatch(loginAction(response.data.data));
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      toast.error("Something went wrong");
    }
  };



  const deleteAll = async () => {
    try {
      dispatch(showLoading());
      const response = await axiosConfig.post(
        "/api/users/delete-all-notifications",
        { userId: userInfo.id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("doctorAppToken")}`,
          },
        }
      );
      dispatch(HideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        dispatch(loginAction(response.data.data));
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout>
      <h1 className="page-title">Notifications</h1>
      <hr />

      <Tabs>
        <Tabs.TabPane tab="Unseen" key={0}>
          <div className="d-flex justify-content-end">
            <Button
              variant="warning"
              size="lg"
              className="me-4 mb-4 fs-4 fw-bold"
              style={{ height: "70px" }}
              onClick={() => markAllAsSeen()}
            >
              Mark All As Seen
            </Button>
          </div>

          {userInfo?.unseenNotifications.map((notification) => (

           

            <div
              className="card p-2 mb-5 p-4"
              onClick={() => navigate(`/detailedDoctorsVerifyPage/${notification.data.doctorId}`)}
            >
             
              <div className="card-text">{notification.message}</div>
            </div>
          ))}
        </Tabs.TabPane>
        <Tabs.TabPane tab="seen" key={1}>
          <div className="d-flex justify-content-end">
            <Button
              variant="warning"
              size="lg"
              className="me-4 mb-4 fs-4 fw-bold"
              style={{ height: "70px" }}
              onClick={() => deleteAll()}
            >
              Delete All
            </Button>{" "}
          </div>
          {userInfo?.seenNotifications.map((notification) => (
            <div
              className="card p-2 mt-2"
              onClick={() => navigate(notification.onClickPath)}
            >
              <div className="card-text">{notification.message}</div>
            </div>
          ))}
        </Tabs.TabPane>
      </Tabs>
    </Layout>
  );
}

export default Notifications;
