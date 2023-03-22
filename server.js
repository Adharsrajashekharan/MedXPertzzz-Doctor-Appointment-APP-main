const express = require("express");
const app = express();
const cors = require("cors");



require("dotenv").config();

const dbConfig = require("./Backend/config/dbConfig");
app.use(express.json());

const {
  notFound,
  errorHandler,
} = require("./Backend/Middleware/errorHandlingMiddleware");

app.use(
  cors({
    origin: "*",
  })
);




// app.use(cors({
//   origin: 'http://localhost:3000'
// }));



const userRoute = require("./Backend/routes/userRoute");
const adminRoutes = require("./Backend/routes/adminRoutes");
const doctorRoutes = require("./Backend/routes/doctorsRoutes");
// const path = require("path");

app.use("/api/users", userRoute);
app.use("/api/admin", adminRoutes);
app.use("/api/doctors", doctorRoutes);



app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Node Express Server Started at ${port}!`));
