//import required packages
const express = require("express");
const router = express.Router();
//importing doctors controller  for particular endpoint 
const doctorController = require("../controller/doctors_Controller");

/* 1. /doctors/register -->  with username and password*/
router.post("/register", doctorController.Register);

/* 2. /doctors/login --> returns the JWT token and doctor can log in */
router.post("/login", doctorController.Login);

module.exports = router;
