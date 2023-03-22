const Users=require('../models/userModel')
const jwt = require("jsonwebtoken");

 const JWT_SECRET_KEY = "PRONAV123" 

module.exports = async (req, res, next) => {
  try {

    console.log(" admin authPage reached middleware")
    console.log("auth",req.headers["authorization"]);
    const token = req.headers["authorization"]?.split(" ")[1];
    console.log("9995", token);

    
    console.log("222",JWT_SECRET_KEY);

    jwt.verify(token,JWT_SECRET_KEY, async(err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Auth failed",
          success: false,
        });
      } else {
        req.body.AdminId = decoded.userId;
        console.log("234", decoded);
      
           const adminDetails = await Users.findOne({ _id: decoded.userId });
        console.log("33333",adminDetails);

 
      next(); 
       
      }
    });
  } catch (error) {
    console.log("err",error)
    return res.status(401).send({
      message: "Auth failed",
      success: false,
    });
    
  }
};