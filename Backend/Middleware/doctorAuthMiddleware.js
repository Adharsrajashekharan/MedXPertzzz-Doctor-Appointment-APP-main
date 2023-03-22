const Users=require('../models/userModel')
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {

    console.log("authPage reached middleware")
    console.log("auth", req.headers["authorization"]);
    const token = req.headers["authorization"].split(" ")[1];
    console.log("4555", token);
    console.log("222", process.env.JWT_SECRET_KEY);

    jwt.verify(token, process.env.JWT_SECRET_KEY, async(err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Auth failed",
          success: false,
        });
      } else {
        req.body.doctorId = decoded.userId;
        console.log("234", decoded);
      
           const doctorDetails = await Users.findOne({ _id: decoded.userId });
        console.log("33333",doctorDetails);

 
      next(); 
       
      }
    });
  } catch (error) {
    return res.status(401).send({
      message: "Auth failed",
      success: false,
    });
  }
};