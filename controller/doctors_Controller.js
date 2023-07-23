//import required packages
const Doctor = require("../models/doctor");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

/* 1. /doctors/register -->  with username and password*/
module.exports.Register = async (req, res) => {
  try {
    const { email, password, name, confirmPassword } = req.body;
    //check if password and confirm password are equal
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Password and confirmPassword do not match!!",
        data: {},
      });
    }
    if (!email || !password || !name) {
      return res.status(400).json({
        message: "Please Fill the All the Required Fields!!",
        data: {},
      });
    }
    //encrypt the password
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    const createdDoctor = await Doctor.create({
      email,
      password: hashedPassword,
      name,
    });

    return res.status(201).json({
      message: "Record Created Sucessfully",
      data: createdDoctor,
    });
  } catch (err) {
    //unique constarint voilation
    if (err.code === 11000) {
      return res.status(400).json({
        message: "Please provide different email id",
        data: {},
      });
    }
    return res.status(500).json({
      message: "Something went wrong while creating record ",
      data: {},
    });
  }
};

/* 2. /doctors/login --> returns the JWT token and doctor can log in */
module.exports.Login = async (req, res) => {
  try {
    //fetch email and password from req.body
    const { email, password } = req.body;
    //fetch docter data by using emailID
    const doctor = await Doctor.findOne({ email: email });
    //check wheter doctor exists or not
    if (!doctor) {
      return res.status(400).json({
        message: "Please Register To use Our Platform ",
        data: {},
      });
    }

    //compare both the credentails doctor entered pass and dn password
    const isPasswordMatched = bcrypt.compareSync(password, doctor.password); //method will return a boolean value
    if (!isPasswordMatched) {
      return res.status(400).json({
        message: "email/password does not match",
        data: [],
      });
    }

    const token = jwt.sign({ email: doctor.email }, "secretkey", {
      expiresIn: "1h",
    });

    return res.status(200).json({
      message: "doctor logged in sucessfully!!",
      data: { token },
    });
  } catch (err) {
    return res.status(500).json({
      message: "something went wrong while logging in!!",
      data: {
        err,
      },
    });
  }
};
