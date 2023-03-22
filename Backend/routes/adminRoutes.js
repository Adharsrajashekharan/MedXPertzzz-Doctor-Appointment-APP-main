const express = require("express");
const router = express.Router();
const adminAuthMiddleware = require("../Middleware/adminAuthMiddleware");

const {
  showalluserz,
  getUserDetails,
  updateUserz,
  deleteUserz,
  blockUser,
  unblockUser,
  detailedDoctorVerify,
  adminViewAllDoctors,
  approveDoctorRequest,
  RejectDoctorAccount,
} = require("../controllers/adminControllers");

router.get("/showUserList",adminAuthMiddleware,showalluserz)

router.get("/users/:userId", adminAuthMiddleware, getUserDetails);

router.patch("/updateUser/:userId", adminAuthMiddleware, updateUserz);

router.delete("/deleteUsers/:userId", adminAuthMiddleware, deleteUserz);

router.patch("/block/:id",adminAuthMiddleware,blockUser);

router.patch("/unblock/:id", adminAuthMiddleware,unblockUser);

router.get("/viewAllDoctors",adminAuthMiddleware,adminViewAllDoctors);

router.get("/detailedDoctorsVerifyPage/:doctorId",adminAuthMiddleware,detailedDoctorVerify);

router.patch("/approveDoctorAccount/:doctorId",adminAuthMiddleware,approveDoctorRequest);

router.delete("/RejectDoctorAccount/:doctorId",adminAuthMiddleware,RejectDoctorAccount) 


















module.exports = router;
