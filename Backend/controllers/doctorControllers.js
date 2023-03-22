const Doctor = require("../models/doctorModel");
// const authMiddleware = require("../middlewares/authMiddleware");
const Appointment = require("../models/appointmentModel");
const Users = require("../models/userModel");



  const getDoctorInfoById = async (req, res) => {

console.log("512ok",req.body.doctorId );

   try {
     const doctor = await Doctor.findOne({ userId: req.body.userId });
     res.status(200).send({
       success: true, 
       message: "Doctor info fetched successfully",
       data: doctor,
     });
   } catch (error) {
     res
       .status(500)
       .send({ message: "Error getting doctor info", success: false, error });
   }
 };


const getDoctorDetails = async (req, res) => {
  
  console.log("224466");



  try {
    const doctor = await Doctor.findOne({ _id: req.body.doctorId });
    console.log("444",doctor)
    res.status(200).send({
      success: true,
      message: "Doctor info fetched successfully",
      data: doctor,
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error getting doctor info", success: false, error });
  }
};


 
   const updateDoctorProfile= async (req, res) => {
     try {

      
console.log("511okk",req.body.doctorId );

        console.log("555Reached");

       const doctor = await Doctor.findOneAndUpdate(
         { userId:req.body.doctorId },
         req.body
       );
       res.status(200).send({
         success: true,
         message: "Doctor profile updated successfully",
         data: doctor,
       });
     } catch (error) {
       res
         .status(500)
         .send({ message: "Error getting doctor info", success: false, error });
     }
   };



const  getAppointmentOfDoctor=async (req, res) => {
  try {

    
console.log("512okk",req.body.doctorId );

    const doctor = await Doctor.findOne({ userId: req.body.doctorId});
    const appointments = await Appointment.find({ doctorId: doctor._id });
    res.status(200).send({
      message: "Appointments fetched successfully",
      success: true,
      data: appointments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error fetching appointments",
      success: false,
      error,
    });
  }
}


const changeAppointmentStatus= async (req, res) => {
  try {
    const { appointmentId, status } = req.body;
    const appointment = await Appointment.findByIdAndUpdate(appointmentId, {
      status,
    });

    const user = await Users.findOne({ _id: appointment.userId });
    const unseenNotifications = user.unseenNotifications;
    unseenNotifications.push({
      type: "appointment-status-changed",
      message: `Your appointment status has been ${status}`,
      onClickPath: "/appointments",
    });

    await user.save();

    res.status(200).send({
      message: "Appointment status updated successfully",
      success: true
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error changing appointment status",
      success: false,
      error,
    });
  }
}










 module.exports = {
  getDoctorInfoById,
  getDoctorDetails,
  updateDoctorProfile,
  getAppointmentOfDoctor,
  changeAppointmentStatus
 };
