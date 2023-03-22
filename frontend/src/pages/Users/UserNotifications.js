import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Navbars from '../../Components/Navbars'
import { Tabs } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {HideLoading,showLoading} from "../../Redux/actions/generalActions";
import {loginAction } from "../../Redux/actions/UserAction";
import axiosConfig from "../../axiosConfig";
import Button from "react-bootstrap/esm/Button";
import  { LinkContainer } from "react-router-bootstrap";
import '../../styles/componentStyles/user/userNotifications.css'















function UserNotifications() {



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


    }








  return (
    <div>
     
     <Navbars/>


     <div className="bannerImagem"></div>
      <div className="bannerm">
        <div className="bannerContentm">
          <h1 className="text-center fw-bold fs-1 text-white">See All Your Notifications</h1>
          



<Container>


<h1 className="page-title text-white fw-bold mt-5">Notifications</h1>
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


</div>

  )
}

export default UserNotifications
