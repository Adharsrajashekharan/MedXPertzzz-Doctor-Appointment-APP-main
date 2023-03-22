const express = require("express");
const router = express.Router();
const authMiddleware=require('../Middleware/authmiddleware')

const {
  registration,
  loginDetails,
  getUserInfoById,
  applyForDoctorAccount,
  markAllAsSeen,
  deleteAllNotifications,
  getApprovedDoctorsList,
  BookAppointmentz,
  onlineBookAppointmentz,
  checkAvailiabilty,
  applyDoctorAccountBasicDetails,
   getUserAppointments,
  //  UploadDetailedDoctorData
} = require("../controllers/userControllers");

const authmiddleware = require("../Middleware/authmiddleware");

router.post("/register",registration)

router.post('/login',loginDetails)

router.post("/getUserInfoById",authmiddleware,getUserInfoById);





router.post("/apply-doctor-account",applyForDoctorAccount);





// router.get("/get-doctor-info",authMiddleware, applyDoctorAccountBasicDetails);

router.post("/mark-all-notifications-as-seen",authMiddleware,markAllAsSeen);
  
router.post("/delete-all-notifications", authMiddleware,deleteAllNotifications);

router.get("/getAllApprovedDoctors",authMiddleware,getApprovedDoctorsList)

router.post("/book-appointment",authMiddleware,BookAppointmentz)

router.post("/onlinebook-appointment",authMiddleware,onlineBookAppointmentz)

router.post("/check-booking-avilability",authMiddleware,checkAvailiabilty)

router.get("/get-appointments-by-user-id",authMiddleware,getUserAppointments);


// router.post("/detailedDoctorData",authMiddleware,UploadDetailedDoctorData);







module.exports = router;
