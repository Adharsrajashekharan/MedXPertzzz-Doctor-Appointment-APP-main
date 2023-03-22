import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Navbars from '../Navbars'
import '../../styles/componentStyles/user/viewAppointmentzz.css'
import  { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {HideLoading,showLoading  } from "../../Redux/actions/generalActions";
import { toast } from "react-hot-toast";
import { Table } from "antd";
import moment from "moment";
import axiosConfig from '../../axiosConfig';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


function ViewAppointments() {

    let  id  = useParams();
    console.log("okk456",id.userId)

    const {userInfo} =useSelector((state)=>state.userlogin)

    
    

    
  const [appointments, setAppointments] = useState([]);
  const dispatch = useDispatch();
  const getAppointmentsData = async () => {
    try {
      dispatch(showLoading());
      const response = await axiosConfig.get('/api/users/get-appointments-by-user-id',{ 

        headers: {
          Authorization: `Bearer ${localStorage.getItem("doctorAppToken")}`,
        },
    
        
          
        
    });
      dispatch(HideLoading());
      if (response.data.success) {
        setAppointments(response.data.data);
      }
    } catch (error) {
      dispatch(HideLoading());
    }
  };
  const columns = [
    {
        title: "Id",
        dataIndex: "_id",
    },
    {
      title: "Doctor",
      dataIndex: "name",
      render: (text, record) => (
        <span>
          {record.doctorInfo.firstName} {record.doctorInfo.lastName}
        </span>
      ),
    },
    {
      title: "Phone",
      dataIndex: "phoneNumber",
      render: (text, record) => (
        <span>
          {record.doctorInfo.phoneNumber} 
        </span>
      ),
    },
    {
      title: "Date & Time",
      dataIndex: "createdAt",
      render: (text, record) => (
        <span>
          {moment(record.date).format("DD-MM-YYYY")} {moment(record.time).format("HH:mm")}
        </span>
      ),
    },
    {
        title: "Status",
        dataIndex: "status",
    }
  ];
  useEffect(() => {
    getAppointmentsData();
  }, []);



  return (


    <div>
     
      <Navbars/>

{
    console.log("22222",appointments)
}
      
    <div className="bannerImagek"></div>
      <div className="bannerk">
        <div className="bannerContentk">
          <h1 className="text-center fw-bold fs-1 mt-5">View All Your Appointments</h1>





          <Container>


  <hr className='mt-5' />
  <Table columns={columns} dataSource={appointments} />




               

          </Container>

          </div>
          </div>


    </div>
  )
}

export default ViewAppointments

