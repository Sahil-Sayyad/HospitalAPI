// require all the packages
const mongoose = require("mongoose");
require("dotenv").config();
//mongo cloud url 
const MONGO = process.env.MONGOURL;
// connect to db
mongoose
  .connect(MONGO)
  .then(() => console.log("DB Connecnected succesfully"))
  .catch((err) => console.log("error in connecting db", err));