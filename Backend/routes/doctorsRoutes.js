const express = require("express");
const router = express.Router();


const {
 getDoctorInfoById,
 getDoctorDetails,
 updateDoctorProfile,
 getAppointmentOfDoctor,
 changeAppointmentStatus,
 applyDoctorAccountBasicDetails

} = require("../controllers/doctorControllers");
const authmiddleware = require("../Middleware/authmiddleware");
const doctorAuthMiddleware = require("../Middleware/doctorAuthMiddleware");







router.post("/get-doctor-info-by-user-id",doctorAuthMiddleware,getDoctorInfoById);

router.post("/get-doctor-info-by-id",authmiddleware,getDoctorDetails);

router.patch("/update-doctor-profile",doctorAuthMiddleware,updateDoctorProfile);


router.get("/get-appointments-by-doctor-id",doctorAuthMiddleware,getAppointmentOfDoctor );
  
  router.post("/change-appointment-status",doctorAuthMiddleware,changeAppointmentStatus);
  





module.exports = router;