import React, { useEffect } from "react";
import Health7Blog from "../../Components/Review7Blog/Health7Blog";
import Navbars from "../../Components/Navbars";
import BookAppointment from "../../Components/userHomePage/2Banner-2/BookAppointment";
import UserApplyAsDoctor from "../../Components/userHomePage/3Banner-3/UserApplyAsDoctor";
import Working from "../../Components/userHomePage/4Banner/Working";
import DoctorCard from "../../Components/userHomePage/card5carousel/DoctorCard";
import Chat6Screen from "../../Components/userHomePage/Chat6Screen/Chat6Screen";
import Mobile7App from "../../Components/userHomePage/Mobile7Appointment/Mobile7App";
import Health8Blog from "../../Components/userHomePage/8HealthBlogDoctor/Health8Blog";
import Footers from "../../Components/userHomePage/Footer9/Footers";
import axiosConfig from "../../axiosConfig";

function HomePage() {

 const getData = async () => {
   try {
     
     const response = await axiosConfig.post("/api/users/getUserInfoById",{}, {
       headers: {
         Authorization: "Bearer " + localStorage.getItem("doctorAppToken"),
       }, 
     });
  
     if (response.data.success) {
       console.log("success");
     }
   } catch (error) {
     console.log("failed..");
   }
 };


  useEffect(()=>{
      getData()
  },[])



  return (
    <>
      <Navbars />
      <BookAppointment />
      <UserApplyAsDoctor />
      <Working />
      <DoctorCard />
      <Mobile7App />
      <Health7Blog />
      <Chat6Screen />
      <Health8Blog />
      <Footers />
    </>
  );
}

export default HomePage;
