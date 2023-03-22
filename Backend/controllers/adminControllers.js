const Users = require("../models/userModel");
const Doctors = require("../models/doctorModel");

const showalluserz = async (req, res) => {
  try {

console.log("4332 adminId", req.body.AdminId);

    const showallusers = await Users.find({ isAdmin: false });
    console.log("4222", showallusers);
 
    res.status(200).send({
      message: "fetching userslist successfull",
      success: true,
      showallusers,
    });
  } catch (err) {
    res
      .status(500)
      .send({ message: "fetching userslist failed", err, success: false });
  }
};

const getUserDetails = async (req, res) => {
  try {
    const userId = req.params.userId;

    const userDetails = await Users.find({ _id: userId });

    console.log("cv", userDetails);

    res.status(200).send({
      message: "userDetails fetched successfully",
      success: true,
      userDetails,
    });
  } catch (err) {
    res
      .status(500)
      .send({ message: "userDetails fetching failed", err, success: false });
  }
};

const updateUserz = async (req, res, next) => {
  try {
    const userId = req.params.userId;

    console.log("2244", req.body);
    const data = req.body;

    Users.findByIdAndUpdate(userId, data)
      .then((result) => {
        console.log("Updated User : ", result);
      })
      .catch((error) => {
        console.log(err);
      });

    const updatedUser = await Users.find({ _id: userId });
    console.log("editable", updatedUser);

    res.status(200).send({
      message: "User updated successfully",
      success: true,
      updatedUser,
    });
  } catch (err) {
    console.log("erroccured", err);
    res
      .status(500)
      .send({ message: "some error occured", success: false, err });
  }
};

const deleteUserz = async (req, res) => {
  try {
    const userId = req.params.userId;

    Users.findByIdAndRemove(userId)
      .then((result) => {
        console.log("Removed User : ");
      })
      .catch((error) => {
        console.log(err);
      });

    res.status(200).send({
      message: "deleting userslist successfull",
      success: true,
    });
  } catch (err) {
    console.log("123err", err);
    res
      .status(500)
      .send({ message: "deleting userslist failed", err, success: false });
  }
};

const blockUser = async (req, res) => {

  
console.log("55552 adminId", req.body.AdminId);
 

  try {
    const user_id = req.params.id;
    console.log("xz", user_id);

    Users.findByIdAndUpdate(user_id, {
      isBlocked: true,
    })
      .then((result) => {
        console.log("blocked User : ", result);
      })
      .catch((error) => {
        console.log(error);
      });

    const userDetails = await Users.find({ _id: user_id });

    res
      .status(200)
      .send({ message: "you are blocked", success: true, userDetails });
  } catch (err) {
    res
      .status(500)
      .send({ message: "error blocking user", success: false, err });
  }
};

const unblockUser = async (req, res) => {
  try {
    const user_id = req.params.id;
    console.log("xz", user_id);

    Users.findByIdAndUpdate(user_id, {
      isBlocked: false,
    })
      .then((result) => {
        console.log("blocked User : ", result);
      })
      .catch((error) => {
        console.log(error);
      });

    const userDetails = await Users.find({ _id: user_id });

    res
      .status(200)
      .send({ message: "you are  unblocked", success: true, userDetails });
  } catch (err) {
    res
      .status(500)
      .send({ message: "error unblocking user", success: false, err });
  }
};

const adminViewAllDoctors = async (req, res) => {
  try {
    const allDoctors = await Doctors.find({ status:"Approved" });
    console.log("view",allDoctors);

    res.send(allDoctors);

    // res.status(200).send({message:"fetched all doctors successfully",allDoctors,success:true})
  } catch (err) {
    res.status(500).send({
      message: "fetched all doctors failed",
      err,
      success: true,
    });
  }
};

const detailedDoctorVerify = async (req, res) => {
  try {
    console.log("reacheddoc");
    const doctorId = req.params.doctorId;
    console.log("123", doctorId);

    const allDoctorRequest = await Doctors.findOne({ _id: doctorId });

    console.log("222",allDoctorRequest);

    res.status(200).send({
      message: "fetching  doctorData Request successfull",
      success: true,
      allDoctorRequest,
    });
  } catch (err) {
    res.status(500).send({
      message: "fetching doctors request failed",
      success: false,
      err,
    });
  }
};

const approveDoctorRequest = async (req, res) => {
  try {
    console.log("reached");
    const doctorId = req.params.doctorId;
    console.log("123", doctorId);

    const DoctorDetails = await Doctors.find({ _id: doctorId });

    console.log("docD", DoctorDetails);

    const userIds = DoctorDetails[0].userId;
    console.log("2345", userIds);

    const userDEtailzzzz = await Users.find({ _id: userIds });

    console.log("23456", userDEtailzzzz);

    await Users.findByIdAndUpdate(userIds, { isDoctor: true })
      .then((result) => {
        console.log("Updated User : ", result);
      })
      .catch((error) => {
        console.log(error, "error occured while updating...");
      });

    await Doctors.findByIdAndUpdate(doctorId, { status: "Approved" })
      .then((result) => {
        console.log("Updated User : ", result);
      })
      .catch((error) => {
        console.log(error, "error occured while updating...");
      });

    const userDetails = await Users.find({ _id: userIds });

    console.log("m", userDetails);

    const unseenNotifications = userDetails[0].unseenNotifications;

    unseenNotifications.push({
      type: "DoctorApplySuccessfull",
      message: `congragulations..! your are approved as a doctor`,
      data: {
        doctorId: userDetails._id,
      },
      onClickPath: "/",
    });

    await Users.findByIdAndUpdate(userIds, { unseenNotifications })
      .then((result) => {
        console.log("Updated Userkk : ", result);
      })
      .catch((error) => {
        console.log(error, "error occured while updating...");
      });

    res.status(200).send({
      message: "Approve As Doctor",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Doctor Approval Failed",
      success: false,
      err,
    });
  }
};

const RejectDoctorAccount = async (req, res) => {
  try {
    console.log("reached");
    const doctorId = req.params.doctorId;
    console.log("123", doctorId);



  Doctors.findByIdAndRemove(doctorId)
    .then((result) => {
      console.log("Removed doctor Apply request : ");
    })
    .catch((error) => {
      console.log(err);
    });

    res.status(200).send({
      message: "Deleted Doctor",
    });
  } catch (err) {
    res.status(500).send({
      message: "Doctor Approval Failed",
      success: false,
      err,
    });
  }
};

module.exports = {
  showalluserz,
  getUserDetails,
  updateUserz,
  deleteUserz,
  blockUser,
  unblockUser,
  adminViewAllDoctors,
  detailedDoctorVerify,
  approveDoctorRequest,
  RejectDoctorAccount,
};
