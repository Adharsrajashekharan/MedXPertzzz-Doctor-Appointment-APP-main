const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {

    
    const token = req.headers["authorization"].split(" ")[1];
  console.log("4555",token)
  console.log("222", process.env.JWT_SECRET_KEY); 

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Auth failed",
          success: false,
        });
      } else {
        req.body.userId = decoded.userId;
        console.log("234", decoded);
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
