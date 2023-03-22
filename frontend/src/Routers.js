import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layouts/Layout";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import PublicRoutes from "./Components/PublicRoutes";
import SuccessApplyDoctor from "./Components/users/applyForDoctor.js/SuccessApplyDoctor";
import BookDoctorAppointment from "./Components/users/BookDoctorAppointment";
import ViewAppointments from "./Components/users/ViewAppointments";
import AdminViewDoctors from "./pages/Admin/AdminViewDoctors";
import DetailedDoctorverify from "./pages/Admin/DetailedDoctorverify";
import EditUsers from "./pages/Admin/EditUsers";
import LayoutAdmin from "./pages/Admin/LayoutAdmin";
import ShowAllUsers from "./pages/Admin/ShowAllUsers";
import DoctorsHomePage from "./pages/Doctors/DoctorsHomePage";
import Profile from "./pages/Doctors/Profile";
import ViewDoctorAppointment from "./pages/Doctors/ViewDoctorAppointment";
import Notifications from "./pages/Notifications";
import ApplyAsDoctor from "./pages/Users/ApplyForDoctor";
import HomePage from "./pages/Users/HomePage";
import LoginPage from "./pages/Users/LoginPage";
import OtpSample from "./pages/Users/OtpSample";
import RegisterPage from "./pages/Users/RegisterPage";
import UserNotifications from "./pages/Users/UserNotifications";
import ViewOurDoctors from "./pages/Users/ViewOurDoctors";
import AdminProtectedRoutes from "./utils/AdminProtectedRoutes";
import DoctorProtectedRoutes from "./utils/DoctorProtectedRoutes";

function Routers() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoutes>
            <HomePage />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoutes>
            <LoginPage />
          </PublicRoutes>
        }
      />


      <Route
        path="/register"
        element={
          <PublicRoutes>
            <RegisterPage />
          </PublicRoutes>
        }
      />
      <Route
        path="/layout"
        element={
          <ProtectedRoutes>
            <Layout />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/applyfordoctor"
        element={
          <ProtectedRoutes>
            <ApplyAsDoctor />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/successapplyfordoctor"
        element={
          <ProtectedRoutes>
            <SuccessApplyDoctor />
          </ProtectedRoutes>
        }
      />


  


      <Route
        path="/view-appointments"
        element={
          <ProtectedRoutes>
            <ViewAppointments />
          </ProtectedRoutes>
        }
      />






      

      <Route
        path="/viewOurDoctors"
        element={
          <ProtectedRoutes>
            <ViewOurDoctors />
          </ProtectedRoutes>
        }
      />





       <Route
        path="/your-notifications"
        element={
          <ProtectedRoutes>
            <UserNotifications/>
          </ProtectedRoutes>
        }
      />



<Route
        path="/bookDoctorAppointment/:doctorId"
        element={
          <ProtectedRoutes>
            <BookDoctorAppointment/>
          </ProtectedRoutes>
        }
      />









{/* 
AdminRoutes */}

      <Route
        path="/notifications"
        element={
          <ProtectedRoutes>
            <Notifications />
          </ProtectedRoutes>
        }
      />



      <Route
        path="/adminHome"
        element={
          <AdminProtectedRoutes>
            <LayoutAdmin />
          </AdminProtectedRoutes>
        }
      />
      <Route
        path="/admin/userslist"
        element={
          <AdminProtectedRoutes>
            <ShowAllUsers />
          </AdminProtectedRoutes>
        }
      />
     

     <Route
        path="/admin/doctorslist"
        element={
          <AdminProtectedRoutes>
            <AdminViewDoctors />
          </AdminProtectedRoutes>
        }
      />






      <Route
        path="/editusers/:id"
        element={
          <AdminProtectedRoutes>
            <EditUsers />
          </AdminProtectedRoutes>
        }
      />

      <Route
        path="/detailedDoctorsVerifyPage/:doctorId"
        element={
          <AdminProtectedRoutes>
            <DetailedDoctorverify />
          </AdminProtectedRoutes>
        }
      />

      {/* DOCTORSpAGES */}

      <Route
        path="/doctorhome"
        element={
          <DoctorProtectedRoutes>
            <DoctorsHomePage />
          </DoctorProtectedRoutes>
        }
      />

     

   



<Route
        path="/viewDoctorAppointments"
        element={
          <DoctorProtectedRoutes>
            <ViewDoctorAppointment />
            </DoctorProtectedRoutes>
        }
      />








      <Route
        path="/doctor/profile/:userId"
        element={
          <DoctorProtectedRoutes>
            <Profile />
            </DoctorProtectedRoutes>
         
        }
      />
    </Routes>
  );
}

export default Routers;
